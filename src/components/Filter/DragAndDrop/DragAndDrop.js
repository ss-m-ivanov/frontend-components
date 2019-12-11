import React from 'react';
import './DragAndDrop.css';
import uploadImage from './upload.png';

const DragAndDrop = props => {

  return(
      <div className="my-5">
          <div className="file-upload-section violet-frame rounded bg-light d-flex justify-content-center align-items-center flex-column">
              <div className="upload-icon">
                  <img src={uploadImage} alt="upload icon"/>
              </div>
              <h1 className="my-4">Choose file or drag in here.</h1>
          </div>
          <form onChange={props.fileUploaded} className="file-upload-form">
              <input className="w-100 h-100" type="file" name="user_file" accept=".xls,.xlsx,.csv"/>
          </form>
      </div>

  );
};


export default DragAndDrop;
