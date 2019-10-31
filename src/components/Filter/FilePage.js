import React, {useState} from 'react';
import DragAndDrop from './drag_and_drop/DragAndDrop';
import FilterFile from './filter_file/FilterFile';

const FilePage = () => {
  const [state, setState] = useState({
    fileUploadStatus: false,
    fileName: '',
    fileData: [
      {'surname': 'Surname1', 'name': 'Name1', 'age': '17'},
      {'surname': 'Surname1', 'name': 'Name2', 'age': '35'},
      {'surname': 'Surname2', 'name': 'Name1', 'age': '18'},
      {'surname': 'Surname3', 'name': 'Name3', 'age': '42'},
      {'surname': 'Surname4', 'name': 'Name3', 'age': '23'},
      {'surname': 'Surname1', 'name': 'Name2', 'age': '35'},
      {'surname': 'Surname2', 'name': 'Name1', 'age': '18'},
      {'surname': 'Surname1', 'name': 'Name1', 'age': '19'},
      {'surname': 'Surname1', 'name': 'Name2', 'age': '25'},
      {'surname': 'Surname2', 'name': 'Name1', 'age': '65'},
      {'surname': 'Surname3', 'name': 'Name3', 'age': '22'}
    ]
  });

  const fileUploaded = event => {
    setState({fileUploadStatus: true,
              fileName: event.target.value.split(/(\\|\/)/g).pop(),
              fileData: state.fileData
            });
  };

  const columns = [...new Set(...state.fileData.map(object => Object.keys(object)))];


  const uniqueData = [...columns.map(column => {
    return {name: column, values: [...new Set(state.fileData.map(object => object[column]))]};
  })];

  if (state.fileUploadStatus) {
    return (
      <div className="file-page w-100 h-100 d-flex align-items-center">
        <FilterFile uniqueData={uniqueData} columns={columns} fileData={state.fileData} />
      </div>
    );
  }
  else {
    return (
      <div className="file-page w-100 h-100 d-flex align-items-center justify-content-center">
        <DragAndDrop fileUploaded={fileUploaded} />
      </div>
    );
  }
};

export default FilePage;
