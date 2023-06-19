import "./FormCalorias.css"
import { useState } from "react";

export const FormCalorias = (props) => {
  const { nombreComida, handleForm, handleCompletaInfo } = props;
  const [input, setInput] = useState("");

function handleClick() {
    handleForm(input);
  };

function handleChange(e) {
    setInput(e.target.value);
}

const handleSubmit = (e) =>{
    e.preventDefault()
    handleCompletaInfo()
}
return(
<div className="form__calorias--div">
    <form className="form__calorias" onSubmit={handleSubmit}>
        <label htmlFor="calorias">¿Cuantas calorias has consumido en {nombreComida}?</label>
        <input type="number" value={input} onChange={handleChange}/>
        <button onClick={handleClick}>Completar</button>
    </form>
</div>
)

};