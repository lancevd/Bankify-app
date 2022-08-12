import React from 'react'
import "./history.css";
import DataTable from 'react-data-table-component';

import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function History() {
const columns = [
  {
    name: "Title",
    selector: (row) => row.title,
    sortable: true,
  },
  {
    name: "Year",
    selector: (row) => row.year,
    sortable: true,
  },
];

const data = [
  {
    id: 1,
    title: "Beetlejuice",
    year: "1988",
  },
  {
    id: 2,
    title: "Ghostbusters",
    year: "1984",
  },
];

return (
         <DataTable
            columns={columns}
            data={data}
        />

)

}
  

