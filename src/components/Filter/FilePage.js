import React, {useState} from 'react';
import { store } from 'react-notifications-component';
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
      url: "http://127.0.0.1:80/files",
      withCredentials: true,
      data: formData
    })

        .then(response => {
          setState(prevState => ({
              ...prevState,
              fileUploadStatus: true,
              fileName: response.data.data.file_name,
              fileHeaders: response.data.filters,
              currentFileId: response.data.data.id
            }));

            axios({
                headers: {'Content-Type': 'form-data' },
                method: 'put',
                url: 'http://127.0.0.1:80/filtering/' + response.data.data.id,
                withCredentials: true,
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
        .catch(error => {
          const notificationId = store.addNotification({
            title: "Error!",
            message: `${error}`,
            type: "danger",
            insert: "bottom",
            container: "bottom-right",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: {
              duration: 5000,
              onScreen: true
            }
          });
        });
  };

  if (state.fileUploadStatus) {
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
