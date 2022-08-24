import { Context } from "./Context";
import { useState } from "react";

export const AppContext = (props) => {
  const { children } = props;

  // las partes que hacen del form fueron a useState para obtener value
  const [product, setProduct] = useState();

  const handleChange = (e) => {
    const newProd = e.target.value;
    setProduct(newProd);
  };

  const [category, setCategory] = useState();

  const handleSelect = (e) => {
    const selected = e.target.value;
    setCategory(selected);
  };

  const [text, setText] = useState();

  const handleArea = (e) => {
    const newText = e.target.value;
    setText(newText);
  };

  // boton envio formulario
  const sendForm = (e) => {
    e.preventDefault();
    e.target.reset();
    addChecklist();
    console.log(product + " " + category + " " + text);
  };

  // parte importante: se iteran todas las partes anteriores en un array y se pone la funcion a ejecutar al enviar el form
  const [check, setCheck] = useState([]);

  const [id, setId] = useState(0);

  const addChecklist = () => {
    // newProduct se vuelve objeto para encerrarlos para luego convertir en array
    setId(id + 1);
    const newProduct = { id, product, category, text };
    setCheck([...check, newProduct]);
  };

  const handleRemoveItem = (id) => {
    const newProd = check.filter((item) => item.id !== id);
    setCheck(newProd);
    console.log(check);
  };

  // IMPORTANTE:  DISEÑO

  return (
    <Context.Provider
      value={{
        handleChange,
        sendForm,
        handleSelect,
        handleArea,
        check,
        handleRemoveItem,
      }}
    >
      {children}
    </Context.Provider>
  );
};
