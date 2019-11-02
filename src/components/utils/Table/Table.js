import React, {useState} from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';

const Table = props => {

  const [state, setState] = useState({
    filter: ''
  });

  const filterFilters = event => {
      setState({filter: event.target.value})
  };

  const filterTable = () => {
    const filteredTable = props.fileData.filter(object => {
      const objectStr = Object.values(object).reduce((str, value) => `${str} ${value}`, '');
      return objectStr.includes(state.filter);
    });
    return filteredTable;
  }

  return(
    <div className="table-field violet-frame bg-light p-3 w-100 h-100 overflow-auto">
        <h2 className="d-flex justify-content-center m-3">{props.tableName}</h2>
        <InputGroup className="mb-3">
          <FormControl aria-label="Filter"
            aria-describedby="Filter-data"
            onChange={filterFilters} />
        </InputGroup>
          <div className="overflow-auto w-100 pr-1">
            <table className="table table-hover">
              <thead className="thead-light">
                <tr>
                  {props.columns.map(column => (<th>{column}</th>))}
                </tr>
              </thead>
              <tbody>
                {filterTable().map(object => {
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
