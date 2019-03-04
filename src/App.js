import React, { Component } from 'react';
import './style.css';
import Upload from "./components/Upload";
import FileList from "./components/FileList";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="content">
          <Upload />
          <FileList />
        </div>
      </div>
    );
  }
}

export default App;
