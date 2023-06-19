import "./Comida.css"
import { CircularProgressBar } from "@tomickigrzegorz/react-circular-progress-bar";
import { useEffect, useState } from "react";
import { FormCalorias } from "../FormCalorias/FormCalorias.jsx";

export const Comida = (props) => {
    const [comida, setComida] = useState(props.comida)
    const [porcentaje, setPorcentaje] = useState()
    const [completarInfo, setCompletarInfo] = useState(false)

    useEffect(function () {
        handlePorcentaje()
    }, [comida])

    useEffect(function () {
        setComida(props.comida)
    })

    const handleForm = (value) => {
        props.handleSetComida(value, comida)

    }

    const handlePorcentaje = () => {
        let porcentaje = ((comida.consumido * 100) / comida.calorias)
        if (porcentaje > 100) porcentaje = 100
        setPorcentaje(Math.round(porcentaje))
    }

    const handleCompletaInfo = () => {
        setCompletarInfo(!completarInfo)
    }

    return (
        <div className={porcentaje < 100 ? "comida":"comida completado"} >
            <CircularProgressBar
                colorCircle="#e8f3ff"
                colorSlice="#10249f"
                fill="none"
                fontColor="#121212"
                number={false}
                percent={porcentaje || 0}
                round
                size={50}
                stroke={15}
                strokeBottom={15}
            />
            <div className="comida__info">
                <h5>{comida.nombre}</h5>
                <p>{comida.consumido}/{comida.calorias}kcal</p>
            </div>
            <button className="comida__button" onClick={handleCompletaInfo}>Agregar calorias</button>
            {completarInfo && <FormCalorias nombreComida={comida.nombre} handleForm={handleForm} handleCompletaInfo={handleCompletaInfo} />}
        </div>
    )
}