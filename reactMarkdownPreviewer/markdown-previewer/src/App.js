import React, { useState } from 'react';
import { parse } from 'marked';
import './App.css';



function App() {
  const [editorText, setEditorText] = useState('# Heading 1\n## Subheading\nHere\'s a [link](https://www.example.com).\n\nInline code looks like this: `console.log(\'Hello world!\');`\n\nCode block:\n```javascript\nfunction greet(name) {\n  console.log(\'Hello \' + name + \'!\');\n}\ngreet(\'World\');\n```\n\n- List item 1\n- List item 2\n- List item 3\n\n> Blockquote\n\n![Image alt text](https://via.placeholder.com/150 "Image title")\n\n**Bolded text**');

  const handleEditorChange = (event) => {
    setEditorText(event.target.value);
  }

  const getMarkdownText = () => {
    const rawMarkup = parse(editorText, { breaks: true });
    return { __html: rawMarkup };
  };
  

  return (
    <div id="wrap">
      <div id="editorWrap" className="box bgColor">
        <div className="title">Editor</div>
        <textarea
          name="editor"
          id="editor"
          cols="60"
          rows="20"
          value={editorText}
          onChange={handleEditorChange}
        />
      </div>
      <div id="previewWrap" className="box bgColor">
        <div className="title">Previewer</div>
        <div id="preview" dangerouslySetInnerHTML={getMarkdownText()} />
      </div>
    </div>
  );
}

export default App;
