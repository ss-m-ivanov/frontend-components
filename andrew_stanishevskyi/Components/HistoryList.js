import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css';
import ToolkitProvider from 'react-bootstrap-table2-toolkit';


import BootstrapTable from 'react-bootstrap-table-next';

const products = [
    {id: 1, inputFile: "cars.xlsx", filter: "Model: BMW", output_file: "new_cars.xlsx", date: "2019-09-13", time: "13:40"},
    {id: 2, inputFile: "planets.xlsx", filter: "Color: Red, Blue", output_file: "new_planets.xlsx", date: "2019-09-15", time: "15:30"},
    {id: 3, inputFile: "figures.xlsx", filter: "Form: Square", output_file: "new_figures.xlsx", date: "2019-10-20", time: "21:04"},
 ];
const columns = [{
    dataField: 'id',
    text: 'Product ID'
}, {
    dataField: 'inputFile',
    text: 'Product Name'
}, {
    dataField: 'price',
    text: 'Product Price'
}];


export default () =>
    <BootstrapTable keyField='id' data={ products } columns={ columns } />