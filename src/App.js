import React, { useState, useEffect } from "react";
import Marked from "marked";
import "./App.css";

function App() {
  const [markdown, setMarkdown] = useState("");
  const [preview, setPreview] = useState(false);

  useEffect(() => {
    Marked.setOptions({
      renderer: new Marked.Renderer(),
      pedantic: false,
      gfm: true,
      breaks: true,
      sanitize: false,
      smartLists: true,
      smartypants: true,
      xhtml: false,
    });
    document.querySelector(".output").innerHTML = Marked(markdown);
  }, [markdown]);

  return (
    <div className="App">
      <header>
        <h1>Markdown Preview</h1>
      </header>
      <button
        onClick={() => {
          setPreview(!preview);
          document.querySelector(".markdown").classList.toggle("hide");
          document.querySelector(".output").classList.toggle("hide");
        }}
      >
        &#128065;
      </button>
      <div className="container">
        <div className="content">
          <div className="markdown">
            <textarea
              name="md"
              id="md"
              cols="30"
              rows="10"
              placeholder="Type markdown text here..."
              value={markdown}
              onChange={(e) => setMarkdown(e.target.value)}
            ></textarea>
          </div>
          <div className="output hide"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
