import "./CalculadoraCalorias.css"
import { useEffect, useState } from "react";
import { Comida } from "../Comida/Comida.jsx";
import { FormComida } from "../FormComida/FormComida";

export const CalculadoraCalorias = () => {
    const [comidas, setComidas] = useState([])
    const [limite, setLimite] = useState()
    const [ingerido, setIngerido] = useState()
    const [formComida, setFormComida] = useState(false)

    useEffect(()=>{
        let sumaLimite = 0,
        sumaIngerido = 0;
        for (const objComida in comidas) {
            sumaLimite += comidas[objComida].calorias
            sumaIngerido += comidas[objComida].consumido
        }
        setLimite(sumaLimite)
        setIngerido(sumaIngerido)
    },[comidas])

    function handleSetComida(value, comida) {
        const comidasActualizado = comidas.map((comidaObj)=>{
            if(comidaObj.id !== comida.id) return comidaObj
            comidaObj = { ...comida, consumido: parseInt(value)}
            return comidaObj
        })
        setComidas(comidasActualizado)
    }

    const handleAgregarComida = (comida) => {
        const array = [...comidas, comida]
        
        setComidas(array.map((comida, index)=>{
            comida.id = index
            return comida
        }))
    }

    function handleFormComida() {
        setFormComida(!formComida)
    }

    return (
        <section className="calorias">
            <div className="calorias__header">
                <h3>Coloca tu limite de calorias!</h3>
                <div className="header__ranges">
                    <div className="range">
                        <div><h3>{limite}</h3></div>
                        <p>Limite</p>
                    </div>
                    <div className="range">
                        <div><h3>{ingerido}</h3></div>
                        <p>Consumido</p>
                    </div>
                </div>
            </div>
            <div className="calorias__main">
                {comidas.map((comida, index)=> <Comida comida={comida} key={index} handleSetComida={handleSetComida}></Comida>)}
                <button className="calorias__button" onClick={handleFormComida}>Agrega comida</button>
                <div className="calorias__advertencia">
                    <img src="" alt="!" />
                    <p>Recuerda completar toda la información</p>
                </div>
            </div>
            {formComida && <FormComida handleAgregarComida={handleAgregarComida} handleFormComida={handleFormComida} />}
        </section>
    )
}