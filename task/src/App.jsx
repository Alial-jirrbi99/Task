import { useEffect, useRef, useState } from "react";
import "./App.css";

const API_BASE_URL = "https://create-task-api.onrender.com/api/v1";
const ATTACHMENT_ENDPOINT = "/task-attachment";
const TASK_ENDPOINT = "/tasks";
const STORAGE_KEY = "create-task-draft-v1";
const ACCEPTED_SUBMISSION_TYPES = ["URL"];

const formatSize = (bytes) => {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
};

const STATES = [
  { id: "default", label: "Default" },
  { id: "error", label: "Input Error" },
  { id: "loading", label: "Loading" },
  { id: "success", label: "Success" },
];

const CATEGORIES = [
  "Frontend Development",
  "Backend Development",
  "UI/UX Design",
  "QA & Testing",
];
const DIFFICULTIES = [
  { value: "BEGINNER", label: "Beginner" },
  { value: "INTERMEDIATE", label: "Intermediate" },
  { value: "ADVANCED", label: "Advanced" },
];
const STATUSES = [
  { value: "TODO", label: "TODO" },
  { value: "IN_PROGRESS", label: "IN PROGRESS" },
  { value: "REVIEW", label: "REVIEW" },
  { value: "DONE", label: "DONE" },
];

const EMPTY_FORM = {
  internshipId: "",
  title: "",
  description: "",
  category: "",
  difficulty: "",
  status: "",
  start: "",
  deadline: "",
};
const uid = () => `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
const newCriterion = () => ({ id: uid(), name: "", weight: "" });

// Restore the locally saved draft (survives refresh / closing the browser / offline).
const loadDraft = () => {
  const empty = { form: EMPTY_FORM, criteria: [newCriterion()], files: [] };
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!saved) return empty;
    return {
      form: { ...EMPTY_FORM, ...saved.form },
      criteria:
        Array.isArray(saved.criteria) && saved.criteria.length
          ? saved.criteria
          : empty.criteria,
      files: Array.isArray(saved.files) ? saved.files : [],
    };
  } catch {
    return empty;
  }
};

// Builds the { fileName, fileUrl, fileSize, mimeType } object sent in /tasks
// from the /task-attachment response (falls back to the local file info).
const toAttachment = (response, file) => {
  let entry = response;
  for (const key of ["data", "attachments", "files"]) {
    if (entry && !Array.isArray(entry) && typeof entry === "object" && entry[key]) {
      entry = entry[key];
    }
  }
  if (Array.isArray(entry)) entry = entry[0];
  if (typeof entry === "string") entry = { fileUrl: entry };
  entry = entry || {};
  return {
    fileName: entry.fileName ?? entry.name ?? file.name,
    fileUrl: entry.fileUrl ?? entry.url ?? "",
    fileSize: entry.fileSize ?? entry.size ?? file.size,
    mimeType: entry.mimeType ?? entry.contentType ?? file.type,
  };
};

const Icon = ({ children, size = 16, viewBox = "0 0 24 24", ...rest }) => (
  <svg
    width={size}
    height={size}
    viewBox={viewBox}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...rest}
  >
    {children}
  </svg>
);

const TuneIcon = () => (
  <Icon size={14}>
    <path d="M4 6h10M18 6h2M4 12h2M10 12h10M4 18h12M20 18h0" />
    <circle cx="16" cy="6" r="2" />
    <circle cx="8" cy="12" r="2" />
    <circle cx="18" cy="18" r="2" />
  </Icon>
);
const ChevronRight = () => (
  <Icon size={8} strokeWidth="3">
    <path d="m9 5 7 7-7 7" />
  </Icon>
);
const ClipboardIcon = () => (
  <Icon size={16}>
    <rect x="5" y="4" width="14" height="17" rx="2" />
    <path d="M9 4h6v3H9zM9 12h6M9 16h6" />
  </Icon>
);
const ChecklistIcon = () => (
  <Icon size={16}>
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <path d="M9 4v16M13 9h5M13 15h5" />
  </Icon>
);
const ClipIcon = () => (
  <Icon size={16}>
    <path d="m21 11-9 9a5 5 0 0 1-7-7l9-9a3.5 3.5 0 0 1 5 5l-9 9a2 2 0 0 1-3-3l8-8" />
  </Icon>
);
const TrashIcon = () => (
  <Icon size={15}>
    <path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3" />
  </Icon>
);
const PlusIcon = () => (
  <Icon size={11} strokeWidth="3">
    <path d="M12 4v16M4 12h16" />
  </Icon>
);
const CheckCircle = () => (
  <Icon size={15}>
    <circle cx="12" cy="12" r="9" />
    <path d="m8 12 3 3 5-6" />
  </Icon>
);
const CloudIcon = () => (
  <Icon size={26} strokeWidth="1.8">
    <path d="M7 18a4.5 4.5 0 0 1-.6-8.96A6 6 0 0 1 18 9.5 4 4 0 0 1 17.5 18" />
    <path d="M12 12v8M9 15l3-3 3 3" />
  </Icon>
);
const PdfIcon = () => (
  <Icon size={17}>
    <rect x="3" y="3" width="14" height="14" rx="2" />
    <path d="M21 8v11a2 2 0 0 1-2 2H8" />
    <path d="m6 13 3-3 3 3" />
  </Icon>
);
const FolderIcon = () => (
  <Icon size={17}>
    <path d="M3 6a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
  </Icon>
);
const CloseIcon = () => (
  <Icon size={12} strokeWidth="2.5">
    <path d="M6 6l12 12M18 6 6 18" />
  </Icon>
);
const SyncIcon = () => (
  <Icon size={12} strokeWidth="2.5" className="spin-slow">
    <path d="M20 11a8 8 0 0 0-14-4M4 4v4h4M4 13a8 8 0 0 0 14 4M20 20v-4h-4" />
  </Icon>
);
const GroupIcon = () => (
  <Icon size={17}>
    <circle cx="9" cy="8" r="3" />
    <path d="M3 20a6 6 0 0 1 12 0M16 5a3 3 0 0 1 0 6M18 20a5 5 0 0 0-3-4.5" />
  </Icon>
);
const BellIcon = () => (
  <Icon size={15}>
    <path d="M6 16V11a6 6 0 0 1 12 0v5l2 2H4zM10 21h4" />
  </Icon>
);
const SendIcon = () => (
  <Icon size={16}>
    <circle cx="12" cy="12" r="9" />
    <path d="m8 12 3 3 5-6" />
  </Icon>
);

// Eases the displayed percentage toward the real upload progress.
// It never runs ahead of `target`, so it always reflects actual upload status.
function useSmoothProgress(target) {
  const [shown, setShown] = useState(target);
  const shownRef = useRef(target);

  useEffect(() => {
    let raf;
    const tick = () => {
      const cur = shownRef.current;
      if (cur === target) return;
      const next =
        cur > target ? target : Math.min(target, cur + Math.max(0.6, (target - cur) * 0.12));
      shownRef.current = next;
      setShown(next);
      if (next !== target) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target]);

  return shown;
}

function FileItem({ file: f, onRemove, onRetry }) {
  const shown = useSmoothProgress(f.status === "error" ? 0 : f.progress);
  const percent = Math.floor(shown);
  const isPdf = f.name.toLowerCase().endsWith(".pdf");

  // Show the completed card only once the bar has visibly reached 100%.
  if (f.status === "done" && percent >= 100) {
    return (
      <div className="file">
        <div className="file-info">
          <span className={`file-icon ${isPdf ? "pdf" : "zip"}`}>
            {isPdf ? <PdfIcon /> : <FolderIcon />}
          </span>
          <div className="file-text">
            <span className="file-name">{f.name}</span>
            <span className="file-meta">{formatSize(f.size)} • Uploaded</span>
          </div>
        </div>
        <button
          type="button"
          className="icon-btn"
          aria-label={`Remove ${f.name}`}
          onClick={() => onRemove(f.id)}
        >
          <CloseIcon />
        </button>
      </div>
    );
  }

  const failed = f.status === "error";
  return (
    <div className={`active-upload${failed ? " failed" : ""}`}>
      <div className="active-top">
        <span className="active-name">
          {failed ? <CloseIcon /> : <SyncIcon />}
          <span>{f.name}</span>
        </span>
        <span className="active-pct">
          {failed ? (
            <>
              {f.error}
              <button type="button" className="link-btn" onClick={() => onRetry(f)}>
                Retry
              </button>
            </>
          ) : (
            `${percent}% Uploading`
          )}
          <button
            type="button"
            className="link-btn muted"
            aria-label={`Cancel ${f.name}`}
            onClick={() => onRemove(f.id)}
          >
            {failed ? "Dismiss" : "Cancel"}
          </button>
        </span>
      </div>
      <div className="progress">
        <span style={{ width: `${failed ? 100 : shown}%` }} />
      </div>
    </div>
  );
}

function App() {
  const [uiState, setUiState] = useState("default");
  const [draft] = useState(loadDraft);
  const [form, setForm] = useState(draft.form);
  const [criteria, setCriteria] = useState(draft.criteria);
  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  // Each item: { id, name, size, type, status: "uploading" | "done" | "error", progress, error }
  const [files, setFiles] = useState(draft.files);
  const [dragging, setDragging] = useState(false);
  const fileInputRef = useRef(null);
  const uploadsRef = useRef({}); // id -> XMLHttpRequest

  // Save the draft locally on every change; drop it when everything is empty.
  useEffect(() => {
    const pristine =
      Object.values(form).every((v) => v === "") &&
      criteria.every((c) => !c.name && c.weight === "") &&
      files.length === 0;
    try {
      if (pristine) {
        localStorage.removeItem(STORAGE_KEY);
      } else {
        const savedFiles = files
          .filter((f) => f.status === "done")
          // eslint-disable-next-line no-unused-vars
          .map(({ file, ...rest }) => rest);
        localStorage.setItem(
          STORAGE_KEY,
          JSON.stringify({ form, criteria, files: savedFiles }),
        );
      }
    } catch {
      /* storage unavailable or full */
    }
  }, [form, criteria, files]);

  const patchFile = (id, patch) =>
    setFiles((prev) => prev.map((f) => (f.id === id ? { ...f, ...patch } : f)));

  const uploadFile = (item, file) => {
    const body = new FormData();
    body.append("files", file);

    const xhr = new XMLHttpRequest();
    uploadsRef.current[item.id] = xhr;
    xhr.open("POST", `${API_BASE_URL}${ATTACHMENT_ENDPOINT}`);

    xhr.upload.onprogress = (e) => {
      if (e.lengthComputable) {
        // keep at 99% until the server has actually responded
        patchFile(item.id, {
          progress: Math.min(99, Math.round((e.loaded / e.total) * 100)),
        });
      }
    };
    xhr.onload = () => {
      delete uploadsRef.current[item.id];
      if (xhr.status >= 200 && xhr.status < 300) {
        let response;
        try {
          response = JSON.parse(xhr.responseText);
        } catch {
          response = xhr.responseText.trim() || null; // plain-text URL
        }
        const attachment = toAttachment(response, file);
        if (!attachment.fileUrl) {
          patchFile(item.id, {
            status: "error",
            error: "Server did not return a file URL",
          });
        } else {
          patchFile(item.id, { status: "done", progress: 100, attachment });
        }
      } else {
        let message = `Upload failed (${xhr.status})`;
        try {
          message = JSON.parse(xhr.responseText).message || message;
        } catch {
          /* keep default message */
        }
        patchFile(item.id, { status: "error", error: message });
      }
    };
    xhr.onerror = () => {
      delete uploadsRef.current[item.id];
      patchFile(item.id, {
        status: "error",
        error: "Network error. Please retry.",
      });
    };
    xhr.onabort = () => {
      delete uploadsRef.current[item.id];
    };
    xhr.send(body);
  };

  const startUploads = (fileList) => {
    Array.from(fileList).forEach((file, i) => {
      const item = {
        id: `${uid()}-${i}`,
        name: file.name,
        size: file.size,
        type: file.type,
        file,
        status: "uploading",
        progress: 0,
      };
      setFiles((prev) => [...prev, item]);
      uploadFile(item, file);
    });
  };

  const handleFileSelect = (e) => {
    if (e.target.files?.length) startUploads(e.target.files);
    e.target.value = ""; // allow re-selecting the same file
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    if (e.dataTransfer.files?.length) startUploads(e.dataTransfer.files);
  };

  const retryFile = (item) => {
    patchFile(item.id, { status: "uploading", progress: 0, error: undefined });
    uploadFile(item, item.file);
  };

  const removeFile = (id) => {
    uploadsRef.current[id]?.abort();
    setFiles((prev) => prev.filter((f) => f.id !== id));
  };

  const total = criteria.reduce((s, c) => s + (Number(c.weight) || 0), 0);
  const totalOk = total === 100;
  const showError = uiState === "error";
  const loading = uiState === "loading";
  const inv = (key) => (showError && errors[key] ? " invalid" : "");

  const clearError = (key) =>
    setErrors((prev) => {
      if (!prev[key]) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
  const setField = (key) => (e) => {
    setForm({ ...form, [key]: e.target.value });
    clearError(key);
  };
  const updateCriterion = (id, patch) => {
    setCriteria(criteria.map((c) => (c.id === id ? { ...c, ...patch } : c)));
    clearError("criteria");
  };
  const removeCriterion = (id) => {
    setCriteria(criteria.filter((c) => c.id !== id));
    clearError("criteria");
  };
  const addCriterion = () => setCriteria([...criteria, newCriterion()]);

  const validate = () => {
    const e = {};
    if (!String(form.internshipId).trim() || !(Number(form.internshipId) > 0))
      e.internshipId = "A valid Internship ID is required.";
    if (!form.title.trim()) e.title = "Title is required.";
    if (!form.category) e.category = "Please select a category.";
    if (!form.difficulty) e.difficulty = "Please select a difficulty.";
    if (!form.status) e.status = "Please select an initial status.";
    if (!form.start) e.start = "Start date is required.";
    if (!form.deadline) e.deadline = "Deadline is required.";
    else if (form.start && form.deadline < form.start)
      e.deadline = "Deadline must be on or after the start date.";
    if (!criteria.length || criteria.some((c) => !c.name.trim() || c.weight === ""))
      e.criteria = "Every evaluation criterion needs a name and a weight.";
    else if (!totalOk) e.criteria = "Evaluation criteria weights must total 100%.";
    if (files.some((f) => f.status === "uploading"))
      e.files = "Please wait for the attachments to finish uploading.";
    else if (files.some((f) => f.status === "error"))
      e.files = "Remove or retry the failed attachments before submitting.";
    return e;
  };

  const resetAll = () => {
    setForm(EMPTY_FORM);
    setCriteria([newCriterion()]);
    setFiles([]);
    setErrors({});
    setErrorMessage("");
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    const found = validate();
    if (Object.keys(found).length) {
      setErrors(found);
      setErrorMessage(Object.values(found)[0]);
      setUiState("error");
      return;
    }

    const payload = {
      internshipId: Number(form.internshipId),
      title: form.title.trim(),
      description: form.description.trim(),
      category: form.category,
      difficulty: form.difficulty,
      status: form.status,
      startDate: form.start,
      deadline: form.deadline,
      acceptedSubmissionTypes: ACCEPTED_SUBMISSION_TYPES,
      evaluationCriteria: criteria.map((c) => ({
        name: c.name.trim(),
        weight: Number(c.weight),
      })),
      attachments: files
        .filter((f) => f.status === "done")
        .map((f) => f.attachment),
    };

    setErrors({});
    setErrorMessage("");
    setUiState("loading");
    try {
      const res = await fetch(`${API_BASE_URL}${TASK_ENDPOINT}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        let message = `Failed to create the task (${res.status}).`;
        try {
          const data = await res.json();
          if (data?.message) {
            message = Array.isArray(data.message)
              ? data.message.join(", ")
              : data.message;
          }
        } catch {
          /* keep default message */
        }
        throw new Error(message);
      }
      // Success: only now clear the form and the saved draft.
      resetAll();
      setUiState("success");
    } catch (err) {
      setErrorMessage(
        err instanceof TypeError
          ? "Network error. Your data is saved locally - please try again when you are back online."
          : err.message,
      );
      setUiState("error");
    }
  };

  return (
    <main className="page">
      <div className="container">
        <aside className="switcher-wrap">
          <div className="switcher">
            <div className="switcher-title">
              <TuneIcon />
              <span>Interactive State Preview:</span>
            </div>
            <div className="switcher-buttons">
              {STATES.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  className={`switch-btn${uiState === s.id ? " active" : ""}`}
                  onClick={() => setUiState(s.id)}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>
        </aside>

        <header className="header">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <span>Cooperative Training</span>
            <ChevronRight />
            <span>Academic Tasks</span>
            <ChevronRight />
            <span className="current">Create New Task</span>
          </nav>
          <div className="header-body">
            <div className="header-text">
              <h1>Create Task</h1>
              <p>
                Set up task details and define evaluation criteria to track
                intern progress accurately and objectively.
              </p>
            </div>
            <span className="cohort">
              <i className="dot" />
              <span>Cohort 2025 - Information Technology</span>
            </span>
          </div>
        </header>

        {uiState === "success" && (
          <div className="banner success" role="status">
            Task created successfully. Interns have been notified.
          </div>
        )}
        {showError && (
          <div className="banner error" role="alert">
            {errorMessage ||
              "Please fix the highlighted fields before creating the task."}
          </div>
        )}

        <form className="form" onSubmit={handleSubmit} noValidate>
          {/* Card 1 */}
          <section className="card">
            <div className="card-head">
              <div className="card-title">
                <span className="card-icon">
                  <ClipboardIcon />
                </span>
                <h2>Basic Information</h2>
              </div>
              <span className="step">Step 1 of 3</span>
            </div>

            <div className="fields">
              <div className="field">
                <label htmlFor="iid">Internship ID</label>
                <div className={`input input-rel${inv("internshipId")}`}>
                  <input
                    id="iid"
                    inputMode="numeric"
                    value={form.internshipId}
                    onChange={setField("internshipId")}
                  />
                  <span className="input-hint">Program ID</span>
                </div>
                <p className="help">
                  This ID links the task to the academic internship registry
                  records.
                </p>
              </div>

              <div className="field">
                <label htmlFor="title">Title *</label>
                <div className={`input${inv("title")}`}>
                  <input
                    id="title"
                    value={form.title}
                    onChange={setField("title")}
                  />
                </div>
                {showError && errors.title && <p className="help err">{errors.title}</p>}
              </div>

              <div className="field desc">
                <label htmlFor="desc">
                  Description &amp; Technical Requirements
                </label>
                <div className="input textarea">
                  <textarea
                    id="desc"
                    rows={2}
                    value={form.description}
                    onChange={setField("description")}
                  />
                </div>
              </div>

              <div className="row three">
                <div className="field">
                  <label htmlFor="cat">Category</label>
                  <div className={`input${inv("category")}`}>
                    <select
                      id="cat"
                      value={form.category}
                      onChange={setField("category")}
                    >
                      <option value="" disabled hidden></option>
                      {CATEGORIES.map((c) => (
                        <option key={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="diff">Difficulty</label>
                  <div className={`input select${inv("difficulty")}`}>
                    <select
                      id="diff"
                      value={form.difficulty}
                      onChange={setField("difficulty")}
                    >
                      <option value="" disabled hidden></option>
                      {DIFFICULTIES.map((d) => (
                        <option key={d.value} value={d.value}>
                          {d.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="status">Initial Status</label>
                  <div className={`input select${inv("status")}`}>
                    <select
                      id="status"
                      value={form.status}
                      onChange={setField("status")}
                    >
                      <option value="" disabled hidden></option>
                      {STATUSES.map((s) => (
                        <option key={s.value} value={s.value}>
                          {s.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="row two dates">
                <div className="field">
                  <label htmlFor="start">Start Date</label>
                  <div className={`input date${inv("start")}`}>
                    <input
                      id="start"
                      type="date"
                      value={form.start}
                      onChange={setField("start")}
                    />
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="deadline">Deadline</label>
                  <div className={`input date${inv("deadline")}`}>
                    <input
                      id="deadline"
                      type="date"
                      value={form.deadline}
                      onChange={setField("deadline")}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Card 2 */}
          <section className="card card-tight">
            <div className="card-head">
              <div className="card-title">
                <span className="card-icon alt">
                  <ChecklistIcon />
                </span>
                <h2>Evaluation Criteria</h2>
              </div>
              <span className="step">Step 2 of 3</span>
            </div>
            <p className="lead">
              Define evaluation dimensions and percentage weights. Total must
              equal 100% to ensure academic grading equity.
            </p>

            <div className="criteria">
              {criteria.map((c) => (
                <div className="criterion" key={c.id}>
                  <div className="crit-name">
                    <input
                      aria-label="Criterion name"
                      value={c.name}
                      placeholder="Criterion name"
                      onChange={(e) =>
                        updateCriterion(c.id, { name: e.target.value })
                      }
                    />
                  </div>
                  <div className="crit-weight">
                    <input
                      aria-label="Weight"
                      type="number"
                      min="0"
                      max="100"
                      value={c.weight}
                      onChange={(e) =>
                        updateCriterion(c.id, { weight: e.target.value })
                      }
                    />
                    <span>%</span>
                  </div>
                  <button
                    type="button"
                    className="icon-btn danger"
                    aria-label="Remove criterion"
                    onClick={() => removeCriterion(c.id)}
                  >
                    <TrashIcon />
                  </button>
                </div>
              ))}
            </div>

            <div className="controls">
              <button type="button" className="btn-add" onClick={addCriterion}>
                <PlusIcon />
                <span>Add Criterion</span>
              </button>
              <div className={`sum${totalOk ? "" : " bad"}`}>
                <CheckCircle />
                <span>
                  Total: <b>{total}</b> / 100%
                </span>
              </div>
            </div>
          </section>

          {/* Card 3 */}
          <section className="card card-tight">
            <div className="card-head">
              <div className="card-title">
                <span className="card-icon">
                  <ClipIcon />
                </span>
                <h2>Attachments &amp; Supporting Documents</h2>
              </div>
              <span className="step">Step 3 of 3</span>
            </div>

            <input
              ref={fileInputRef}
              type="file"
              multiple
              hidden
              onChange={handleFileSelect}
            />
            <div
              className={`dropzone${dragging ? " dragging" : ""}`}
              role="button"
              tabIndex={0}
              onClick={() => fileInputRef.current?.click()}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  fileInputRef.current?.click();
                }
              }}
              onDragOver={(e) => {
                e.preventDefault();
                setDragging(true);
              }}
              onDragLeave={() => setDragging(false)}
              onDrop={handleDrop}
            >
              <span className="drop-icon">
                <CloudIcon />
              </span>
              <p className="drop-title">
                Drag files here or browse from your device
              </p>
              <p className="drop-help">
                Supported formats: PDF, ZIP, DOCX, PNG (Max 5 files, up to 25MB
                each)
              </p>
            </div>

            {files.length > 0 && (
              <div className="uploads">
                {files.map((f) => (
                  <FileItem
                    key={f.id}
                    file={f}
                    onRemove={removeFile}
                    onRetry={retryFile}
                  />
                ))}
              </div>
            )}
          </section>

          <div className="hint">
            <span className="hint-icon">
              <GroupIcon />
            </span>
            <div className="hint-text">
              <h4>Direct Academic Supervision</h4>
              <p>
                Field mentors will automatically review intern submissions based
                on your criteria.
              </p>
            </div>
          </div>

          <footer className="footer">
            <div className="footer-note">
              <BellIcon />
              <span>
                Interns will be notified immediately upon task creation.
              </span>
            </div>
            <div className="footer-actions">
              <button type="button" className="btn-secondary">
                Cancel / Save Draft
              </button>
              <button type="submit" className="btn-primary" disabled={loading}>
                <SendIcon />
                <span>{loading ? "Creating..." : "Create Task"}</span>
              </button>
            </div>
          </footer>
        </form>
      </div>
    </main>
  );
}

export default App;
