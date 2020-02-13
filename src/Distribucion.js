import React, {Component } from 'react'


class Distribucion extends Component {
    render(){
        return(
            <div>
                <div className="container">
                <div className="container__header">
                    <nav className="container__header__menu">
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    </nav>
                </div>
                    <div className="container__header">Cabecera</div>
                    <div className="container__aside">aside1</div>
                    <div className="container__mainbody">body</div> 
                    <div className="container__aside2">aside2</div>
                    <div className="container__footer">Footer</div>
                </div>
            </div>
        )
    }
}

export default Distribucion 