import './Sidebar.css'
import logo from '../../assets/LOGO.png'
import { FaBasketballBall, FaHome, FaList, FaPeopleArrows } from 'react-icons/fa'

const Sidebar = () => {
    return (
        <div className="sidebar--container">
            <div className="header">
                <img src={logo} alt="Logo Image" />
                <FaList size={32} style={{ color: 'white' }} />

            </div>
            <div className="links">
                <div className="link">
                    <FaHome />
                    <p>Dashboard</p>
                </div>
                <div className="link">
                    <FaPeopleArrows />
                    <p>Owners</p>
                </div>
                <div className="link">
                    <FaBasketballBall />
                    <p>Settings</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;