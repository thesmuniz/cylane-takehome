import React from "react";
import { convertDateAndTime } from "../helpers";

const Cards = props => {
  const data = props.data;

  const repoColors = {
    CSS: "#563d7c",
    HTML: "#e34c26",
    Ruby: "#701516"
  };

  const CSS = "#563d7c";

  return data.map(data => (
    <div className="long-card" key={data.id}>
      <div className="long-card-box">
        <div className="star-button">
          <div className="star-button-content">
            <span>
              <svg
                aria-label="stars"
                className="octicon octicon-star"
                viewBox="0 0 14 16"
                version="1.1"
                width="16"
                height="18"
                role="img"
              >
                <path d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"></path>
              </svg>
            </span>
            <div className="button-text">Star</div>
          </div>
        </div>
        <div className="forked">
          <a href={data.html_url}>
            <div className="long-card-title">{data.name}</div>
          </a>
          {data.fork ? `Forked from ${<a href={data.forks_url}>Test</a>}` : ""}
        </div>
        <div className="long-card-description">{data.description}</div>
        <div className="stats">
          {data.language ? (
            <div className="stat">
              <span
                className="repo-color"
                style={{ backgroundColor: `${data.language}` }}
              ></span>
              {data.language}
            </div>
          ) : (
            ""
          )}
          <div className="stat">
            <div className="long-card-stat-alignment">
              <span>
                <svg
                  aria-label="stars"
                  className="octicon octicon-star"
                  viewBox="0 0 14 16"
                  version="1.1"
                  width="14"
                  height="14"
                  role="img"
                >
                  <path d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"></path>
                </svg>
              </span>
              <div>{data.forks_count}</div>
            </div>
          </div>
          <div className="stat">
            <div className="long-card-stat-alignment">
              <span>
                <svg
                  aria-label="fork"
                  className="octicon octicon-repo-forked"
                  viewBox="0 0 14 16"
                  version="1.1"
                  width="14"
                  height="14"
                  role="img"
                >
                  <path d="M8 1a1.993 1.993 0 00-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 002 1a1.993 1.993 0 00-1 3.72V6.5l3 3v1.78A1.993 1.993 0 005 15a1.993 1.993 0 001-3.72V9.5l3-3V4.72A1.993 1.993 0 008 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path>
                </svg>
              </span>
              <div>{data.stargazers_count}</div>
            </div>
          </div>
          <div className="stat-update">
            Updated {convertDateAndTime(data.updated_at)}
          </div>
        </div>
      </div>
    </div>
  ));
};

export default Cards;
