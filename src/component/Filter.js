import React from "react";

class Filter extends React.Component {
  constructor(props) {
    super(props);

    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.handleLanguageChange = this.handleLanguageChange.bind(this);
  }

  handleTextChange(event) {
    this.props.handleTextChange(event.target.value);
  }

  handleTypeChange(event) {
    this.props.handleTypeChange(event.target.value);
  }

  handleLanguageChange(event) {
    this.props.handleLanguageChange(event.target.value);
  }

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Find a repository"
          value={this.props.text}
          onChange={this.props.handleTextChange}
        />
        <select value={this.props.type} onChange={this.props.handleTypeChange}>
          <option value="All">All</option>
          <option value="Public">Public</option>
          <option value="Private">Private</option>
          <option value="Sources">Sources</option>
          <option value="Forks">Forks</option>
          <option value="Archived">Archived</option>
          <option value="Mirrors">Mirrors</option>
        </select>
        <select
          value={this.props.language}
          onChange={this.props.handleLanguageChange}
        >
          <option value="All">All</option>
          <option value="CSS">CSS</option>
          <option value="HTML">HTML</option>
          <option value="Ruby">Ruby</option>
        </select>
      </form>
    );
  }
}

export default Filter;
