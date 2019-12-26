import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { store } from 'react-notifications-component';
import Table from "../utils/Table/Table";
import notificationObject from '../utils/Notification/Notification';
import HistoryModal from "./HistoryModal/HistoryModal";

const History = () => {
   const [state, setState] = useState({
     history: [],
     currentFilter: ''
   });

   useEffect (() => {
     axios({ method: 'get',
         url: "http://0.0.0.0:80/history/user",
         withCredentials: true
       })
         .then(response => {
            let history = response.data;
             setState(prevState => ({
               ...prevState, history: history.map(record => ({
                    'Filename': record.path.split('/').pop(),
                    'Filter': <button className="m-0" onClick={event => setCurrentFilter(record.filter)}>See filter</button>,
                    'Results': `${record.rows_id.length} row(s)`,
                    'Date': record.filter_date.split('T').shift(),
                    'Time': record.filter_date.split(/[T.]/)[1],
                    'Restore': <button onClick={event => restoreFile(record.file_id, record.filter_id)}>Get it!</button>
               }))
             }))
       })
         .catch(error => {
           store.addNotification({
             ...notificationObject,
             title: `${error.name}`,
             message: `${error.message}`,
             type: "danger"
           });
         });
   }, []);

   const [show, setShow] = useState(false);

   const handleClose = () => {
     setShow(false);
   };

   const handleShow = () => {
     setShow(true);
   }

   const parseFilter = filter => {
     const parsedFilter = JSON.parse(filter);
     const keys = Object.keys(parsedFilter);

     const headers = [...new Set(keys.map(element => (element.split(/[0-9]/).shift())))];

     let pairs = {}
     const result = headers.map(header => {
       const keysForHeader = keys.filter(key => key.startsWith(header));
       const valuesForKey = keysForHeader.map(keyForHeader => {
         const order = keyForHeader.match(/\d+/);
         const content = keyForHeader.split(/\d+_/).pop();
         pairs[header] = pairs[header] || {}
         pairs[header][order] = pairs[header][order] || {}
         pairs[header][order][content] = parsedFilter[keyForHeader];
       });
     });
     return pairs;
   }

   const restoreFile = (file_id, filter_id) => {
        axios({ method: 'get',
         url: `http://0.0.0.0:80/generate_new_file/file/${file_id}/filter/${filter_id}`,
         withCredentials: true
       })
         .then(response => {
            console.log("Haha_benis")
       })
         .catch(error => {
           store.addNotification({
             ...notificationObject,
             title: "Error!",
             message: `${error}`,
             type: "danger"
             }
           );
         });
   }

   const setCurrentFilter = function(filter) {
     const parsedFilter = parseFilter(filter);
     setState(prevState => ({
       ...prevState, currentFilter: parsedFilter
     }));
     setShow(true);
   }

   const columns = [...new Set(...Object.values(state.history).map(object => Object.keys(object)))];
   if (state.history.length) {
     return (
         <div>
            <Table tableName="History" fileData={state.history} columns={columns} />
            <HistoryModal show={show} handleShow={handleShow} handleClose={handleClose} filter={state.currentFilter}/>
         </div>
       );
   } else {
     return (
       <div className="table-field violet-frame bg-light p-3 w-100 h-100">
        <h1 className="h-100 d-flex justify-content-center align-items-center">Your haven't any record in history :(</h1>
      </div>
    );
   }
 };

export default History;
