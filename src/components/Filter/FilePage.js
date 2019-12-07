import React, {useState} from 'react';
import DragAndDrop from './DragAndDrop/DragAndDrop';
import FilterFile from './FilterFile/FilterFile';
import {GetFilterData} from "./FilterFile/Filters/Filters";

console.log(GetFilterData());

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
      },
      "607": {
        "Adult_male": "True",
        "Age": "27.0",
        "Alive": "yes",
        "Alone": "True",
        "Class": "First",
        "Deck": null,
        "Embark_town": "Southampton",
        "Embarked": "S",
        "Fare": "30.5",
        "Parch": "0",
        "Pclass": "1",
        "Sex": "male",
        "Sibsp": "0",
        "Survived": "1",
        "Who": "man"
      },
      "681": {
        "Adult_male": "True",
        "Age": "27.0",
        "Alive": "yes",
        "Alone": "True",
        "Class": "First",
        "Deck": "D",
        "Embark_town": "Cherbourg",
        "Embarked": "C",
        "Fare": "76.7292",
        "Parch": "0",
        "Pclass": "1",
        "Sex": "male",
        "Sibsp": "0",
        "Survived": "1",
        "Who": "man"
      },
      "724": {
        "Adult_male": "True",
        "Age": "27.0",
        "Alive": "yes",
        "Alone": "False",
        "Class": "First",
        "Deck": "E",
        "Embark_town": "Southampton",
        "Embarked": "S",
        "Fare": "53.1",
        "Parch": "0",
        "Pclass": "1",
        "Sex": "male",
        "Sibsp": "1",
        "Survived": "1",
        "Who": "man"
      }
    }
  });

  const fileUploaded = event => {
    setState({fileUploadStatus: true,
              fileName: event.target.value.split(/(\\|\/)/g).pop(),
              fileData: state.fileData
            });
  };

  const columns = [...new Set(...Object.values(state.fileData).map(object => Object.keys(object)))];

  if (state.fileUploadStatus) {
    return (
      <div className="file-page w-100 h-100">
        <FilterFile columns={columns} fileData={state.fileData} />
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



