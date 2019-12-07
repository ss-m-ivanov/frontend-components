import React from 'react';
import Filters from './Filters/Filters';
import Table from "../../utils/Table/Table";

const FilterFile = props => {

    return(

        <div className="row w-100 h-100 d-flex align-items-center">
            <div className="filter col-4 p-2 pl-4 h-100">
                <Filters columns={props.columns} />
            </div>
            <div className="col-8 p-2 h-100">
                <Table tableName="File content" columns={props.columns} fileData={props.fileData} />
            </div>
        </div>
    );
};

export default FilterFile;
