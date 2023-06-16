import './Sidebar.css'
import logo from '../../assets/LOGO.png'
import { FaUser } from 'react-icons/fa'
const Sidebar = () => {
    return (
        <div className="sidebar--container">
            <div className="header">
                <img src={logo} alt="Logo Image" />
                <FaUser size={32} />
                
            </div>
            <div className="links">
                <div className="link">
                <FaUser />

                    <p>Dashboard</p>
                </div>
                <div className="link">
                <FaUser />

                    <p>Owners</p>
                </div>
                <div className="link">
                    <FaUser />
                    <p>Settings</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;