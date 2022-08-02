import { Context } from "./Context";
import { useState } from "react";

export const AppContext = (props) => {
  const { children } = props;

  const [product, setProduct] = useState({
    input: "",
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const sendForm = (e) => {
    e.preventDefault();
    console.log(product.input + " " + item + " " + write.text);
  };

  const [item, setItem] = useState();

  const handleSelect = (e) => {
    const selected = e.target.value;
    setItem(selected);
  };

  const [write, setWrite] = useState({
    text: "",
  });

  const handleArea = (e) => {
    setWrite({ ...write, [e.target.name]: e.target.value });
  };

  return (
    <Context.Provider
      value={{
        handleChange,
        sendForm,
        handleSelect,
        item,
        write,
        handleArea,
      }}
    >
      {children}
    </Context.Provider>
  );
};
