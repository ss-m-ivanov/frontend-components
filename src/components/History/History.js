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

     // console.log(parsedFilter);

     // let pairs = {}
     //
     // for (let header of headers) {
     //   let counter = 1;
     //
     //   pairs[header] = {};
     //   pairs[header][counter] = {}
     //   for (let inputField in parsedFilter) {
     //
     //
     //
     //
     //     if (inputField.includes(header)) {
     //       console.log(inputField)
     //       if (inputField.includes(`${counter}_value`)) {
     //         let valueField = parsedFilter[inputField]
     //         console.log('Value inside field is ' + valueField)
     //         pairs[header][counter]['val'] = valueField
     //         console.log(pairs)
     //       }  else if (inputField.includes(`${counter}_count`)) {
     //         let countField = parsedFilter[inputField]
     //         console.log('Count inside field ' + countField)
     //         pairs[header][counter]['count'] = countField
     //       }  else {
     //         counter++;
     //       }
     //     }
     //   }
     // }
     //
     //
     //
     //
     //
     // console.log(pairs)


     //const col = headers.filter(header => keys.startsWith(header));
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
         url: "http://localhost:5000/history/user",
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
