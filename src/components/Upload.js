import React, { Component } from "react";
import DropZone from "react-dropzone";
import "./style.css";

export default class Upload extends Component {

    renderMessageUpload(isDragActive, isDragReject) {
        let message = "";

        if (!isDragActive) message = "Arraste ou clique para fazer upload...";
        if (isDragReject) message = "Arquivo inválido!";
        if (isDragActive) message = "Solte o arquivo para fazer upload!";

        return (
            <div style={{
                "textIndent": "5px",  
                "padding": "10px 0px",
                "border": "1px dashed black",
                 "width": "100%" }}>
                 {message}
            </div>
        )

    }

    render() {
        return (
            <div className="content bg-white">
                <DropZone accept="image/*" >
                    {({ getRootProps, getInputProps, isDragActive, isDragReject }) => {
                        return (
                            <div style={{ "width": "100%"}}
                                {...getRootProps()}
                               
                            >
                                <input {...getInputProps()} />
                                {this.renderMessageUpload(isDragActive, isDragReject)}
                            </div>
                        )
                    }}
                </DropZone>
            </div>
        );
    }
}