import React, {useState} from 'react';
import DragAndDrop from './DragAndDrop/DragAndDrop';
import FilterFile from './FilterFile/FilterFile';

const FilePage = () => {
  const [state, setState] = useState({
    fileUploadStatus: false,
    fileName: '',
    fileData: {
      "377": {
        "Adult_male": "True",
        "Age": "27.0",
        "Alive": "no",
        "Alone": "False",
        "Class": "First",
        "Deck": "C",
        "Embark_town": "Cherbourg",
        "Embarked": "C",
        "Fare": "211.5",
        "Parch": "2",
        "Pclass": "1",
        "Sex": "male",
        "Sibsp": "0",
        "Survived": "0",
        "Who": "man"
      }
    },
  });


  const currentResponse = response => {
      setState({
        fileData: response
      })
  };


  const fileUploaded = event => {
    setState({fileUploadStatus: true,
              fileName: event.target.value.split(/(\\|\/)/g).pop(),
              fileData: state.fileData
            });
  };

  const columns = [...new Set(...Object.values(state.fileData).map(object => Object.keys(object)))];

  //if (state.fileUploadStatus) {
    return (
      <div className="file-page w-100 h-100">
        <FilterFile columns={columns} fileData={state.fileData} responseResult={currentResponse} />
      </div>
    );
  //}
  // else {
  //   return (
  //     <div className="file-page w-100 h-100 d-flex align-items-center justify-content-center">
  //       <DragAndDrop fileUploaded={fileUploaded} />
  //     </div>3*
  //   );
  // }
};

export default FilePage;



