import React, {createContext, useState, useEffect} from 'react'
import Axios from 'axios';


//crear el context
export const CategoriasContext = createContext();


//provider es donde se encuentran las funciones y el state
const CategoriasProvider = (props) => {

    //crear el state context
    const [categorias, guardarCategorias] = useState([])

    //llamamdo a la api
    useEffect(() => {

        const obtenerCategorias = async () => {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`
            const respuesta = await Axios(url)
            guardarCategorias(respuesta.data.drinks)
        }

        obtenerCategorias()
    }, [])

    return (
        <CategoriasContext.Provider
            value={{
                categorias
            }}
            >
                {props.children}
        </CategoriasContext.Provider>
    )

}

export default CategoriasProvider
