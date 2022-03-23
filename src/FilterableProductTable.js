import React, { Component } from "react";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

export default class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: null,
    };
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }
  
  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    });
  }
    render() {
      return (
        <div>
          <SearchBar 
          filterText={this.state.filterText} 
          onFilterTextChange={this.handleFilterTextChange} />
          <ProductTable products={this.props.products} 
          filterText={this.state.filterText} /> 
        </div>
      );
    }
  }

export const PRODUCTS = [
    {id: '1', title: 'CSC141', took: true, grade: 'A'},
    {id: '2', title: 'CSC240', took: true, grade: 'A'},
    {id: '3', title: 'CSC142', took: false, grade: 'B'},
    {id: '4', title: 'CSC241', took: true, grade: 'A'},
    {id: '5', title: 'ESS101', took: false, grade: ''},
    {id: '6', title: 'ENG368', took: true, grade: 'C'},
    {id: '7', title: 'BIO110', took: true, grade: ''}
  ];