import { useState } from "react";
import "./Form.css";

const Form = ({ tableShowHandle }) => {
  const [price, setPrice] = useState(0);
  const [dish, setDish] = useState("");
  const [tableNo, setTableNoChange] = useState("1");
  const [id, setId] = useState("");

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleDishChange = (e) => {
    setDish(e.target.value);
  };

  const handletableNoChange = (e) => {
    setTableNoChange(e.target.value);
  };

  const handleSubmit = (e) => {
    setId((Math.random() * 10).toString());
    e.preventDefault();

    if (price > 0 && dish.trim().length > 0) {
      const newList = {
        price: price,
        id: id,
        tableNo: tableNo,
        dish: dish,
      };

      tableShowHandle(tableNo, newList);
      console.log(newList);
      console.log(tableNo);
    }
  };

  return (
    <>
      <form action="" className="form" onSubmit={handleSubmit}>
        <div className="id">
          <label htmlFor="id">Unique Order Id:</label>
          <input type="text" value={id} id="id" />
        </div>
        <div className="price">
          <label htmlFor="price">Enter Price:</label>
          <input
            type="number"
            onChange={handlePriceChange}
            value={price}
            id="price"
          />
        </div>
        <div className="dish">
          <label htmlFor="dish">Enter Dish:</label>
          <input
            type="text"
            onChange={handleDishChange}
            value={dish}
            id="dish"
          />
        </div>
        <div className="tableNo">
          <label htmlFor="table">Choose Table:</label>
          <select
            name="table"
            id="table"
            onChange={handletableNoChange}
            value={tableNo}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        <div className="button">
          <button>Add to Bill</button>
        </div>
      </form>

      <h3>
        <center>Orders</center>
      </h3>
    </>
  );
};

export default Form;
