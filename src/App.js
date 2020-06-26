import React, { useState, useEffect } from "react";
import Marked from "marked";
import "./App.css";

function App() {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    Marked.setOptions({
      renderer: new Marked.Renderer(),
      pedantic: false,
      gfm: true,
      breaks: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      xhtml: false,
    });
    document.querySelector(".output").innerHTML = Marked(markdown);
  }, [markdown]);

  return (
    <div className="App">
      <header>
        <h1>Markdown Preview</h1>
      </header>
      <div className="container">
        <div className="markdown">
          <textarea
            name="md"
            id="md"
            cols="30"
            rows="10"
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
          ></textarea>
        </div>
        <div className="output"></div>
      </div>
    </div>
  );
}

export default App;