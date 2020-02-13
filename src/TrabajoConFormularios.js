import React, {Component } from 'react'
import Imagen from 'react-image'


class TrabajoConFormularios extends Component{
render() {
    return(
        <div>
            <h2>Formulario</h2>
            <form name="formulario1" id="formulario1id" action="">
                <fieldset>
                    <legend>Formulario con react</legend>
                    <label for="campotextoid">Nombre: </label>
                    <input type="text" name="campotexto1" placeholder="introduce tu nombre"></input>
                    <label for="campotextoid2">campo busqueda: </label>
                    <input type="text" className="claseinput1" name="campotexto2" placeholder="Busqueda"></input>


                </fieldset>

            </form>
        </div>
    )
}


}
export default TrabajoConFormularios