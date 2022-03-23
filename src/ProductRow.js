import React, { Component } from "react";

export default class ProductRow extends React.Component {
    render() {
      const product = this.props.product;
      const title = product.took ?
        product.title :
        <span style={{color: 'red'}}>
          {product.title}
        </span>;
     const took = product.took ?
        "Yes" :
        <span style={{color: 'red'}}>
          No
        </span>;
  
      return (
        <tr>
          <td>{product.id}</td>
          <td>{title}</td>
          <td>{product.grade}</td>
          <td>{took}</td>
        </tr>
      );
    }
  }