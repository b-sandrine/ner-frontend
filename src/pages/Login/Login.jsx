import '../../assets/styles/main.css'
import welcome from '../../assets/welcome.png';
import logo from '../../assets/LOGO.png'
import { useNavigate } from 'react-router';
const Login = () => {
    const navigate = useNavigate();
    function handleNavigate () {
        navigate('/register')
    }
    return (
        <div className="container">
            <div className="static">
                <img src={welcome} alt="Welcome image" />
                <div className="overlay"></div>
                <div className="text-holder">
                    <h1>Welcome Back</h1>
                    <p>Log in to access your account</p>
                </div>
            </div>

            <div className="content">
                <img src={logo} alt="Logo" />
                <div className="form">
                    <input type="text" name="" id="" placeholder='Email' />
                    <input type="password" name="" id="" placeholder='Password' />
                    <input type="submit" name="" id="" value="LOG IN " />
                </div>
                <div className="footer-text">
                    <p>OR</p>
                    <p>Do not have an account?<span onClick={handleNavigate}>Register</span></p>
                </div>
            </div>
        </div>
    )
}

export default Login;