import Login from "./Login";
import Title from "../components/Title";
import Button from "../components/Button";
import '../styles/form.css'

function Formulario() {
    return (
        <div className="login-form">
            <Title/>
            <Login/>
            <Button/>
        </div>
    );
}

export default Formulario;