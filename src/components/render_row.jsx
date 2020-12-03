import React, { Component } from 'react';


class RenderRow extends Component {
  constructor(props) {
    super(props);
    this.findColor = this.findColor.bind(this);
  }

  findColor = (val) => {
    if (val <= 49) {
      return "bg-success";
    } else if (val <= 99) {
      return "bg-secondary";
    } else if (val <= 149) {
      return "bg-warning";
    } else {
      return "bg-danger";
    }
  }

  render() {
    return (
      this.props.keys.map((key, idx) => {
        if (key === "test_id") {
          return (
            <th key={this.props.data[key]} scope="row">
              {this.props.data[key]}
            </th>
          )
        } else {
          return (
            <td key={this.props.data[key]} className={this.findColor(this.props.data[key])}>
              <h6>{this.props.data[key]}</h6>
            </td>
          )
        }
      })
    )
  }
}

export default RenderRow;