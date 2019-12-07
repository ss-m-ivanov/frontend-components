import React, { useState } from 'react';
import Table from "../utils/Table/Table";

const History = () => {
   const [state, setState] = useState({
     data: {
         '1': {
             inputFile: "cars.xlsx",
             filter: "Model: BMW",
             output_file: "new_cars.xlsx",
             date: "2019-09-13",
             time: "13:40"
         },
         '2': {
             inputFile: "planets.xlsx",
             filter: "Color: Red, Blue",
             output_file: "new_planets.xlsx",
             date: "2019-09-15",
             time: "15:30"
         },
         '3': {
             inputFile: "figures.xlsx",
             filter: "Form: Square",
             output_file: "new_figures.xlsx",
             date: "2019-10-20",
             time: "21:04"
         },
     }
   });

   const columns = [...new Set(...Object.values(state.data).map(object => Object.keys(object)))];

   return (
       <div>
         <Table tableName="History" fileData={state.data} columns={columns} />
       </div>
   );
 };

export default History;
