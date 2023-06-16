import '../../assets/styles/main.css'
import welcome from '../../assets/welcome.png';
import logo from '../../assets/LOGO.png'
import { useNavigate } from 'react-router';
import { useState } from 'react';
const Login = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    function handleChange(e) {
        e.preventDefault()

        setUser({...user, [e.target.name]: e.target.value})
    }
    function handleNavigate() {
        if(user) {
            navigate('/dashboard');
        }
        else{
            navigate('/register')
        }
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
                    <input type="email" name="email" id="" placeholder='Email' value={user.email} onChange={handleChange}/>
                    <input type="password" name="password" id="" placeholder='Password' value={user.password} onChange={handleChange}/>
                    <input type="submit" name="" id="" value="LOG IN " onClick={handleNavigate}/>
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