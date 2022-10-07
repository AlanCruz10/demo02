import Login from "./Login";
import Title from "../components/Title";
import Button from "../components/Button";
import '../styles/form.css'

function Formulario() {

const handleSubmit = (e) => {

    e.preventDefault();
    //console-log('click')
}
    return (
        <div className="login-form">
            <Title/>
            <form onSubmit={handleSubmit}>
                <Login/>
                <Button/>
            </form>+
        </div>
    );
}

export default Formulario;