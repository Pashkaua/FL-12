import React, { Component } from "react";
import "../style/App.css";
import Employees from "./Employees";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      low: []
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch(`https://roman4ak.github.io/fe-oop-lab/mocks/epms.json`)
      .then(response => response.json())
      .then(data => {
        this.setState({ list: this.createTree(data) });
      })
      .catch(error => console.log("the error is", error));
  }

  createTree = list => {
    let listCopy = JSON.parse(JSON.stringify(list));
    let map = {},
      node,
      roots = [],
      i;
    for (i = 0; i < listCopy.length; i += 1) {
      map[listCopy[i].id] = i;
      listCopy[i].children = [];
    }
    for (i = 0; i < listCopy.length; i += 1) {
      node = listCopy[i];
      if (node.rm_id !== null) {
        listCopy[map[node.rm_id]].children.push(node);
      } else {
        roots.push(node);
      }
    }
    return roots;
  };

  render() {
    return (
      <div className="container">
        {this.state.list.map((item, index) => {
          return (
            <div className="header" key={index}>
              <h1>{item.name}</h1>
              <h2>{item.performance}</h2>
              <h5>{item.last_vacation_date}</h5>
              <h5>{item.salary}</h5>
            </div>
          );
        })}

        <div className="list">
          <div className="list-item">
            <h3>All employees:</h3>
            {this.state.list.map((item, index) => {
              return (
                <ul key={index}>
                  <Employees item={item} />
                </ul>
              );
            })}
          </div>

          <div className="list-item">
            <h3>Average perfomance:</h3>
            {this.state.list.map((item, index) => {
              return (
                <ul key={index}>
                  <Employees item={item} filter={"average"} />
                </ul>
              );
            })}
          </div>

          <div className="list-item">
            <h3>Low perfomance:</h3>
            {this.state.list.map((item, index) => {
              return (
                <ul key={index}>
                  <Employees item={item} filter={"low"} />
                </ul>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
