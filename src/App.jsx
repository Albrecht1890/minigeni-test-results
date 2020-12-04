import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Table from './components/table'
import Graph from './components/graph'

import data from './data/aggregated_measurements.json';
import graphData from './data/measurements.json';


const updateData = (data) => {
  let new_data = [];
  data.forEach((el) => {
    new_data.push({ date: new Date(el.time), value: el.value });
  })
  return new_data
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: data,
      selectedTestID: 1,
      selectedTestData: updateData(graphData[0][['measurements']])
    }
  };

  selectTest = (id) => {
    this.setState({
      selectedTestID: id
    })
  }

  selectTestDataForGraph = () => {
    this.setState({
      selectedTestData: updateData(graphData[this.state.selectedTestID-1][['measurements']])
    })
  }

  render() {
    return (
      <div className="App">
        <h1>MiniGeni Test Results</h1>
        <div className="table-responsive">
          <Table id={this.state.selectedTestID} data={this.state.data} selectTest={this.selectTest} updateGraph={this.selectTestDataForGraph} />
          <div >
            <small>Color description:</small>
            <small className="badge badge-success">Normal</small>
            <small className="badge badge-secondary">Warning</small>
            <small className="badge badge-warning">Serious warning</small>
            <small className="badge badge-danger">Critical warning</small>
          </div>
        </div>
        <div className="card m-5">
          <p className="mt-5" >Test {this.state.selectedTestID}</p>
          <Graph id={this.state.selectedTestID} getTestData={this.state.selectedTestData} />
        </div>
      </div>
    );
  }
}

export default App;