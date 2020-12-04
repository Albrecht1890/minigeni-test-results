import React, { Component } from 'react';
import RenderRow from './render_row'


class Table extends Component {
  constructor(props) {
    super(props);
    this.getKeys = this.getKeys.bind(this);
    this.getRowsData = this.getRowsData.bind(this);
    
  }

  handleClick = (event) => {
    this.props.selectTest(event.currentTarget.id);
    this.props.updateGraph();

    event.preventDefault();
  }

  getKeys = function() {
    return Object.keys(this.props.data[0])
  }

  getRowsData = function() {
    var items = this.props.data;
    var keys = ["test_id", "min", "average", "max"]
    return items.map((row, idx) => {
      return (
        <tr className="test-row" key={idx}>
          <RenderRow key={idx} data={row} keys={keys}/>
          <td id={row.test_id} onClick={this.handleClick}><a href="#"><small>Select</small></a></td>
        </tr>
      )
    })
  }

  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Test ID</th>
            <th scope="col">Min</th>
            <th scope="col">Avg</th>
            <th scope="col">Max</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {this.getRowsData()}
        </tbody>
      </table>
    )
  }
}

export default Table;
