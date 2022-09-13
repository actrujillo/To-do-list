import { useContext } from "react";
import { Context } from "../context/Context";
import "../assets/css/Form.css";

export const Form = () => {
  const { sendForm, handleChange, handleSelect, handleArea } =
    useContext(Context);

  return (
    <div className="form">
      <form action="" method="get" onSubmit={sendForm}>
        <h2>Let's start listing things...</h2>
        <input
          required
          type="text"
          name="input"
          placeholder="Please insert your product here"
          onChange={handleChange}
        />
        <select
          name="category"
          id="category"
          defaultValue={"DEFAULT"}
          onChange={handleSelect}
        >
          <option value="DEFAULT" disabled>
            Choose a category
          </option>
          <option value="Grocery">Grocery</option>
          <option value="Clothing">Clothing</option>
          <option value="Personal Care">Personal Care</option>
          <option value="Books">Books</option>
          <option value="Baby">Baby</option>
          <option value="Electronics">Electronics</option>
          <option value="Pets">Pets</option>
        </select>
        <textarea
          name="text"
          id="description"
          cols="30"
          rows="10"
          placeholder="Describe here if you wish..."
          onChange={handleArea}
        ></textarea>
        <button>Add</button>
      </form>
    </div>
  );
};
