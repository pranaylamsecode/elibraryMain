import React from "react";
import { ProgressBar } from "react-bootstrap";

const Loader = ({ isLoading, loaderPercent }) => {
    if (!isLoading) return null;
    return (
        <div
            id="loader"
            className="d-flex justify-content-center align-items-center flex-column"
        >
            <ProgressBar
                now={loaderPercent}
                label={`${loaderPercent} % completed`}
                variant="success"
                animated
                style={{ width: "50vw", height: "24px" }}
            />
        </div>
    );
};

export default Loader;
