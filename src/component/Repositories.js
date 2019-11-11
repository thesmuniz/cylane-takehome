import React from "react";
import LongCards from "./LongCards";

class Repositories extends React.Component {
  render() {
    const data = this.props.repo;

    return (
      <div>
        <div className="filter-section">
          <h1>I am the Repositories page!</h1>
        </div>
        <div>
          <LongCards data={data} />
        </div>
      </div>
    );
  }
}

export default Repositories;
