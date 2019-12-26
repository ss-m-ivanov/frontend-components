import React from 'react';
import Loader from 'react-loader-spinner';

const Spinner = props => {

    return(
      <div className="w-100 h-100 d-flex justify-content-center align-items-center">
      <Loader
         type="ThreeDots"
         color="#6f42c1"
         height={100}
         width={100}/>
      </div>

    );
}

export default Spinner;
