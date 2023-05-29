import React from "react";
import './Explorador.css'

export const Explorador = ({explorador, setExplorador, pedirApi}) => {
    
    const generarBusqueda = ({target}) => {
        setExplorador(target.value)
    }
    const agregarCard = async (e) =>{
        e.preventDefault()
        const newCiudad =+ await pedirApi(explorador) 

        console.log(newCiudad)
    }
    
return (
        <div>
            <input type="text" class="input" name="explorador" value={explorador} onChange={generarBusqueda}/>
            <button type="submit" class="btn" onClick={agregarCard}>Agregar tarjeta</button>
        </div>
    )
}