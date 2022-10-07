import '../styles/button.css'
//el handle submit va ahi pero como lo hice en componentes falta el metodo xd 
function Button() {
    return(
        <div className='button-container'>
            <button disabled="disabled" className="button-container--button_style" onClick={handleSubmit}>Iniciar sesion</button>
        </div>
    );
}

export default Button;