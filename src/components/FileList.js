import React from "react";
import CircularProgressBar from "react-circular-progressbar"
import { FaLink, FaCheck, FaTrash } from 'react-icons/fa';
import 'react-circular-progressbar/dist/styles.css';



export default () => (
    <ul className="content bg-white" style={{ marginTop: "0px" }} >
        <li>
            <img
                alt="img uploaded"
                src="https://tiago-dev-upload.s3.amazonaws.com/c14b03d20e8f727eac9815d2327d0846-rocketseat.png"
            />
            <div>
                <div style={{ width: "30px", height: "30px", "marginTop": "0px" }}>
                    <CircularProgressBar percentage={50}
                        styles={{
                            path: { stroke: `#00FF99` },
                            text: { fill: '#f88', fontSize: '5px' },
                        }}
                    />
                </div>
                <FaCheck style={{ color: "#00FF99" }} />
                <button className="btn btn-none">
                    <FaLink />
                </button>
                <button className="btn btn-danger">
                    <FaTrash />
                </button>
            </div>
        </li>
        <li>
            <img
                alt="img uploaded"
                src="https://tiago-dev-upload.s3.amazonaws.com/c14b03d20e8f727eac9815d2327d0846-rocketseat.png"
            />
            <div>
                <div style={{ width: "30px", height: "30px", "marginTop": "0px" }}>
                    <CircularProgressBar percentage={50}
                        styles={{
                            path: { stroke: `#00FF99` },
                            text: { fill: '#f88', fontSize: '5px' },
                        }}
                    />
                </div>
                <FaCheck style={{ color: "#00FF99" }} />
                <button className="btn btn-none">
                    <FaLink />
                </button>
                <button className="btn btn-danger">
                    <FaTrash />
                </button>
            </div>
        </li>
    </ul>
);