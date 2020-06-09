import React, {createContext, useState, useEffect} from 'react'
import Axios from 'axios'

export const ModalContext = createContext()

const ModalProvider = (props) => {

    //state del provider
    const [idReceta, guardarIdReceta] = useState(null)
    const [informacion, guardarReceta] = useState({})
    
      //llamar la aip
      useEffect( () => {
        const obtenerReceta = async () => {
            if(!idReceta) return

            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceta}`
            const resultado = await Axios(url)
            //guardarReceta(resultado.data.drinks[0])
            guardarReceta(resultado.data.drinks[0])
        }
        obtenerReceta()
    }, [idReceta])


    return (
        <ModalContext.Provider
            value={{
                informacion,
                guardarIdReceta,
                guardarReceta
            }}
        >
            {props.children}
        </ModalContext.Provider>
    )
}

export default ModalProvider;   


