import { useEffect, useRef, useState } from "react";
import $ from "jquery";
import DataTables from "datatables.net";

// Import necessary styles
import "datatables.net-dt/css/jquery.dataTables.min.css";
import { useSelector } from "react-redux";
// Importing dataset
// import { dataSet } from "../constants/constants";

// Initialize jquery and Datatable
const DataTable = DataTables(Window, $);
const Table = () => {
  const { dataSet } = useSelector((state) => state?.userData);
  const [newData, setNewData] = useState(dataSet);

  useEffect(() => {
    setNewData(dataSet);
  }, [dataSet]);

  const tableRef = useRef();

  useEffect(() => {
    // When component loads, fill table with data
    new DataTable(tableRef.current, {
      destroy: true,
      data: newData,
      search: true,
      columns: [
        { title: "Govt Id" },
        { title: "Mobile No." },
        { title: "Age" },
        { title: "Name" },
        { title: "Sex" },
        { title: "ID Type" },
        { title: "Address" },
        { title: "State" },
        { title: "City" },
        { title: "PinCode" },
        { title: "Country" },
      ],
    });
  }, [newData]);
  return <table ref={tableRef}></table>;
};

export default Table;
