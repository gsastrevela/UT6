import React, {Component } from 'react'
import Imagen from 'react-image'

class SelectoresAtributo extends Component {
    render() {
        return(
            <div>
                <h2>selectores de atributos</h2>
                <a href="https://www.google.es" target="_blank" rel="noopener noreferrer">enlace a google que cumple un selector de atributo</a>
                <br/><br/>
                <a href="https://www.google.es" target="_self">enlace a google que cumple un selector de atributo con el valor _self</a>
                <br/><br/>
                <Imagen alt="K2" src={require('./img/seebensee-2384369-810x540.jpg')} />
                <br/>
                <p className="claseparrafo-">este parrafo va a cumplir un selector de atributos para elementos con el atributo class</p>
                <br/>
                <p className="claseselector1">va a cumplir un selector de atributos para elementos con el atributo class y cuyo valor comience por una palabra que puede ir seguida de cualquier conjunto</p>
            </div>
        )

    }


}
export default SelectoresAtributo