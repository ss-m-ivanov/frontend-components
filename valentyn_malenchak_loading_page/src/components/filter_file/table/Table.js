import React from 'react';
import './Table.css';

const Table = props => {

  return(
    <div className="table-field p-3 w-100">
      <h2 className="d-flex justify-content-center m-3">Table</h2>
      <div className="overflow-auto w-100 pr-1">
        <table class="table table-hover">
          <thead class="thead-light">
            <tr>
              {props.columns.map(column => (<th>{column}</th>))}
            </tr>
          </thead>
          <tbody>
            {props.fileData.map(object => {
              return (
                <tr>
                  {props.columns.map(column => (<td>{object[column]}</td>))}
                </tr>
              )})
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
