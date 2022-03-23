import React, { Component } from "react";
import ProductRow from "./ProductRow";
//import ProductCategoryRow from "./ProductCategoryRow";
//import Table from 'react-bootstrap/Table';


export default class ProductTable extends Component {
    render() {
      const rows = [];
      const filterText = this.props.filterText;
      //let lastCategory = null;
      
      this.props.products.forEach((product) => {
        if (product.grade.indexOf(filterText) === -1) {
            return;
        }
        rows.push(
          <ProductRow
            product={product}
            key={product.title} />
        );
      });
  
      return (
        <table className="table table-sm table-striped table-bordered">
          <thead className="bg-info text-white text-center m-2 p-2">
            <tr colSpan="3">
              <th>ID</th>
              <th>Title</th>
              <th>Grade</th>
              <th>Took?</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      );
    }
  }