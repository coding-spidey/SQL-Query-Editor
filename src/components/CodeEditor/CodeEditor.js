import "./CodeEditor.css";
import { Button } from "react-bootstrap";
import ReactPrismEditor from "react-prism-editor";

const CodeEditor = () => {
  const {
    lineNumber,
    readOnly,
    code,
    theme,
    language,
    showLanguage,
    clipboard,
  } = {
    language: "sql",
    theme: "default",
    lineNumber: true,
    readOnly: false,
    showLanguage: false,
    clipboard: false,
    code: `SELECT * 
FROM employees;
    
    
    
`,
  };
  return (
    <>
      <div>
        <h3>
          SQL editor view{" "}
          <span>
            <Button className="btn-primary">Run</Button>
          </span>
        </h3>
      </div>
      <ReactPrismEditor
        language={language}
        theme={theme}
        code={code}
        lineNumber={lineNumber}
        readOnly={readOnly}
        clipboard={clipboard}
        showLanguage={showLanguage}
      />
    </>
  );
};

export default CodeEditor;
