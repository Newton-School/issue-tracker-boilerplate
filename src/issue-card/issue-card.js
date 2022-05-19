import React, { useState } from "react";
import "./issue-card.css";
export default function IssueCard({}) {
  const handleClose = () => {
  //   handle here
  //   handle here
  };

  const handleDelete = () => {
    // hanele here
    // hanele here
    // hanele here
  };

  return (
    <div className="card-container" data-tag="card-container">
      {issue !== undefined && (
        <ul classname="issue-form-list">
          <li className="issue-id"> Issue ID : 
             {/*  Show issue id here */}
          </li>
          (
            <li>
              <div className="close-tag" data-tag="close-tag">
                Closed
              </div>
            </li>
          ) : (
            <br></br>
          )
          <h2 data-tag="issue-description">
            {/* Show description here */}

          </h2>

          <p className="severity-name" data-tag="assigned-to">
               {/* show assignee name here */}
               {/* show assignee name here */}
          </p>

          <li>
            {!isClose && (
              <button
                className="close-btn"
                data-tag="close-btn"
                onClick={handleClose}
              >
                Close
              </button>
            )}
            {"  "}
            <button
              className="delete-btn"
              data-tag="delete-btn"
              onClick={handleDelete}
            >
              Delete
            </button>
          </li>
        </ul>
      )}
    </div>
  );
}
