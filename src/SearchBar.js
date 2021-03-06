import React from "react";

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
      }
    handleFilterTextChange(e) {
        this.props.onFilterTextChange(e.target.value);
    }
    render() {
        const filterText = this.props.filterText;
        return (
            <form>
                Enter a letter-grade:
                <input type="text" 
                placeholder="Search..."
                value = {filterText}
                onChange={this.handleFilterTextChange.bind(this)} />
            </form>
        );
    }
  }