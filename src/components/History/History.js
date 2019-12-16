import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from "../utils/Table/Table";
import HistoryModal from "./HistoryModal/HistoryModal";

const History = () => {
   const [state, setState] = useState({
     history: {
     },
     currentFilter: ''
   });

   const [show, setShow] = useState(false);

   const handleClose = () => {
     setShow(false);
   };

   const handleShow = () => {
     setShow(true);
   }

   const parseFilter = filter => {
     const f = JSON.parse(filter);
     let keys = Object.keys(f);
     const columns = new Set(columns.map(element => element.split(/[0-9]/).shift()));
     // TO BE CONTINUE......
   }

   const setCurrentFilter = function(filter) {
     console.log(filter)
     setState(prevState => ({
       ...prevState, currentFilter: filter
     }));
     parseFilter(filter);
     setShow(true);
   }

   useEffect (() => {
     axios({ method: 'get',
         url: "http://localhost:5000/history/user",
         withCredentials: true
       })
         .then(response => {
            let history = response.data;
             console.log(history);
             setState(prevState => ({
               ...prevState, history: history.map(record => ({
                    'Filename': record.path.split('/').pop(),
                    'Filter': <button onClick={event => setCurrentFilter(record.filter)}>See filter</button>,
                    'Results': `${record.rows_id.length} row(s)`,
                    'Date': record.filter_date.split('T').shift(),
                    'Time': record.filter_date.split(/[T.]/)[1]
               }))
             }))
       })
         .catch(error => console.log(error))
   }, []);

   const columns = [...new Set(...Object.values(state.history).map(object => Object.keys(object)))];

   return (
       <div>
         <Table tableName="History" fileData={state.history} columns={columns} />
         <HistoryModal show={show} handleShow={handleShow} handleClose={handleClose}
         filter={state.currentFilter}/>
       </div>
   );
 };

export default History;
