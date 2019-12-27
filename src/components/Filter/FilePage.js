import React, { useState } from 'react';
import { store } from 'react-notifications-component';
import DragAndDrop from './DragAndDrop/DragAndDrop';
import notificationObject from '../utils/Notification/Notification';
import FilterFile from './FilterFile/FilterFile';

import axios from 'axios'

const FilePage = props => {
  const [state, setState] = useState({
    fileUploadStatus: false,
    fileName: '',
    fileHeaders: '',
    fileData: {},
    currentFileId: '',
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

    let fileData= {};
    axios({
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      method: 'post',
      url: "http://0.0.0.0:80/file-service/api/files",
      withCredentials: true,
      data: formData
    })
        .then(response => {
          setState(prevState => ({
              ...prevState,
              fileUploadStatus: true,
              fileName: response.data.data.file_name,
              fileHeaders: response.data.filters,
              currentFileId: response.data.data.id,
              fileData: fileData
            }));


            axios({
                headers: {'Content-Type': 'form-data' },
                method: 'put',
                url: 'http://0.0.0.0:80/file-service/api/filtering/' + response.data.data.id,
                withCredentials: true,
                data: {},
            })
                .then(response => {
                    let filteringResult = response.data['result'];
                    setState(prevState => ({
                      ...prevState, fileData: filteringResult
                    }))
                });
        })
        .catch(error => {
          const notificationId = store.addNotification({
            ...notificationObject,
            title: "Error!",
            message: `${error}`,
            type: "danger"
          });
        });
  };

  if (state.fileUploadStatus) {
    return (
      <div className="file-page w-100 h-100">
          <FilterFile columns={state.fileHeaders} fileData={state.fileData} responseResult={currentResponse}
          currentFileId={state.currentFileId} history={props.history}/>
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
