import { useState } from "react";
import "./App.css";
import Form from "./Components/Form/Form";
import Table from "./Components/Table/Table";

function App() {
  const [table1List, setTable1List] = useState([]);
  const [table2List, setTable2List] = useState([]);
  const [table3List, setTable3List] = useState([]);

  const tableShowHandle = (tableNo, newList) => {
    if (tableNo === "1") {
      setTable1List([...table1List, newList]);
    }

    if (tableNo === "2") {
      setTable2List([...table2List, newList]);
    }

    if (tableNo === "3") {
      setTable3List([...table3List, newList]);
    }
  };

  const deleteHandle = (tableNo, id) => {
    if (tableNo === "1") {
      const newList = table1List.filter((data) => {
        return data.id !== id;
      });
      setTable1List(newList);
    }

    if (tableNo === "2") {
      const newList = table2List.filter((data) => {
        return data.id !== id;
      });
      setTable2List(newList);
    }

    if (tableNo === "3") {
      const newList = table3List.filter((data) => {
        return data.id !== id;
      });
      setTable3List(newList);
    }
  };

  console.log(table1List);
  console.log(table2List);
  console.log(table3List);

  return (
    <div className="App">
      <Form tableShowHandle={tableShowHandle} />
      <Table
        table1List={table1List}
        table2List={table2List}
        table3List={table3List}
        deleteHandle={deleteHandle}
      />
    </div>
  );
}

export default App;
