import React, { Component } from "react";
import CircularProgressBar from "react-circular-progressbar"
import { FaLink, FaCheck, FaTrash } from 'react-icons/fa';
import 'react-circular-progressbar/dist/styles.css';



export default class FileList extends Component {

    constructor(props) {
        super(props);
    }

    renderFiles() {
        const { files } = this.props;
        return files.map((file, indice) => {
            return (
                <li key={indice}>
                    <img
                        alt="img uploaded"
                        src={file.url}
                    />
                    <div>
                        { !file.uploaded &&
                            <div style={{ width: "30px", height: "30px", "marginTop": "0px" }}>
                                <CircularProgressBar percentage={file.percenteProgress}
                                    styles={{
                                        path: { stroke: `#00FF99` },
                                        text: { fill: '#f88', fontSize: '5px' },
                                    }}
                                />
                            </div>
                        }
                        
                        { file.uploaded && <FaCheck style={{ color: "#00FF99" }} /> }
                        { file.uploaded && !file.error && 
                            (
                                <a href={file.url} target="_blank" className="btn btn-none">
                                    <FaLink />
                                </a>
                            )
                        }
                        { file.uploaded && !file.error && 
                            (
                                <button className="btn btn-danger" 
                                    onClick={() => this.props.deleteFile(file.id)}>
                                    <FaTrash />
                                </button>
                            ) 
                        }
                    </div>
                </li>
            )
        })
    }

    render() {
        const { files } = this.props;
        return (
            <ul className="content bg-white" style={{ marginTop: "0px" }} >
                {this.renderFiles()}
            </ul>
        )
    }
}