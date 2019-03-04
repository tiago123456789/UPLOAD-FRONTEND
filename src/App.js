import React, { Component } from 'react';
import filesize from "filesize";
import { uniqueId } from "lodash"
import './style.css';
import Upload from "./components/Upload";
import FileList from "./components/FileList";
import PostService from "./services/PostService";

class App extends Component {

  constructor(props) {
    super(props);
    this._postService = new PostService();
    this.state = {
      uploadedFiles: []
    }

    this.deleteFile = this.deleteFile.bind(this);
  }

  deleteFile(id) {
    this._postService.remover(id).then(() => {
      this.setState({
        uploadedFiles: this.state.uploadedFiles.filter((file) => file.id != id)
      });
    });
  }

  changeProgressUpload(file, progress) {
    this.setState({
      uploadedFiles: this.state.uploadedFiles
        .map((fileUploaded) => {
          if (fileUploaded.id == file.id) {
            fileUploaded.percenteProgress = progress;
          }

          return fileUploaded;
        })
    });
  }

  setFileWithUploaded(file, dataFileUploaded) {
    this.setState({
      uploadedFiles: this.state.uploadedFiles
        .map((fileUploaded) => {
          if (fileUploaded.id == file.id) {
            fileUploaded.uploaded = true;
            fileUploaded.id = dataFileUploaded._id;
            fileUploaded.url = dataFileUploaded.url;
          }

          return fileUploaded;
        })
    })
  }

  processUploadFile(file) {
    const dataForm = new FormData();
    dataForm.append("file", file.file);

    this._postService.upload(dataForm, (e) => {
      const progress = parseInt(Math.round(e.loaded * 100) / e.total);
      this.changeProgressUpload(file, progress);
    })
      .then((data) => {
        this.setFileWithUploaded(file, data);
      });
  }

  handlerFiles = (files) => {
    const uploadedFiles = files.map((file, indice) => ({
      file: file,
      id: uniqueId(),
      url: file.url || URL.createObjectURL(file),
      size: filesize(file.size),
      error: false,
      uploaded: false,
      percenteProgress: 0
    }));

    this.setState({ uploadedFiles: [...this.state.uploadedFiles, ...uploadedFiles] });

    uploadedFiles.forEach((file) => {
      this.processUploadFile(file);
    });
  }

  componentDidMount() {
    this._postService.findAll()
      .then((files) => {
        this.setState({
          uploadedFiles: files.map((file) => {
            return {
              id: file._id,
              error: false,
              uploaded: true,
              size: filesize(file.size),
              url: file.url
            }
          })
        });
      });
  }

  componentWillMount() {
    this.state.uploadedFiles.forEach((file) => URL.revokeObjectUrl(file.url));
  }

  render() {
    return (
      <div className="container">
        <div className="content">
          <Upload uploadFile={this.handlerFiles} />
          <FileList deleteFile={this.deleteFile} files={this.state.uploadedFiles} />
        </div>
      </div>
    );
  }
}

export default App;
