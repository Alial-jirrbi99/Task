# Responsive design implementation

_Exported on 11/5/2026 at 15:22:51 GMT+2 from Cursor (3.17.8)_

---

**User**

Implement the attached design as accurately as possible. Use the provided CSS code as a reference. Write all JSX code in App.jsx and all styling in App.css. Match the reference image as closely as possible, ensure the design is fully responsive, and avoid changing unrelated files or functionality.

/_ Main _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: center;
padding: 96px 0px 32px;

width: 1280px;
height: 1948px;
min-height: 736px;

background: #FAF8FF;

/_ Inside auto layout _/
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;

/_ Container _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

width: 688px;
max-width: 720px;
height: 1820px;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

/_ Aside - Interactive State Switcher Preview Bar:margin _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px 0px 24px;

width: 688px;
height: 64px;

/_ Inside auto layout _/
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;

/_ Aside - Interactive State Switcher Preview Bar _/

/_ Auto layout _/
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 8px;
gap: 196.13px;

width: 688px;
height: 40px;

background: #F2F3FF;
box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
border-radius: 12px;

/_ Inside auto layout _/
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;

/_ Container _/

/_ Auto layout _/
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
gap: 4px;

width: 150.56px;
height: 16px;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

/_ Container _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

width: 13.5px;
height: 13.5px;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

/_ Icon _/

width: 13.5px;
height: 13.5px;

background: #0037B0;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

/_ Container _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

width: 133.06px;
height: 16px;

/_ Inside auto layout _/
flex: none;
order: 1;
flex-grow: 0;

/_ Text _/

width: 133.06px;
height: 16px;

font-family: 'Liberation Serif';
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 16px;
/_ identical to box height, or 133% _/
display: flex;
align-items: center;

color: #434655;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

/_ Container _/

/_ Auto layout _/
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
align-items: center;
align-content: center;
padding: 0px;
gap: 4px;

width: 320.81px;
height: 24px;

/_ Inside auto layout _/
flex: none;
order: 1;
flex-grow: 0;

/_ Button _/

/_ Auto layout _/
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 4px 16px;

width: 70px;
height: 24px;

background: #0037B0;
box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
border-radius: 8px;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

/_ Text _/

width: 38px;
height: 16px;

font-family: 'Liberation Serif';
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 16px;
/_ identical to box height, or 133% _/
display: flex;
align-items: center;
text-align: center;

color: #FFFFFF;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

/_ Button _/

/_ Auto layout _/
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 4px 16px;

width: 93.45px;
height: 24px;

background: #EAEDFF;
border-radius: 8px;

/_ Inside auto layout _/
flex: none;
order: 1;
flex-grow: 0;

/_ Text _/

width: 61.45px;
height: 16px;

font-family: 'Liberation Serif';
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 16px;
/_ identical to box height, or 133% _/
display: flex;
align-items: center;
text-align: center;

color: #434655;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

/_ Button _/

/_ Auto layout _/
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 4px 16px;

width: 74.69px;
height: 24px;

background: #EAEDFF;
border-radius: 8px;

/_ Inside auto layout _/
flex: none;
order: 2;
flex-grow: 0;

/_ Text _/

width: 42.69px;
height: 16px;

font-family: 'Liberation Serif';
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 16px;
/_ identical to box height, or 133% _/
display: flex;
align-items: center;
text-align: center;

color: #434655;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

/_ Button _/

/_ Auto layout _/
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 4px 16px;

width: 70.67px;
height: 24px;

background: #EAEDFF;
border-radius: 8px;

/_ Inside auto layout _/
flex: none;
order: 3;
flex-grow: 0;

/_ Text _/

width: 38.67px;
height: 16px;

font-family: 'Liberation Serif';
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 16px;
/_ identical to box height, or 133% _/
display: flex;
align-items: center;
text-align: center;

color: #434655;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

/_ Page Header & Context:margin _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px 0px 24px;

width: 688px;
height: 138px;

/_ Inside auto layout _/
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;

/_ Page Header & Context _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 4px;

width: 688px;
height: 114px;

/_ Inside auto layout _/
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;

/_ Nav - Breadcrumb navigation _/

/_ Auto layout _/
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
gap: 4px;

width: 688px;
height: 16px;

/_ Inside auto layout _/
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;

/_ Container _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

width: 109.89px;
height: 16px;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

/_ Text _/

width: 109.89px;
height: 16px;

font-family: 'Liberation Serif';
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 16px;
/_ identical to box height, or 133% _/
display: flex;
align-items: center;

color: #434655;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

/_ Container _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

width: 4.32px;
height: 7px;

/_ Inside auto layout _/
flex: none;
order: 1;
flex-grow: 0;

/_ Icon _/

width: 4.32px;
height: 7px;

background: #434655;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

/_ Container _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

width: 82.36px;
height: 16px;

/_ Inside auto layout _/
flex: none;
order: 2;
flex-grow: 0;

/_ Text _/

width: 82.36px;
height: 16px;

font-family: 'Liberation Serif';
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 16px;
/_ identical to box height, or 133% _/
display: flex;
align-items: center;

color: #434655;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

/_ Container _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

width: 4.32px;
height: 7px;

/_ Inside auto layout _/
flex: none;
order: 3;
flex-grow: 0;

/_ Icon _/

width: 4.32px;
height: 7px;

background: #434655;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

/_ Container _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

width: 87.13px;
height: 16px;

/_ Inside auto layout _/
flex: none;
order: 4;
flex-grow: 0;

/_ Text _/

width: 87.13px;
height: 16px;

font-family: 'Liberation Serif';
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 16px;
/_ identical to box height, or 133% _/
display: flex;
align-items: center;

color: #0037B0;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

/_ Container _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 8px;

width: 688px;
height: 94px;

/_ Inside auto layout _/
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;

/_ Container _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 4px;

width: 554.61px;
height: 62px;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

/_ Heading 1 _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

width: 554.61px;
height: 36px;

/_ Inside auto layout _/
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;

/_ Text _/

width: 135.7px;
height: 36px;

font-family: 'Liberation Serif';
font-style: normal;
font-weight: 700;
font-size: 28px;
line-height: 36px;
/_ identical to box height, or 129% _/
display: flex;
align-items: center;
letter-spacing: -0.7px;

color: #131B2E;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

/_ Container _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

width: 554.61px;
height: 22px;

/_ Inside auto layout _/
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;

/_ Text _/

width: 554.61px;
height: 22px;

font-family: 'Liberation Serif';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 22px;
/_ identical to box height, or 157% _/
display: flex;
align-items: center;

color: #434655;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

/_ Background+Shadow _/

/_ Auto layout _/
display: flex;
flex-direction: row;
align-items: center;
padding: 4px 16px;
gap: 4px;

width: 241.34px;
height: 24px;

background: #DBE1FF;
box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
border-radius: 9999px;

/_ Inside auto layout _/
flex: none;
order: 1;
flex-grow: 0;

/_ Background _/

width: 8px;
height: 8px;

background: #0051D5;
border-radius: 9999px;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

/_ Container _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

width: 197.34px;
height: 16px;

/_ Inside auto layout _/
flex: none;
order: 1;
flex-grow: 0;

/_ Text _/

width: 197.34px;
height: 16px;

font-family: 'Liberation Serif';
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 16px;
/_ identical to box height, or 133% _/
display: flex;
align-items: center;

color: #00174B;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

/_ Global Form _/

width: 688px;
height: 1618px;

/_ Inside auto layout _/
flex: none;
order: 2;
align-self: stretch;
flex-grow: 0;

/_ Section - Card 1: Basic Information _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 24px;
gap: 16px;

position: absolute;
height: 571px;
left: 0px;
right: 0px;
top: 0px;

background: #FFFFFF;
box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
border-radius: 12px;

/_ Container _/

/_ Auto layout _/
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 0px 0px 8px;
gap: 412.52px;

width: 640px;
height: 40px;

/_ Inside auto layout _/
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;

/_ Container _/

/_ Auto layout _/
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
gap: 8px;

width: 179.5px;
height: 32px;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

/_ Background _/

/_ Auto layout _/
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px;

width: 32px;
height: 32px;

background: #DCE1FF;
border-radius: 8px;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

/_ Container _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

width: 13.5px;
height: 15px;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

/_ Icon _/

width: 13.5px;
height: 15px;

background: #001551;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

/_ Heading 2 _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

width: 139.5px;
height: 26px;

/_ Inside auto layout _/
flex: none;
order: 1;
flex-grow: 0;

/_ Text _/

width: 139.5px;
height: 26px;

font-family: 'Liberation Serif';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 26px;
/_ identical to box height, or 144% _/
display: flex;
align-items: center;

color: #131B2E;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

/_ Container _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

width: 47.98px;
height: 16px;

/_ Inside auto layout _/
flex: none;
order: 1;
flex-grow: 0;

/_ Text _/

width: 47.98px;
height: 16px;

font-family: 'Liberation Serif';
font-style: normal;
font-weight: 500;
font-size: 11px;
line-height: 16px;
/_ identical to box height, or 145% _/
display: flex;
align-items: center;

color: #434655;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

/_ Container _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 16px;

width: 640px;
height: 467px;

/_ Inside auto layout _/
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;

/_ Internship ID _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 4px;

width: 640px;
height: 86px;

/_ Inside auto layout _/
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;

/_ Label _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

width: 640px;
height: 20px;

/_ Inside auto layout _/
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;

/_ Internship ID _/

width: 640px;
height: 20px;

font-family: 'Liberation Serif';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 20px;
/_ identical to box height, or 143% _/
display: flex;
align-items: center;

color: #131B2E;

/_ Inside auto layout _/
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;

/_ Container _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
isolation: isolate;

width: 640px;
height: 42px;

/_ Inside auto layout _/
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;

/_ Input _/

/_ Auto layout _/
display: flex;
flex-direction: row;
justify-content: center;
align-items: flex-start;
padding: 10px 96px 10px 16px;

width: 640px;
height: 42px;

background: #F2F3FF;
border-radius: 8px;

/_ Inside auto layout _/
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;
z-index: 0;

/_ Container _/

/_ Auto layout _/
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;

width: 528px;
height: 22px;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 1;

/_ Container _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

width: 513px;
height: 22px;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 1;

/_ Container _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

width: 513px;
height: 22px;
overflow: scroll;

/_ Inside auto layout _/
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;

/_ 1042 _/

width: 513px;
height: 22px;

font-family: 'Liberation Serif';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 22px;
/_ identical to box height, or 157% _/
display: flex;
align-items: center;

color: #131B2E;

/_ Inside auto layout _/
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;

/_ Rectangle:align-stretch _/

/_ Auto layout _/
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px;

width: 15px;
height: 22px;

/_ Inside auto layout _/
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;

/_ Rectangle _/

width: 15px;
min-width: 15px;
height: 22px;

opacity: 0;

/_ Inside auto layout _/
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;

/_ Container _/

/_ Auto layout _/
display: flex;
flex-direction: row;
align-items: center;
padding: 0px 16px 0px 0px;

position: absolute;
width: 68.25px;
right: 0px;
top: 0px;
bottom: 0px;

/_ Inside auto layout _/
flex: none;
order: 1;
flex-grow: 0;
z-index: 1;

/_ Text _/

width: 52.25px;
height: 16px;

font-family: 'Liberation Serif';
font-style: normal;
font-weight: 500;
font-size: 11px;
line-height: 16px;
/_ identical to box height, or 145% _/
display: flex;
align-items: center;

color: #747686;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

/_ Container _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

width: 640px;
height: 16px;

/_ Inside auto layout _/
flex: none;
order: 2;
align-self: stretch;
flex-grow: 0;

/_ This ID links the task to the academic internship registry records. _/

width: 640px;
height: 16px;

font-family: 'Liberation Serif';
font-style: normal;
font-weight: 500;
font-size: 11px;
line-height: 16px;
/_ identical to box height, or 145% _/
display: flex;
align-items: center;

color: #434655;

/_ Inside auto layout _/
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;

/_ Task Title _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 4px;

width: 640px;
height: 66px;

/_ Inside auto layout _/
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;

/_ Label _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

width: 640px;
height: 20px;

/_ Inside auto layout _/
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;

/_ Title _ \*/

width: 640px;
height: 20px;

font-family: 'Liberation Serif';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 20px;
/_ identical to box height, or 143% _/
display: flex;
align-items: center;

color: #131B2E;

/_ Inside auto layout _/
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;

/_ Input _/

/_ Auto layout _/
display: flex;
flex-direction: row;
justify-content: center;
align-items: flex-start;
padding: 10px 16px;

width: 640px;
height: 42px;

background: #F2F3FF;
border-radius: 8px;

/_ Inside auto layout _/
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;

/_ Container _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

width: 608px;
height: 22px;
overflow: scroll;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 1;

/_ Develop Login Page with Validation & Security _/

width: 608px;
height: 22px;

font-family: 'Liberation Serif';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 22px;
/_ identical to box height, or 157% _/
display: flex;
align-items: center;

color: #131B2E;

/_ Inside auto layout _/
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;

/_ Description _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px 0px 7px;
gap: 4px;

width: 640px;
height: 113px;

/_ Inside auto layout _/
flex: none;
order: 2;
align-self: stretch;
flex-grow: 0;

/_ Label _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

width: 640px;
height: 20px;

/_ Inside auto layout _/
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;

/_ Description & Technical Requirements _/

width: 640px;
height: 20px;

font-family: 'Liberation Serif';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 20px;
/_ identical to box height, or 143% _/
display: flex;
align-items: center;

color: #131B2E;

/_ Inside auto layout _/
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;

/_ Textarea _/

/_ Auto layout _/
display: flex;
flex-direction: row;
justify-content: center;
align-items: flex-start;
padding: 8px 16px 30px;

width: 640px;
height: 82px;
overflow: scroll;

background: #F2F3FF;
border-radius: 8px;

/_ Inside auto layout _/
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;

/_ Container _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

width: 608px;
height: 44px;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 1;

/_ Build a responsive login interface using Tailwind CSS with client/server validation, email formatting, and secure password standards. _/

width: 608px;
height: 44px;

font-family: 'Liberation Serif';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 22px;
/_ or 157% _/
display: flex;
align-items: center;

color: #131B2E;

/_ Inside auto layout _/
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;

/_ Row: Category, Difficulty, Status _/

/_ Auto layout _/
display: flex;
flex-direction: row;
justify-content: center;
align-items: flex-start;
padding: 0px;
gap: 16px;

width: 640px;
height: 66px;

/_ Inside auto layout _/
flex: none;
order: 3;
align-self: stretch;
flex-grow: 0;

/_ Container _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 4px;

width: 202.67px;
height: 66px;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 1;

/_ Label _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

width: 202.67px;
height: 20px;

/_ Inside auto layout _/
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;

/_ Category _/

width: 202.67px;
height: 20px;

font-family: 'Liberation Serif';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 20px;
/_ identical to box height, or 143% _/
display: flex;
align-items: center;

color: #131B2E;

/_ Inside auto layout _/
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;

/_ Input _/

/_ Auto layout _/
display: flex;
flex-direction: row;
justify-content: center;
align-items: flex-start;
padding: 10px 16px;

width: 202.67px;
height: 42px;

background: #F2F3FF;
border-radius: 8px;

/_ Inside auto layout _/
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;

/_ Container _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

width: 170.67px;
height: 22px;
overflow: scroll;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 1;

/_ Frontend Development _/

width: 170.67px;
height: 22px;

font-family: 'Liberation Serif';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 22px;
/_ identical to box height, or 157% _/
display: flex;
align-items: center;

color: #131B2E;

/_ Inside auto layout _/
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;

/_ Container _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px 0px 5px;
gap: 4px;

width: 202.67px;
height: 66px;

/_ Inside auto layout _/
flex: none;
order: 1;
flex-grow: 1;

/_ Label _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

width: 202.67px;
height: 20px;

/_ Inside auto layout _/
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;

/_ Difficulty _/

width: 202.67px;
height: 20px;

font-family: 'Liberation Serif';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 20px;
/_ identical to box height, or 143% _/
display: flex;
align-items: center;

color: #131B2E;

/_ Inside auto layout _/
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;

/_ Options _/

/_ Auto layout _/
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 10px 32px 10px 20px;

width: 202.67px;
height: 37px;

background: #F2F3FF;
border-radius: 8px;

/_ Inside auto layout _/
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;

/_ Container _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 1px 0px;

width: 150.67px;
height: 17px;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 1;

/_ Intermediate _/

width: 150.67px;
height: 15px;

font-family: 'Liberation Serif';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 15px;
/_ identical to box height, or 107% _/
display: flex;
align-items: center;

color: #131B2E;

/_ Inside auto layout _/
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;

/_ Container _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px 0px 5px;
gap: 4px;

width: 202.67px;
height: 66px;

/_ Inside auto layout _/
flex: none;
order: 2;
flex-grow: 1;

/_ Label _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

width: 202.67px;
height: 20px;

/_ Inside auto layout _/
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;

/_ Initial Status _/

width: 202.67px;
height: 20px;

font-family: 'Liberation Serif';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 20px;
/_ identical to box height, or 143% _/
display: flex;
align-items: center;

color: #131B2E;

/_ Inside auto layout _/
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;

/_ Options _/

/_ Auto layout _/
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 10px 32px 10px 20px;

width: 202.67px;
height: 37px;

background: #F2F3FF;
border-radius: 8px;

/_ Inside auto layout _/
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;

/_ Container _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 1px 0px;

width: 150.67px;
height: 17px;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 1;

/_ TODO _/

width: 150.67px;
height: 15px;

font-family: 'Liberation Serif';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 15px;
/_ identical to box height, or 107% _/
display: flex;
align-items: center;

color: #131B2E;

/_ Inside auto layout _/
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;

/_ Row: Dates _/

/_ Auto layout _/
display: flex;
flex-direction: row;
justify-content: center;
align-items: flex-start;
padding: 4px 0px 0px;
gap: 16px;

width: 640px;
height: 72px;

/_ Inside auto layout _/
flex: none;
order: 4;
align-self: stretch;
flex-grow: 0;

/_ Container _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 4px;

width: 312px;
height: 68px;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 1;

/_ Label _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

width: 312px;
height: 20px;

/_ Inside auto layout _/
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;

/_ Start Date _/

width: 312px;
height: 20px;

font-family: 'Liberation Serif';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 20px;
/_ identical to box height, or 143% _/
display: flex;
align-items: center;

color: #131B2E;

/_ Inside auto layout _/
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;

/_ Input _/

/_ Auto layout _/
display: flex;
flex-direction: row;
justify-content: center;
align-items: flex-start;
padding: 10px 16px;

width: 312px;
height: 44px;

background: #F2F3FF;
border-radius: 8px;

/_ Inside auto layout _/
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;

/_ Container _/

/_ Auto layout _/
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;

width: 280px;
height: 24px;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 1;

/_ Container _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

width: 262px;
height: 24px;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 1;

/_ Paragraph _/

/_ Auto layout _/
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 1px;
gap: 1px;

width: 67.65px;
height: 24px;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

/_ Spinbutton - Month → 04 _/

width: 13.25px;
height: 9.45px;

background: #131B2E;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

/_ Text _/

width: 3.89px;
height: 22px;

font-family: 'Liberation Serif';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 22px;
/_ identical to box height, or 157% _/
display: flex;
align-items: center;

color: #131B2E;

/_ Inside auto layout _/
flex: none;
order: 1;
flex-grow: 0;

/_ Spinbutton - Day → 01 _/

width: 12.63px;
height: 9.45px;

background: #131B2E;

/_ Inside auto layout _/
flex: none;
order: 2;
flex-grow: 0;

/_ Text _/

width: 3.89px;
height: 22px;

font-family: 'Liberation Serif';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 22px;
/_ identical to box height, or 157% _/
display: flex;
align-items: center;

color: #131B2E;

/_ Inside auto layout _/
flex: none;
order: 3;
flex-grow: 0;

/_ Spinbutton - Year → 2025 _/

width: 28px;
height: 22px;

font-family: 'Liberation Serif';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 22px;
/_ identical to box height, or 157% _/
display: flex;
align-items: center;

color: #131B2E;

/_ Inside auto layout _/
flex: none;
order: 4;
flex-grow: 0;

/_ Button menu _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 2px;

width: 18px;
height: 18px;

/_ Inside auto layout _/
flex: none;
order: 1;
flex-grow: 0;

/_ image _/

width: 14px;
height: 13.12px;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

/_ Container _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 4px;

width: 312px;
height: 68px;

/_ Inside auto layout _/
flex: none;
order: 1;
flex-grow: 1;

/_ Label _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

width: 312px;
height: 20px;

/_ Inside auto layout _/
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;

/_ Deadline _/

width: 312px;
height: 20px;

font-family: 'Liberation Serif';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 20px;
/_ identical to box height, or 143% _/
display: flex;
align-items: center;

color: #131B2E;

/_ Inside auto layout _/
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;

/_ Input _/

/_ Auto layout _/
display: flex;
flex-direction: row;
justify-content: center;
align-items: flex-start;
padding: 10px 16px;

width: 312px;
height: 44px;

background: #F2F3FF;
border-radius: 8px;

/_ Inside auto layout _/
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;

/_ Container _/

/_ Auto layout _/
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;

width: 280px;
height: 24px;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 1;

/_ Container _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

width: 262px;
height: 24px;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 1;

/_ Paragraph _/

/_ Auto layout _/
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 1px;
gap: 1px;

width: 67.26px;
height: 24px;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

/_ Spinbutton - Month → 04 _/

width: 13.25px;
height: 9.45px;

background: #131B2E;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

/_ Text _/

width: 3.89px;
height: 22px;

font-family: 'Liberation Serif';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 22px;
/_ identical to box height, or 157% _/
display: flex;
align-items: center;

color: #131B2E;

/_ Inside auto layout _/
flex: none;
order: 1;
flex-grow: 0;

/_ Spinbutton - Day → 10 _/

width: 12.24px;
height: 9.45px;

background: #131B2E;

/_ Inside auto layout _/
flex: none;
order: 2;
flex-grow: 0;

/_ Text _/

width: 3.89px;
height: 22px;

font-family: 'Liberation Serif';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 22px;
/_ identical to box height, or 157% _/
display: flex;
align-items: center;

color: #131B2E;

/_ Inside auto layout _/
flex: none;
order: 3;
flex-grow: 0;

/_ Spinbutton - Year → 2025 _/

width: 28px;
height: 22px;

font-family: 'Liberation Serif';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 22px;
/_ identical to box height, or 157% _/
display: flex;
align-items: center;

color: #131B2E;

/_ Inside auto layout _/
flex: none;
order: 4;
flex-grow: 0;

/_ Button menu _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 2px;

width: 18px;
height: 18px;

/_ Inside auto layout _/
flex: none;
order: 1;
flex-grow: 0;

/_ image _/

width: 14px;
height: 13.12px;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

/_ Section - Card 2: Evaluation Criteria _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 24px;
gap: 8px;

position: absolute;
height: 366px;
left: 0px;
right: 0px;
top: 595px;

background: #FFFFFF;
box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
border-radius: 12px;

/_ Container _/

/_ Auto layout _/
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-between;
align-items: center;
align-content: center;
padding: 0px 0px 8px;
gap: 4px 401.52px;

width: 640px;
height: 40px;

/_ Inside auto layout _/
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;

/_ Container _/

/_ Auto layout _/
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
gap: 8px;

width: 190.5px;
height: 32px;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

/_ Background _/

/_ Auto layout _/
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px;

width: 32px;
height: 32px;

background: #DBE1FF;
border-radius: 8px;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

/_ Container _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

width: 15px;
height: 13.5px;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

/_ Icon _/

width: 15px;
height: 13.5px;

background: #00174B;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

/_ Container _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

width: 150.5px;
height: 26px;

/_ Inside auto layout _/
flex: none;
order: 1;
flex-grow: 0;

/_ Heading 2 → Evaluation Criteria _/

width: 150.5px;
height: 26px;

font-family: 'Liberation Serif';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 26px;
/_ identical to box height, or 144% _/
display: flex;
align-items: center;

color: #131B2E;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

/_ Container _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

width: 47.98px;
height: 16px;

/_ Inside auto layout _/
flex: none;
order: 1;
flex-grow: 0;

/_ Text _/

width: 47.98px;
height: 16px;

font-family: 'Liberation Serif';
font-style: normal;
font-weight: 500;
font-size: 11px;
line-height: 16px;
/_ identical to box height, or 145% _/
display: flex;
align-items: center;

color: #434655;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

/_ Container _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

width: 640px;
height: 20px;

/_ Inside auto layout _/
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;

/_ Define evaluation dimensions and percentage weights. Total must equal 100% to ensure academic grading equity. _/

width: 640px;
height: 20px;

font-family: 'Liberation Serif';
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 20px;
/_ identical to box height, or 154% _/
display: flex;
align-items: center;

color: #434655;

/_ Inside auto layout _/
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;

/_ Criteria List Container _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 8px 0px 0px;
gap: 8px;

width: 640px;
height: 186px;

/_ Inside auto layout _/
flex: none;
order: 2;
align-self: stretch;
flex-grow: 0;

/_ Row 1 _/

/_ Auto layout _/
display: flex;
flex-direction: row;
align-items: center;
padding: 8px;
gap: 8px;

width: 640px;
height: 54px;

background: #F2F3FF;
border-radius: 8px;

/_ Inside auto layout _/
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;

/_ Container _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

width: 466.67px;
height: 36px;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 1;

/_ Input _/

/_ Auto layout _/
display: flex;
flex-direction: row;
justify-content: center;
align-items: flex-start;
padding: 8px 16px;

width: 466.67px;
height: 36px;

background: #FFFFFF;
border-radius: 8px;

/_ Inside auto layout _/
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;

/_ Container _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

width: 434.67px;
height: 20px;
overflow: scroll;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 1;

/_ Code Quality & Clean Architecture _/

width: 434.67px;
height: 20px;

font-family: 'Liberation Serif';
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 20px;
/_ identical to box height, or 154% _/
display: flex;
align-items: center;

color: #131B2E;

/_ Inside auto layout _/
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;

/_ Background _/

/_ Auto layout _/
display: flex;
flex-direction: row;
align-items: center;
padding: 6px 8px;
gap: 4px;

width: 112px;
height: 21.45px;

background: #FFFFFF;
border-radius: 8px;

/_ Inside auto layout _/
flex: none;
order: 1;
flex-grow: 0;

/_ Input _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

width: 83.16px;
height: 9.45px;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 1;

/_ Container _/

/_ Auto layout _/
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;

width: 83.16px;
height: 9.45px;

/_ Inside auto layout _/
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;

/_ Container _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

width: 68.16px;
height: 9.45px;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 1;

/_ Container _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: center;
padding: 0px;

width: 68.16px;
height: 9.45px;
overflow: scroll;

/_ Inside auto layout _/
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;

/_ Icon _/

width: 13.28px;
height: 9.45px;

background: #131B2E;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

/_ Rectangle:align-stretch _/

/_ Auto layout _/
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px;

width: 15px;
height: 9.45px;

/_ Inside auto layout _/
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;

/_ Rectangle _/

width: 15px;
min-width: 15px;
height: 9.45px;

opacity: 0;

/_ Inside auto layout _/
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;

/_ Container _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

width: 8.84px;
height: 7.46px;

/_ Inside auto layout _/
flex: none;
order: 1;
flex-grow: 0;

/_ Icon _/

width: 8.84px;
height: 7.46px;

background: #747686;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

/_ Button _/

/_ Auto layout _/
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 8px 8px 15px;

width: 29.33px;
height: 38px;

border-radius: 8px;

/_ Inside auto layout _/
flex: none;
order: 2;
flex-grow: 0;

/_ Container _/

/_ Auto layout _/
display: flex;
flex-direction: row;
justify-content: center;
align-items: flex-start;
padding: 0px;

width: 13.33px;
height: 15px;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

/_ Icon _/

width: 13.33px;
height: 15px;

background: #BA1A1A;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

/_ Row 2 _/

/_ Auto layout _/
display: flex;
flex-direction: row;
align-items: center;
padding: 8px;
gap: 8px;

width: 640px;
height: 54px;

background: #F2F3FF;
border-radius: 8px;

/_ Inside auto layout _/
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;

/_ Container _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

width: 466.67px;
height: 36px;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 1;

/_ Input _/

/_ Auto layout _/
display: flex;
flex-direction: row;
justify-content: center;
align-items: flex-start;
padding: 8px 16px;

width: 466.67px;
height: 36px;

background: #FFFFFF;
border-radius: 8px;

/_ Inside auto layout _/
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;

/_ Container _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

width: 434.67px;
height: 20px;
overflow: scroll;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 1;

/_ Responsive UI & Cross-device Compatibility _/

width: 434.67px;
height: 20px;

font-family: 'Liberation Serif';
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 20px;
/_ identical to box height, or 154% _/
display: flex;
align-items: center;

color: #131B2E;

/_ Inside auto layout _/
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;

/_ Background _/

/_ Auto layout _/
display: flex;
flex-direction: row;
align-items: center;
padding: 6px 8px;
gap: 4px;

width: 112px;
height: 21.41px;

background: #FFFFFF;
border-radius: 8px;

/_ Inside auto layout _/
flex: none;
order: 1;
flex-grow: 0;

/_ Input _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

width: 83.16px;
height: 9.41px;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 1;

/_ Container _/

/_ Auto layout _/
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;

width: 83.16px;
height: 9.41px;

/_ Inside auto layout _/
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;

/_ Container _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

width: 68.16px;
height: 9.41px;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 1;

/_ Container _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: center;
padding: 0px;

width: 68.16px;
height: 9.41px;
overflow: scroll;

/_ Inside auto layout _/
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;

/_ Icon _/

width: 12.96px;
height: 9.41px;

background: #131B2E;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

/_ Rectangle:align-stretch _/

/_ Auto layout _/
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px;

width: 15px;
height: 9.41px;

/_ Inside auto layout _/
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;

/_ Rectangle _/

width: 15px;
min-width: 15px;
height: 9.41px;

opacity: 0;

/_ Inside auto layout _/
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;

/_ Container _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

width: 8.84px;
height: 7.46px;

/_ Inside auto layout _/
flex: none;
order: 1;
flex-grow: 0;

/_ Icon _/

width: 8.84px;
height: 7.46px;

background: #747686;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

/_ Button _/

/_ Auto layout _/
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 8px 8px 15px;

width: 29.33px;
height: 38px;

border-radius: 8px;

/_ Inside auto layout _/
flex: none;
order: 2;
flex-grow: 0;

/_ Container _/

/_ Auto layout _/
display: flex;
flex-direction: row;
justify-content: center;
align-items: flex-start;
padding: 0px;

width: 13.33px;
height: 15px;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

/_ Icon _/

width: 13.33px;
height: 15px;

background: #BA1A1A;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

/_ Row 3 _/

/_ Auto layout _/
display: flex;
flex-direction: row;
align-items: center;
padding: 8px;
gap: 8px;

width: 640px;
height: 54px;

background: #F2F3FF;
border-radius: 8px;

/_ Inside auto layout _/
flex: none;
order: 2;
align-self: stretch;
flex-grow: 0;

/_ Container _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

width: 466.67px;
height: 36px;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 1;

/_ Input _/

/_ Auto layout _/
display: flex;
flex-direction: row;
justify-content: center;
align-items: flex-start;
padding: 8px 16px;

width: 466.67px;
height: 36px;

background: #FFFFFF;
border-radius: 8px;

/_ Inside auto layout _/
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;

/_ Container _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

width: 434.67px;
height: 20px;
overflow: scroll;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 1;

/_ Technical Documentation & Unit Testing _/

width: 434.67px;
height: 20px;

font-family: 'Liberation Serif';
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 20px;
/_ identical to box height, or 154% _/
display: flex;
align-items: center;

color: #131B2E;

/_ Inside auto layout _/
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;

/_ Background _/

/_ Auto layout _/
display: flex;
flex-direction: row;
align-items: center;
padding: 6px 8px;
gap: 4px;

width: 112px;
height: 21.41px;

background: #FFFFFF;
border-radius: 8px;

/_ Inside auto layout _/
flex: none;
order: 1;
flex-grow: 0;

/_ Input _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

width: 83.16px;
height: 9.41px;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 1;

/_ Container _/

/_ Auto layout _/
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;

width: 83.16px;
height: 9.41px;

/_ Inside auto layout _/
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;

/_ Container _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

width: 68.16px;
height: 9.41px;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 1;

/_ Container _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: center;
padding: 0px;

width: 68.16px;
height: 9.41px;
overflow: scroll;

/_ Inside auto layout _/
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;

/_ Icon _/

width: 12.9px;
height: 9.41px;

background: #131B2E;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

/_ Rectangle:align-stretch _/

/_ Auto layout _/
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px;

width: 15px;
height: 9.41px;

/_ Inside auto layout _/
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;

/_ Rectangle _/

width: 15px;
min-width: 15px;
height: 9.41px;

opacity: 0;

/_ Inside auto layout _/
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;

/_ Container _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

width: 8.84px;
height: 7.46px;

/_ Inside auto layout _/
flex: none;
order: 1;
flex-grow: 0;

/_ Icon _/

width: 8.84px;
height: 7.46px;

background: #747686;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

/_ Button _/

/_ Auto layout _/
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 8px 8px 15px;

width: 29.33px;
height: 38px;

border-radius: 8px;

/_ Inside auto layout _/
flex: none;
order: 2;
flex-grow: 0;

/_ Container _/

/_ Auto layout _/
display: flex;
flex-direction: row;
justify-content: center;
align-items: flex-start;
padding: 0px;

width: 13.33px;
height: 15px;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

/_ Icon _/

width: 13.33px;
height: 15px;

background: #BA1A1A;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

/_ Controls: Add Criterion & Live Sum Display _/

/_ Auto layout _/
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 12px 0px 0px;
gap: 325.45px;

width: 640px;
height: 48px;

/_ Inside auto layout _/
flex: none;
order: 3;
align-self: stretch;
flex-grow: 0;

/_ Button _/

/_ Auto layout _/
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 8px 16px;
gap: 4px;

width: 142.38px;
height: 36px;

background: #EAEDFF;
border-radius: 8px;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

/_ Container _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: center;
padding: 0px;

width: 10.5px;
height: 10.5px;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

/_ Icon _/

width: 10.5px;
height: 10.5px;

background: #131B2E;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

/_ Container _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: center;
padding: 0px;

width: 95.88px;
height: 20px;

/_ Inside auto layout _/
flex: none;
order: 1;
flex-grow: 0;

/_ Text _/

width: 95.88px;
height: 20px;

font-family: 'Liberation Serif';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 20px;
/_ identical to box height, or 143% _/
display: flex;
align-items: center;
text-align: center;

color: #131B2E;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

/_ Live Score Feedback Widget _/

/_ Auto layout _/
display: flex;
flex-direction: row;
align-items: center;
padding: 6px 16px;
gap: 8px;

width: 161.67px;
height: 32px;

background: #7FFC97;
border-radius: 9999px;

/_ Inside auto layout _/
flex: none;
order: 1;
flex-grow: 0;

/_ Container _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

width: 15px;
height: 15px;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

/_ Icon _/

width: 15px;
height: 15px;

background: #00501F;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

/_ Container _/

/_ Auto layout _/
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
gap: 4px;

width: 106.67px;
height: 20px;

/_ Inside auto layout _/
flex: none;
order: 1;
flex-grow: 0;

/_ Container _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

width: 35.28px;
height: 20px;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

/_ Text _/

width: 35.28px;
height: 20px;

font-family: 'Liberation Serif';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 20px;
/_ identical to box height, or 143% _/
display: flex;
align-items: center;

color: #002109;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

/_ Container _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

width: 21px;
height: 20px;

/_ Inside auto layout _/
flex: none;
order: 1;
flex-grow: 0;

/_ Text _/

width: 21px;
height: 20px;

font-family: 'Liberation Serif';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 20px;
/_ identical to box height, or 143% _/
display: flex;
align-items: center;

color: #002109;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

/_ Container _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

width: 42.39px;
height: 20px;

/_ Inside auto layout _/
flex: none;
order: 2;
flex-grow: 0;

/_ Text _/

width: 42.39px;
height: 20px;

font-family: 'Liberation Serif';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 20px;
/_ identical to box height, or 143% _/
display: flex;
align-items: center;

color: #002109;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

/_ Section - Card 3: Attachments _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 24px;
gap: 8px;

position: absolute;
height: 424px;
left: 0px;
right: 0px;
top: 1000px;

background: #FFFFFF;
box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
border-radius: 12px;

/_ Container _/

/_ Auto layout _/
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 0px 0px 8px;
gap: 252.5px;

width: 640px;
height: 40px;

/_ Inside auto layout _/
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;

/_ Container _/

/_ Auto layout _/
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
gap: 8px;

width: 339.52px;
height: 32px;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

/_ Background _/

/_ Auto layout _/
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px;

width: 32px;
height: 32px;

background: #DCE1FF;
border-radius: 8px;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

/_ Container _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

width: 9.38px;
height: 15px;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

/_ Icon _/

width: 9.38px;
height: 15px;

background: #001551;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

/_ Heading 2 _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

width: 299.52px;
height: 26px;

/_ Inside auto layout _/
flex: none;
order: 1;
flex-grow: 0;

/_ Text _/

width: 299.52px;
height: 26px;

font-family: 'Liberation Serif';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 26px;
/_ identical to box height, or 144% _/
display: flex;
align-items: center;

color: #131B2E;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

/_ Container _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

width: 47.98px;
height: 16px;

/_ Inside auto layout _/
flex: none;
order: 1;
flex-grow: 0;

/_ Text _/

width: 47.98px;
height: 16px;

font-family: 'Liberation Serif';
font-style: normal;
font-weight: 500;
font-size: 11px;
line-height: 16px;
/_ identical to box height, or 145% _/
display: flex;
align-items: center;

color: #434655;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

/_ Drag & Drop Upload Zone _/

/_ Auto layout _/
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 24px;

width: 640px;
height: 138px;

background: #F2F3FF;
border-radius: 12px;

/_ Inside auto layout _/
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;

/_ Margin _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px 0px 4px;

width: 48px;
height: 52px;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

/_ Background _/

/_ Auto layout _/
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px;

width: 48px;
height: 48px;

background: #DBE1FF;
border-radius: 9999px;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

/_ Container _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: center;
padding: 0px;

width: 25.67px;
height: 18.67px;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

/_ Icon _/

width: 25.67px;
height: 18.67px;

background: #0051D5;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

/_ Container _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: center;
padding: 0px;

width: 254.94px;
height: 20px;

/_ Inside auto layout _/
flex: none;
order: 1;
flex-grow: 0;

/_ Text _/

width: 254.94px;
height: 20px;

font-family: 'Liberation Serif';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 20px;
/_ identical to box height, or 143% _/
display: flex;
align-items: center;
text-align: center;

color: #131B2E;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

/_ Margin _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 2px 0px 0px;

width: 333.39px;
height: 18px;

/_ Inside auto layout _/
flex: none;
order: 2;
flex-grow: 0;

/_ Container _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: center;
padding: 0px;

width: 333.39px;
height: 16px;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

/_ Text _/

width: 333.39px;
height: 16px;

font-family: 'Liberation Serif';
font-style: normal;
font-weight: 500;
font-size: 11px;
line-height: 16px;
/_ identical to box height, or 145% _/
display: flex;
align-items: center;
text-align: center;

color: #434655;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

/_ Upload List _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 8px 0px 0px;
gap: 8px;

width: 640px;
height: 182px;

/_ Inside auto layout _/
flex: none;
order: 2;
align-self: stretch;
flex-grow: 0;

/_ File Item 1 _/

/_ Auto layout _/
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 8px;
gap: 385.53px;

width: 640px;
height: 58px;

background: #F2F3FF;
border-radius: 8px;

/_ Inside auto layout _/
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;

/_ Container _/

/_ Auto layout _/
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
gap: 8px;

width: 206.47px;
height: 42px;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

/_ Background _/

/_ Auto layout _/
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px;

width: 36px;
height: 36px;

background: #FFDAD6;
border-radius: 8px;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

/_ Container _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

width: 16.67px;
height: 16.67px;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

/_ Icon _/

width: 16.67px;
height: 16.67px;

background: #93000A;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

/_ Container _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px 0px 3px;
gap: 3px;

width: 162.47px;
height: 42px;

/_ Inside auto layout _/
flex: none;
order: 1;
flex-grow: 0;

/_ Container _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

width: 162.47px;
height: 20px;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

/_ Text _/

width: 162.47px;
height: 20px;

font-family: 'Liberation Serif';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 20px;
/_ identical to box height, or 143% _/
display: flex;
align-items: center;

color: #131B2E;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

/_ Text _/

width: 85.73px;
height: 16px;

font-family: 'Liberation Serif';
font-style: normal;
font-weight: 500;
font-size: 11px;
line-height: 16px;
/_ identical to box height, or 145% _/
display: flex;
align-items: center;

color: #434655;

/_ Inside auto layout _/
flex: none;
order: 1;
flex-grow: 0;

/_ Button _/

/_ Auto layout _/
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 6px 6px 13px;

width: 23.67px;
height: 30.67px;

border-radius: 8px;

/_ Inside auto layout _/
flex: none;
order: 1;
flex-grow: 0;

/_ Container _/

/_ Auto layout _/
display: flex;
flex-direction: row;
justify-content: center;
align-items: flex-start;
padding: 0px;

width: 11.67px;
height: 11.67px;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

/_ Icon _/

width: 11.67px;
height: 11.67px;

background: #747686;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

/_ File Item 2 _/

/_ Auto layout _/
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 8px;
gap: 396.72px;

width: 640px;
height: 58px;

background: #F2F3FF;
border-radius: 8px;

/_ Inside auto layout _/
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;

/_ Container _/

/_ Auto layout _/
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
gap: 8px;

width: 195.28px;
height: 42px;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

/_ Background _/

/_ Auto layout _/
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px;

width: 36px;
height: 36px;

background: #DBE1FF;
border-radius: 8px;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

/_ Container _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

width: 16.67px;
height: 13.33px;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

/_ Icon _/

width: 16.67px;
height: 13.33px;

background: #00174B;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

/_ Container _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px 0px 3px;
gap: 3px;

width: 151.28px;
height: 42px;

/_ Inside auto layout _/
flex: none;
order: 1;
flex-grow: 0;

/_ Container _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

width: 151.28px;
height: 20px;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

/_ Text _/

width: 151.28px;
height: 20px;

font-family: 'Liberation Serif';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 20px;
/_ identical to box height, or 143% _/
display: flex;
align-items: center;

color: #131B2E;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

/_ Text _/

width: 91.23px;
height: 16px;

font-family: 'Liberation Serif';
font-style: normal;
font-weight: 500;
font-size: 11px;
line-height: 16px;
/_ identical to box height, or 145% _/
display: flex;
align-items: center;

color: #434655;

/_ Inside auto layout _/
flex: none;
order: 1;
flex-grow: 0;

/_ Button _/

/_ Auto layout _/
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 6px 6px 13px;

width: 23.67px;
height: 30.67px;

border-radius: 8px;

/_ Inside auto layout _/
flex: none;
order: 1;
flex-grow: 0;

/_ Container _/

/_ Auto layout _/
display: flex;
flex-direction: row;
justify-content: center;
align-items: flex-start;
padding: 0px;

width: 11.67px;
height: 11.67px;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

/_ Icon _/

width: 11.67px;
height: 11.67px;

background: #747686;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

/_ Simulated Active Upload Row _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 8px;
gap: 4px;

width: 640px;
height: 42px;

background: #F2F3FF;
border-radius: 8px;

/_ Inside auto layout _/
flex: none;
order: 2;
align-self: stretch;
flex-grow: 0;

/_ Container _/

/_ Auto layout _/
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 0px;
gap: 400.67px;

width: 624px;
height: 16px;

/_ Inside auto layout _/
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;

/_ Container _/

/_ Auto layout _/
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
gap: 4px;

width: 143.66px;
height: 16px;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

/_ Container _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

width: 12px;
height: 12px;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

/_ Icon _/

width: 12px;
height: 12px;

background: #0051D5;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

/_ Container _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

width: 127.66px;
height: 16px;

/_ Inside auto layout _/
flex: none;
order: 1;
flex-grow: 0;

/_ Text _/

width: 127.66px;
height: 16px;

font-family: 'Liberation Serif';
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 16px;
/_ identical to box height, or 133% _/
display: flex;
align-items: center;

color: #131B2E;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

/_ Container _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

width: 73.67px;
height: 16px;

/_ Inside auto layout _/
flex: none;
order: 1;
flex-grow: 0;

/_ Text _/

width: 73.67px;
height: 16px;

font-family: 'Liberation Serif';
font-style: normal;
font-weight: 600;
font-size: 11px;
line-height: 16px;
/_ identical to box height, or 145% _/
display: flex;
align-items: center;

color: #0051D5;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

/_ Background _/

width: 624px;
height: 6px;

background: #EAEDFF;
border-radius: 9999px;

/_ Inside auto layout _/
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;

/_ Background _/

position: absolute;
left: 0%;
right: 32%;
top: 0px;
bottom: 0px;

background: #0051D5;
border-radius: 9999px;

/_ Visual Anchor / Internship Team Hint _/

/_ Auto layout _/
display: flex;
flex-direction: row;
align-items: center;
padding: 16px;
gap: 16px;

position: absolute;
height: 72px;
left: 0px;
right: 0px;
top: 1450px;

background: rgba(226, 231, 255, 0.6);
border-radius: 12px;

/_ Background _/

/_ Auto layout _/
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px;

width: 40px;
height: 40px;

background: #0037B0;
border-radius: 9999px;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

/_ Container _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

width: 16.67px;
height: 13.33px;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

/_ Icon _/

width: 16.67px;
height: 13.33px;

background: #FFFFFF;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

/_ Container _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

width: 600px;
height: 36px;

/_ Inside auto layout _/
flex: none;
order: 1;
flex-grow: 1;

/_ Heading 4 _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

width: 600px;
height: 20px;

/_ Inside auto layout _/
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;

/_ Direct Academic Supervision _/

width: 600px;
height: 20px;

font-family: 'Liberation Serif';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 20px;
/_ identical to box height, or 143% _/
display: flex;
align-items: center;

color: #131B2E;

/_ Inside auto layout _/
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;

/_ Container _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

width: 600px;
height: 16px;

/_ Inside auto layout _/
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;

/_ Field mentors will automatically review intern submissions based on your criteria. _/

width: 600px;
height: 16px;

font-family: 'Liberation Serif';
font-style: normal;
font-weight: 500;
font-size: 11px;
line-height: 16px;
/_ identical to box height, or 145% _/
display: flex;
align-items: center;

color: #434655;

/_ Inside auto layout _/
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;

/_ Footer - Sticky Bottom Action Bar:margin _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 24px 0px 0px;

position: absolute;
height: 96px;
left: 0px;
right: 0px;
top: 1522px;

/_ Footer - Sticky Bottom Action Bar _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 16px;
isolation: isolate;

width: 688px;
height: 72px;

background: rgba(255, 255, 255, 0.95);
backdrop-filter: blur(24px);
/_ Note: backdrop-filter has minimal browser support _/
border-radius: 12px;

/_ Inside auto layout _/
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;

/_ Footer - Sticky Bottom Action Bar:shadow _/

position: absolute;
left: 0px;
right: 0px;
top: 0px;
bottom: 0px;

background: rgba(255, 255, 255, 0.002);
box-shadow: 0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 8px 10px -6px rgba(0, 0, 0, 0.1);
border-radius: 12px;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;
z-index: 0;

/_ Container _/

/_ Auto layout _/
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 0px;
gap: 47.22px;

width: 656px;
height: 40px;

/_ Inside auto layout _/
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;
z-index: 1;

/_ Container _/

/_ Auto layout _/
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
gap: 4px;

width: 307.81px;
height: 20px;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

/_ Container _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

width: 15px;
height: 15.04px;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

/_ Icon _/

width: 15px;
height: 15.04px;

background: #747686;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

/_ Container _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

width: 288.81px;
height: 20px;

/_ Inside auto layout _/
flex: none;
order: 1;
flex-grow: 0;

/_ Text _/

width: 288.81px;
height: 20px;

font-family: 'Liberation Serif';
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 20px;
/_ identical to box height, or 154% _/
display: flex;
align-items: center;

color: #434655;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

/_ Container _/

/_ Auto layout _/
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
gap: 8px;

width: 296.47px;
height: 40px;

/_ Inside auto layout _/
flex: none;
order: 1;
flex-grow: 0;

/_ Button _/

/_ Auto layout _/
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 10px 16px;

width: 148.27px;
height: 40px;

background: #F2F3FF;
border-radius: 8px;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

/_ Text _/

width: 116.27px;
height: 20px;

font-family: 'Liberation Serif';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 20px;
/_ identical to box height, or 143% _/
display: flex;
align-items: center;
text-align: center;

color: #131B2E;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

/_ Button _/

/_ Auto layout _/
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 10px 24px;
gap: 4px;

width: 140.2px;
min-width: 140px;
height: 40px;

background: #0037B0;
box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
border-radius: 8px;

/_ Inside auto layout _/
flex: none;
order: 1;
flex-grow: 0;

/_ Container _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: center;
padding: 0px;

width: 16.5px;
height: 15px;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

/_ Icon _/

width: 16.5px;
height: 15px;

background: #FFFFFF;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

/_ Container _/

/_ Auto layout _/
display: flex;
flex-direction: column;
align-items: center;
padding: 0px;

width: 71.7px;
height: 20px;

/_ Inside auto layout _/
flex: none;
order: 1;
flex-grow: 0;

/_ Text _/

width: 71.7px;
height: 20px;

font-family: 'Liberation Serif';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 20px;
/_ identical to box height, or 143% _/
display: flex;
align-items: center;
text-align: center;

color: #FFFFFF;

/_ Inside auto layout _/
flex: none;
order: 0;
flex-grow: 0;

---

**Cursor**

Remove unused icons and the build output.

I built the Create Task page from your design and CSS reference. The JSX is all in `task/src/App.jsx` and the styling is all in `task/src/App.css`. It lints clean and `vite build` succeeds. I haven't opened it in a browser, so I haven't compared it to the reference image or tested the mobile layout visually.

- **Page:**
  - The state switcher bar, breadcrumb, header and cohort chip are in as in the design.
  - The three step cards are Basic Information, Evaluation Criteria and Attachments, followed by the supervision hint and the bottom action bar.
  - Colors, font sizes and weights, radii, shadows and spacing follow your CSS.
  - Where there's no 'Liberation Serif', the text falls back to Times New Roman.
- **Icons:** I drew them as inline SVGs, so they won't be pixel-identical to the originals.
- **Responsiveness:**
  - The container is capped at 688px and shrinks to fit narrower screens.
  - Below 720px the field rows stack, the switcher and footer stack, and the cards get less padding.
  - Below 420px the criterion rows wrap and the footer buttons go full width.
  - The action bar is sticky at the bottom of the screen instead of fixed in place.
- **Interactivity (my addition, not in the design):**
  - The four state buttons switch between Default, Input Error, Loading and Success.
  - Criteria can be edited, added and removed, and the live total turns red if it isn't 100.
  - The attached files can be removed, and the form fields are controlled.
  - Creating the task shows a short loading state, then a success message.
  - Submitting with an empty title or a total other than 100 shows the error banner.

I didn't edit `index.css`. It sets a narrow centered `#root` with a border, so I overrode that in `App.css`. I also replaced the old template styles that were in `App.css`.

---

**User**

@App.jsx (441-501)
Implement the file attachment API request for this section.

When the user selects a file through the attachment input, send a POST request to:

- Base URL: `http://localhost:6060/api/v1`
- Endpoint: `/task-attachment`
- Parameter: `files`

Use `FormData` with the field name `files`.

**Important UI behavior:**

- The preloaded files shown in the design, including their delete buttons, are for visual reference only. Do not display them initially.
- When a user selects a file, display its upload progress using the same loading design shown in the reference.
- Once the upload is complete, display the uploaded file using the same design, including the delete option.
- Support uploading multiple files, displaying each file's loading and completed state independently.

Handle loading, success, and error states. Keep the existing design and avoid modifying unrelated functionality.

---

**Cursor**

Backtick escaping broke the constant; fixing it, plus a size formatter.

The Attachments section now uploads files to `http://localhost:6060/api/v1/task-attachment`. Lint is clean and `vite build` succeeds. I haven't run it against your server or opened it in a browser, so none of it is tested.

**How it works**

- **Selecting files:** The dropzone is now clickable, keyboard-accessible and accepts drag-and-drop. It uses a hidden multi-file input.
- **The request:** Each file goes out as its own POST, with a `FormData` field named `files`. That way every file gets its own progress, success and error state. I used `XMLHttpRequest` because `fetch` doesn't report upload progress.
- **Initial state:** The preloaded sample files are gone, so the list starts empty.
- **Uploading:** A file shows the original loading row, with the spinning icon, name, progress bar and "NN% Uploading". The percentage stops at 99% until the server responds.
- **Uploaded:** On a 2xx response the row becomes the original file card with the size, "Uploaded" and the remove (X) button. The PDF icon shows for `.pdf` files and the folder icon for everything else.
- **Error:** On a non-2xx response or a network failure, the row turns red with the error message, taken from `message` in the JSON response if there is one. It has Retry and Dismiss links.
- **Cancel and remove:** Cancel aborts an upload in progress, and the X on a finished file removes it from the list.

**Things to know**

- The remove button only removes the file from the UI. You didn't give a delete endpoint, so nothing is sent to the server.
- I don't use the response body beyond the error message. If the server returns a file ID or URL you'll need later, it's stored on each file as `response`.
- I added the matching styles to the end of `App.css`.

---

**User**

@App.jsx (578-661)
Update the file upload progress bar to show real-time upload progress instead of jumping directly from 0% to 100%.
Make the progress bar fill gradually and smoothly from 0% to 100%, like a normal file upload.
Display the actual upload percentage continuously (e.g., 10%, 25%, 50%, 75%, 100%).
Keep the current UI design unchanged.
Ensure progress reflects the actual upload status, not a fake animation.

---

**Cursor**

The upload bar now fills gradually instead of jumping from 0% to 100%, and the number counts up with it. Lint and `vite build` pass, but I haven't tested it against your server in a browser.

**Why it jumped:** The upload was already reporting its real progress. On `localhost` a small file is sent in one chunk, so the browser reports almost nothing in between and the bar went straight from 0% to 100%.

**What I changed**

- **Easing:** I added a small `useSmoothProgress` hook and moved the file-row markup into a `FileItem` component, both in `App.jsx`. The bar and the "NN% Uploading" text ease toward the real progress from the upload and never run ahead of it.
- **Completion:** The uploaded card only appears once the bar has visibly reached 100%. Before that, a finished upload keeps showing the loading row.
- **Real values:** The target is still the real `xhr.upload.onprogress` value, held at 99% until the server responds, then 100%. Large files over a slow connection will show their true pace.
- **Retry:** A retry starts again from 0%.
- **Design:** The markup, classes and styles are the same as before.

For tiny files on localhost there's only one real progress reading. The easing makes the bar visibly fill over a fraction of a second, but those intermediate values come from the easing, not from the browser. To see natural 10%, 25%, 50% steps, test with a larger file or throttle the network in DevTools.

---

**User**

Implement the task submission using the /tasks API with the provided request payload structure.
Get the attachments data from the response of /task-attachment.
Persist form data locally so it survives page refreshes, closing the browser, or internet disconnection, and restore it when the user returns.
Clear all form fields and saved data only after a successful API request.
Remove all mock data currently displayed in the form. All fields should be empty when the page is first opened.
Keep the existing UI design unchanged.

---

**Cursor**

I can't implement the `/tasks` request yet because the payload structure didn't come through with your message. I searched the project, including `NOTES.md` and the saved chat file, and it isn't in any of them. I'd have to invent the field names, and the backend would probably reject a wrong guess.

Please send these two things:

1. **The `/tasks` request body.** A sample JSON works, or the Swagger schema. I need the exact field names and types for the title, description, dates, category, difficulty, status, internship ID, evaluation criteria and attachments.
2. **A sample `/task-attachment` response.** I need to know what the server returns for an uploaded file (for example `id`, `url`, `fileName`, `size`), and whether it's an object or an array. The attachments in the `/tasks` payload will be built from that.

Also confirm the endpoint. You wrote `/tasks` here, but your notes say `/task`. I'll use `http://localhost:6060/api/v1/tasks` unless you tell me otherwise.

Once I have these, I'll:

- Submit the form to `/tasks` with the attachment data from the upload responses.
- Save the form and the uploaded-attachment data to `localStorage`, so it survives refreshes, closing the browser and going offline.
- Restore it on load.
- Clear the form and the saved data only after the API returns success.
- Remove all the mock values so every field starts empty, with no mock defaults for the title, description, criteria or dates.
- Leave the UI design as it is.

---

**User**

The /tasks API request payload must follow this exact structure:
{
"internshipId": 12,
"title": "string",
"description": "string",
"category": "string",
"difficulty": "BEGINNER",
"status": "TODO",
"startDate": "2026-11-05",
"deadline": "2026-11-05",
"acceptedSubmissionTypes": [
"URL"
],
"evaluationCriteria": [
{
"name": "string",
"weight": 100
}
],
"attachments": [
{
"fileName": "guide.pdf",
"fileUrl": "string",
"fileSize": 245000,
"mimeType": "application/pdf"
}
]
}

Use this structure when submitting the form to /tasks.

---

**Cursor**

The form now submits to `/tasks` with your payload structure, saves a local draft, and starts completely empty. Lint is clean and `vite build` succeeds, but I haven't run it against the API or in a browser.

**Submission**

- **Request:** It sends `POST {API_BASE_URL}/tasks` with a JSON body in the exact structure you gave. I kept the base URL that's now in the file, `https://create-task-api.onrender.com/api/v1`.
- **Field mapping:**
  - `internshipId` is sent as a number.
  - `startDate` comes from the Start Date field.
  - `evaluationCriteria` is built as `{ name, weight }` with numeric weights.
  - `difficulty` is sent as `BEGINNER`, `INTERMEDIATE` or `ADVANCED`, and `status` as `TODO`, `IN_PROGRESS`, `REVIEW` or `DONE`.
- **Attachments:** Each upload's `/task-attachment` response is turned into `{ fileName, fileUrl, fileSize, mimeType }` and sent in `attachments`. It accepts an object, an array, or one nested under `data`, `attachments` or `files`, and a plain-text URL. It fills in the name, size and type from the local file if the server leaves them out.
- **Validation:** Before sending, it checks that:
  - the required fields are filled;
  - the deadline is not before the start date;
  - every criterion has a name and a weight;
  - the weights total 100;
  - no attachment is still uploading or failed.

  Problems show the first message in the existing error banner and highlight the fields.

- **Failures:** The button shows its loading state while the request runs. A server error or a network failure shows an error message and keeps all your data.

**Saving and clearing**

- **Saving:** The form, the criteria and the uploaded attachments are saved to `localStorage` on every change. A refresh, closing the browser or losing the connection doesn't lose them, and they're restored on load.
- **Clearing:** Only after the API returns success does it clear the form, the files and the saved draft, then show the success banner.
- **Empty start:** Every field starts empty, with no mock data. The dropdowns show blank, and there is one empty criterion row.
- **In-flight uploads:** An upload that's in progress or failed when you leave can't be saved, because the browser can't store the file itself, so you'd need to re-select it.

**Things to check**

- **Submission types:** `acceptedSubmissionTypes` has no field in the form, so it's always `["URL"]`, as in your example. Change `ACCEPTED_SUBMISSION_TYPES` at the top of `App.jsx` if you need other values.
- **Status and difficulty values:** Only `TODO` and `BEGINNER` appeared in your sample. The other enum values are my guesses, so check them against Swagger.
- **Upload response:** If `/task-attachment` returns no file URL under any of the names above, the file shows "Server did not return a file URL". If that happens, send me a sample response and I'll adjust the mapping.
