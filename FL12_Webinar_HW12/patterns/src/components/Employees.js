import React, { Component } from "react";

export default class Employees extends Component {
  render() {
    const item = this.props.item;
    const filter = this.props.filter;
    const employee = (item, index) => {
      return (
        <li key={index}>
          {item.rm_id && (item.performance === filter || !filter) ? (
            <div className="block-item">
              <p>{item.name}</p>
              <p> Performance: {item.performance}</p>
              <p>Last vacation date: {item.last_vacation_date}</p>
              <p>Salary: {item.salary}</p>{" "}
            </div>
          ) : null}

          {item.children ? (
            <ul>
              {item.children.map((child, index) => employee(child, index))}{" "}
            </ul>
          ) : null}
        </li>
      );
    };
    return employee(item);
  }
}
