function Email() {

    const handleFocus = () => {
        console.log('hola')
    }
    //event o e es una varible que por default que manda el manejador del evento
    const handleBlur = (event) => {
        //es un objeto del evento y el atributo que nos interesa es target el cual contienen value otro atributo
        //console.log(event)
        //console.log(event.target)
        console.log(event.target.value)

    }

    return(
        <div className="login-form__user_email">
            <label className="login-form__user_email label">Email</label>
            <input type="email" placeholder="email" className="login-form__user_email input" onFocus={handleFocus} onBlur={handleBlur}/>
        </div>
    );
}

export default Email;