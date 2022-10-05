import Email from '../components/Email';
import Password from '../components/Password';
import '../styles/login.css'

function Login() {
    return(
        <div className='login-form__user'>
            <Email/>
            <Password/>
        </div>
    );
}

export default Login;