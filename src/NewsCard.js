import React from "react";

export const NewsCard = ({ cardId, title, author, text, score }) => {
    //Open the story URL in new tab
    const open = () => {
        window.open(text, '_blank')
    }
    return (
        <div className="card col-md-4 col-sm-6 col-lg-3 col-xs-12" id={cardId + 1}>
            <div className="root elevation rounded">
                <div className="card-header">

                    <div className="card-header-content">
                        <span className="card-title">
                            {title}
                        </span>
                        <br />
                        <span className="card-subtitle">
                            {`by ${author}`}
                        </span>
                    </div>
                    <div className="MuiCardHeader-action">
                        <span className="badge badge-dark" style={{whiteSpace: "normal"}}>Score: {score}</span>
                    </div>

                </div>
                {/* Dummy preview text as the HN News API does not provide one */}
                <div className="card-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                </div>
                <div className="card-actions">
                    <button
                        className="btn btn-primary"
                        type="button"
                        onClick={open}
                    >
                        Read More
                    </button>
                </div>
            </div>
        </div>
    );
};
