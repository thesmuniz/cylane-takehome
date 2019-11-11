import React from "react";
import Cards from "./Cards";

class Overview extends React.Component {
  render() {
    const data = this.props.repo;

    data.sort(
      (a, b) => Number(b.stargazers_count) - Number(a.stargazers_count)
    );

    return (
      <div className="overview-page">
        <h3 className="overview-title">Popular repositories</h3>
        <div className="card-section">
          <Cards data={data} />
        </div>
      </div>
    );
  }
}

export default Overview;
