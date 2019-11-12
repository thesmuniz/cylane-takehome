import React from "react";
import LongCards from "./LongCards";
import Filter from "./Filter";

class Repositories extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      type: "All",
      language: "All"
    };

    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.handleLanguageChange = this.handleLanguageChange.bind(this);
  }

  handleTextChange(event) {
    this.setState({ text: event.target.value });
  }

  handleTypeChange(event) {
    this.setState({ type: event.target.value });
  }

  handleLanguageChange(event) {
    this.setState({ language: event.target.value });
  }

  render() {
    let data = this.props.repo;

    // This is for the search function
    let searchText = this.state.text.trim().toLowerCase();
    if (searchText.length > 0) {
      data = data.filter(function(i) {
        return i.name.toLowerCase().match(searchText);
      });
    }

    // This if for the type dropdown
    let typeSelector = this.state.type;
    if (typeSelector === "Public") {
      data = data.filter(function(i) {
        return i.private === false;
      });
    } else if (typeSelector === "Private") {
      data = data.filter(function(i) {
        return i.private !== false;
      });
    } else if (typeSelector === "Forks") {
      data = data.filter(function(i) {
        return i.fork === true;
      });
    } else if (typeSelector === "Archived") {
      data = data.filter(function(i) {
        return i.archived === true;
      });
    } else if (typeSelector === "Mirrors") {
      data = data.filter(function(i) {
        return i.mirror_url !== null;
      });
    }

    // This is for the language dropdown
    let codeLanguage = this.state.language;
    if (codeLanguage !== "All") {
      data = data.filter(function(i) {
        return i.language === codeLanguage;
      });
    }

    data.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

    return (
      <div>
        <Filter
          handleTextChange={this.handleTextChange}
          handleTypeChange={this.handleTypeChange}
          handleLanguageChange={this.handleLanguageChange}
        />
        <div className="filter-section"></div>
        <div>
          <LongCards data={data} />
        </div>
      </div>
    );
  }
}

export default Repositories;
