import '../../assets/styles/main.css'
import welcome from '../../assets/welcome.png';
import logo from '../../assets/LOGO.png'
import { useNavigate } from 'react-router';
import { useState } from 'react';
import axios from 'axios';
const Signup = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        fullnames: "",
        email: "",
        NID: 0,
        phoneNumber: "",
        address: "",
        username: "",
        password: "",
    })

    function handleOnChange(e) {
        e.preventDefault();
        setUser({...user, [e.target.name]: e.target.value})
    }

    function handleNavigate() {
        console.log(user)
        axios.post('http://localhost:8080/api/create', user)
        .then((response) => {
            console.log(response)
            navigate('/login')
        })
        .catch((error) => {
            console.log(error)
        })
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
                    <input type="text" name="fullnames" id="" placeholder='Full Names' value={user.fullnames} onChange={handleOnChange}/>
                    <input type="email" name="email" id="" placeholder='Email' value={user.email} onChange={handleOnChange}/>
                    <input type="number" name="NID" id="" placeholder='National Id' value={user.NID} onChange={handleOnChange}/>
                    <input type="text" name="phoneNumber" id="" placeholder='Phone number' value={user.phoneNumber} onChange={handleOnChange}/>
                    <input type="text" name="address" id="" placeholder='Address' value={user.address} onChange={handleOnChange}/>
                    <input type="text" name="username" id="" placeholder='Username' value={user.username} onChange={handleOnChange}/>
                    <input type="password" name="password" id="" placeholder='Password' value={user.password} onChange={handleOnChange}/>
                    <input type="submit" name="" id="" value="Sign Up " onClick={handleNavigate} />
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