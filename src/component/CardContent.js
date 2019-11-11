import React from "react";

const CardContent = props => {
  const contents = props.contents;
  return contents.map(contents => (
    <div key={contents.id}>
      <div>
        <a href={contents.html_url}>
          <h3>{contents.name}</h3>
        </a>
        {contents.fork
          ? `Forked from ${<a href={contents.forks_url}>Test</a>}`
          : ""}
      </div>
      <div>{contents.description}</div>
      <div>
        <div>{contents.language}</div>
        <div>{contents.stargazers_count}</div>
        <div>{contents.forks_count}</div>
      </div>
    </div>
  ));
};

export default CardContent;
