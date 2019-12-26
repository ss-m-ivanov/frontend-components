import React from 'react';
import Spinner from '../Spinner/Spinner';
import { InputGroup, FormControl } from 'react-bootstrap';

const Table = props => {

    return (
      <div className="table-field violet-frame bg-light p-3 w-100 h-100 overflow-auto">
          <h2 className="d-flex justify-content-center m-3">{props.tableName}</h2>
            <div className="overflow-auto w-100 pr-1">
              <table className="table table-hover">
                <thead className="thead-light">
                  <tr>
                    <th>id</th>
                    {props.columns.map(column => (<th>{column}</th>))}
                  </tr>
                </thead>
                <tbody>
                  {
                    Object.keys(props.fileData).map(key => (
                          <tr>
                              <td>{Number(key) + 1}</td>
                                    {props.columns.map(column => {
                                          return (
                                            <td>{props.fileData[key][column]}</td>
                                      )
                                    })}
                          </tr>
                      ))
                  }
                </tbody>
              </table>
            </div>
      </div>
      );
};

export default Table;
