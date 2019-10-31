import React from 'react';
import Filters from './filters/Filters';
import Table from "../../unils/Table/Table";

const FilterFile = props => {

  return(
    <div className="row w-100 h-100">
      <div className="filter col-4 p-2 pl-4 h-100 d-flex align-items-center">
        <Filters uniqueData={props.uniqueData} />
      </div>
      <div className="col-8 p-2 h-100 d-flex align-items-center">
        <Table tableName="File content" columns={props.columns} fileData={props.fileData} />
      </div>
    </div>
  );
};

export default FilterFile;
