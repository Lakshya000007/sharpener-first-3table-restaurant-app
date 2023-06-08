import "./Table.css";

const Table = ({ table1List, table2List, table3List, deleteHandle }) => {
  //console.log(table1List);
  // console.log(table2List);
  // console.log(table3List);

  const onDelete = (e) => {
    deleteHandle(e.target.name, e.target.id);
  };

  return (
    <div className="table">
      <h4>Table 1</h4>
      {table1List.map((order) => {
        return (
          <li style={{ listStyleType: "none" }}>
            {order.dish}
            {" -> "} {order.price}
            {
              <button onClick={onDelete} id={order.id} name={order.tableNo}>
                Delete Dish
              </button>
            }
          </li>
        );
      })}
      <h4>Table 2</h4>
      {table2List.map((order) => {
        return (
          <li style={{ listStyleType: "none" }}>
            {order.dish} {" -> "} {order.price}
            {
              <button onClick={onDelete} id={order.id} name={order.tableNo}>
                Delete Dish
              </button>
            }
          </li>
        );
      })}
      <h4>Table 3</h4>
      {table3List.map((order) => {
        return (
          <li style={{ listStyleType: "none" }}>
            {order.dish} {" -> "}
            {order.price}
            {
              <button onClick={onDelete} id={order.id} name={order.tableNo}>
                Delete Dish
              </button>
            }
          </li>
        );
      })}
    </div>
  );
};

export default Table;
