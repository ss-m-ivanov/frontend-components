import React, {useState} from 'react';
import DragAndDrop from './DragAndDrop/DragAndDrop';
import FilterFile from './FilterFile/FilterFile';

import axios from 'axios'

const FilePage = () => {
  const [state, setState] = useState({
    fileUploadStatus: false,
    fileName: '',
    fileHeaders: '',
    fileData: {},
    currentFileId: ''
    }
  );

  const currentResponse = response => {
      setState(prevState => ({
        ...prevState, fileData: response,
      }))
  };

  const fileUploaded = event => {

    const file = event.target.files[0];
    let formData = new FormData();

    formData.append('user_file', file);


    axios({
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      method: 'post',
      url: "http://0.0.0.0:4100/files",
      withCredentials: true,
      data: formData
    })

        .then(response => {
          setState({fileUploadStatus: true,
              fileName: response.data.data.file_name,
              fileHeaders: response.data.filters,
              currentFileId: response.data.data.id
            });

            axios({
                headers: {'Content-Type': 'form-data' },
                method: 'put',
                url: 'http://0.0.0.0:4100/filtering/' + response.data.data.id,
                data: {},
            })
                .then(response => {
                    let filteringResult = response.data['result'];
                    console.log(filteringResult);
                    setState(prevState => ({
                      ...prevState, fileData: filteringResult
                    }))
                });
        })
        .catch(error => alert(error));
  };

  if (state.fileUploadStatus) {
    console.log(state.fileHeaders)
    return (
      <div className="file-page w-100 h-100">
        <FilterFile columns={state.fileHeaders} fileData={state.fileData} responseResult={currentResponse} currentFileId={state.currentFileId} />
      </div>
    );
  }
  else {
    return (
      <div className="file-page w-100 h-100 d-flex align-items-center justify-content-center">
        <DragAndDrop fileUploaded={fileUploaded} />
      </div>
    );
  };
}

export default FilePage;
