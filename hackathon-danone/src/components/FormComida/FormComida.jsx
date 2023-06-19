import "./FormComida.css"
import { useState } from "react";

export const FormComida = (props) => {
  const { handleAgregarComida, handleFormComida } = props;
  const [comidaNombre, setComidaNombre] = useState("");
  const [numCalorias, setNumCalorias] = useState("");
  const [consumidas, setConsumidas] = useState("");

function handleChangeNombre(e) {
    setComidaNombre(e.target.value);
}
function handleChangeCalorias(e) {
    setNumCalorias(e.target.value);
}
function handleChangeConsumidas(e) {
    setConsumidas(e.target.value);
}

const handleSubmit = (e) =>{
    e.preventDefault()
    const comida = {
        nombre: comidaNombre,
        calorias: parseInt(numCalorias) || 0,
        consumido: parseInt(consumidas) || 0
    }
    handleAgregarComida(comida)
    handleFormComida()
}
return(
<div className="form__calorias--div">
    <form className="form__calorias" onSubmit={handleSubmit}>
        <label>¿Cual es el nombre de esta comida?</label>
        <input type="text" value={comidaNombre} onChange={handleChangeNombre}/>
        <label>¿Cual es tu limite de calorias de esta comida?</label>
        <input type="number" value={numCalorias} onChange={handleChangeCalorias}/>
        <label>¿Cuantas calorias consumiste de esta comida?</label>
        <input type="number" value={consumidas} onChange={handleChangeConsumidas}/>
        <button>Completar</button>
    </form>
</div>
)

};