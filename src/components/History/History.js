import React from 'react';
import Table from "../utils/Table/Table";


class History extends React.Component {
  
    state = {
        data: [
            {
                id: 1,
                inputFile: "cars.xlsx",
                filter: "Model: BMW",
                output_file: "new_cars.xlsx",
                date: "2019-09-13",
                time: "13:40"
            },
            {
                id: 2,
                inputFile: "planets.xlsx",
                filter: "Color: Red, Blue",
                output_file: "new_planets.xlsx",
                date: "2019-09-15",
                time: "15:30"
            },
            {
                id: 3,
                inputFile: "figures.xlsx",
                filter: "Form: Square",
                output_file: "new_figures.xlsx",
                date: "2019-10-20",
                time: "21:04"
            },
        ]
    };

    columns = [ ...new Set(...this.state.data.map(obj => Object.keys(obj)))];

 render() {
    return(
        <div>
          <Table tableName="History" fileData={this.state.data} columns={this.columns} />
        </div>
    )
 }
}
export default History;
