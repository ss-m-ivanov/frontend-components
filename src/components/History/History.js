import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { store } from 'react-notifications-component';
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

   const setCurrentFilter = function(filter) {
     const parsedFilter = parseFilter(filter);
     setState(prevState => ({
       ...prevState, currentFilter: parsedFilter
     }));
     setShow(true);
   }

   useEffect (() => {
     axios({ method: 'get',
         url: "http://127.0.0.1:80/history/user",
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
                    'Restore': <button>Get it!</button>
               }))
             }))
       })
         .catch(error => {
           store.addNotification({
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
