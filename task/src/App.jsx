import { useRef, useState } from "react";
import "./App.css";

const API_BASE_URL = "http://localhost:6060/api/v1";
const ATTACHMENT_ENDPOINT = "/task-attachment";

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
const DIFFICULTIES = ["Beginner", "Intermediate", "Advanced"];
const STATUSES = ["TODO", "IN PROGRESS", "REVIEW", "DONE"];

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

function App() {
  const [uiState, setUiState] = useState("default");
  const [form, setForm] = useState({
    internshipId: "1042",
    title: "Develop Login Page with Validation & Security",
    description:
      "Build a responsive login interface using Tailwind CSS with client/server validation, email formatting, and secure password standards.",
    category: CATEGORIES[0],
    difficulty: DIFFICULTIES[1],
    status: STATUSES[0],
    start: "2025-04-01",
    deadline: "2025-04-10",
  });
  const [criteria, setCriteria] = useState([
    { id: 1, name: "Code Quality & Clean Architecture", weight: 40 },
    { id: 2, name: "Responsive UI & Cross-device Compatibility", weight: 35 },
    { id: 3, name: "Technical Documentation & Unit Testing", weight: 25 },
  ]);
  // Each item: { id, name, size, type, status: "uploading" | "done" | "error", progress, error }
  const [files, setFiles] = useState([]);
  const [dragging, setDragging] = useState(false);
  const fileInputRef = useRef(null);
  const uploadsRef = useRef({}); // id -> XMLHttpRequest

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
        let response = null;
        try {
          response = JSON.parse(xhr.responseText);
        } catch {
          /* response body is optional */
        }
        patchFile(item.id, { status: "done", progress: 100, response });
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
      patchFile(item.id, { status: "error", error: "Network error. Please retry." });
    };
    xhr.onabort = () => {
      delete uploadsRef.current[item.id];
    };
    xhr.send(body);
  };

  const startUploads = (fileList) => {
    Array.from(fileList).forEach((file, i) => {
      const item = {
        id: `${Date.now()}-${i}-${Math.random().toString(36).slice(2, 8)}`,
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
  const titleError = uiState === "error" && !form.title.trim();
  const showError = uiState === "error";
  const loading = uiState === "loading";

  const setField = (key) => (e) => setForm({ ...form, [key]: e.target.value });
  const updateCriterion = (id, patch) =>
    setCriteria(criteria.map((c) => (c.id === id ? { ...c, ...patch } : c)));
  const removeCriterion = (id) =>
    setCriteria(criteria.filter((c) => c.id !== id));
  const addCriterion = () =>
    setCriteria([...criteria, { id: Date.now(), name: "", weight: 0 }]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title.trim() || !totalOk) {
      setUiState("error");
      return;
    }
    setUiState("loading");
    setTimeout(() => setUiState("success"), 1200);
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
            Please fix the highlighted fields before creating the task.
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
                <div className="input input-rel">
                  <input
                    id="iid"
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
                <div className={`input${titleError ? " invalid" : ""}`}>
                  <input
                    id="title"
                    value={form.title}
                    onChange={setField("title")}
                  />
                </div>
                {titleError && <p className="help err">Title is required.</p>}
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
                  <div className="input">
                    <select
                      id="cat"
                      value={form.category}
                      onChange={setField("category")}
                    >
                      {CATEGORIES.map((c) => (
                        <option key={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="diff">Difficulty</label>
                  <div className="input select">
                    <select
                      id="diff"
                      value={form.difficulty}
                      onChange={setField("difficulty")}
                    >
                      {DIFFICULTIES.map((c) => (
                        <option key={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="status">Initial Status</label>
                  <div className="input select">
                    <select
                      id="status"
                      value={form.status}
                      onChange={setField("status")}
                    >
                      {STATUSES.map((c) => (
                        <option key={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="row two dates">
                <div className="field">
                  <label htmlFor="start">Start Date</label>
                  <div className="input date">
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
                  <div className="input date">
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
                {files.map((f) =>
                  f.status === "done" ? (
                    <div className="file" key={f.id}>
                      <div className="file-info">
                        <span
                          className={`file-icon ${
                            f.name.toLowerCase().endsWith(".pdf") ? "pdf" : "zip"
                          }`}
                        >
                          {f.name.toLowerCase().endsWith(".pdf") ? (
                            <PdfIcon />
                          ) : (
                            <FolderIcon />
                          )}
                        </span>
                        <div className="file-text">
                          <span className="file-name">{f.name}</span>
                          <span className="file-meta">
                            {formatSize(f.size)} • Uploaded
                          </span>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="icon-btn"
                        aria-label={`Remove ${f.name}`}
                        onClick={() => removeFile(f.id)}
                      >
                        <CloseIcon />
                      </button>
                    </div>
                  ) : (
                    <div
                      className={`active-upload${
                        f.status === "error" ? " failed" : ""
                      }`}
                      key={f.id}
                    >
                      <div className="active-top">
                        <span className="active-name">
                          {f.status === "error" ? <CloseIcon /> : <SyncIcon />}
                          <span>{f.name}</span>
                        </span>
                        <span className="active-pct">
                          {f.status === "error" ? (
                            <>
                              {f.error}
                              <button
                                type="button"
                                className="link-btn"
                                onClick={() => retryFile(f)}
                              >
                                Retry
                              </button>
                            </>
                          ) : (
                            `${f.progress}% Uploading`
                          )}
                          <button
                            type="button"
                            className="link-btn muted"
                            aria-label={`Cancel ${f.name}`}
                            onClick={() => removeFile(f.id)}
                          >
                            {f.status === "error" ? "Dismiss" : "Cancel"}
                          </button>
                        </span>
                      </div>
                      <div className="progress">
                        <span
                          style={{
                            width: `${f.status === "error" ? 100 : f.progress}%`,
                          }}
                        />
                      </div>
                    </div>
                  ),
                )}
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
