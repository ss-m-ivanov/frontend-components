import React from "react";

const Table = props => {

    return(
        <div className="table-field p-3 w-100">
            <h2 className="d-flex justify-content-center m-3">{props.tableName}</h2>
            <div className="overflow-auto w-100 pr-1">
                <table className="table table-hover">
                    <thead className="thead-light">
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