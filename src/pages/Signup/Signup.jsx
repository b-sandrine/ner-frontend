import '../../assets/styles/main.css'
import welcome from '../../assets/welcome.png';
import logo from '../../assets/LOGO.png'
import { useNavigate } from 'react-router';
const Signup = () => {
    const navigate = useNavigate();
    function handleNavigate () {
        navigate('/login')
    }
    return (
        <div className="container">
            <div className="static">
                <img src={welcome} alt="Welcome image" />
                <div className="overlay"></div>
                <div className="text-holder">
                    <h1>Sign Up</h1>
                    <p>Almost there</p>
                </div>
            </div>

            <div className="content">
                <img src={logo} alt="Logo" />
                <div className="form">
                    <input type="text" name="" id="" placeholder='Full Names' />
                    <input type="email" name="" id=""  placeholder='Email'/>
                    <input type="number" name="" id="" placeholder='National Id'/>
                    <input type="text" name="" id="" placeholder='Phone number'/>
                    <input type="text" name="" id="" placeholder='Address'/>
                    <input type="text" name="" id="" placeholder='Username'/>
                    <input type="password" name="" id="" placeholder='Password' />
                    <input type="submit" name="" id="" value="Sign Up " onClick={handleNavigate}/>
                </div>
                <div className="footer-text">
                    <p>OR</p>
                    <p>Already have an account?<span onClick={handleNavigate}>Login</span></p>
                </div>
            </div>
        </div>
    )
}

export default Signup;