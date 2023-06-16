import './Sidebar.css'
import logo from '../../assets/LOGO.png'
import { FaBasketballBall, FaHome, FaList, FaPeopleArrows } from 'react-icons/fa'
import {HiHome,HiMenu} from 'react-icons/hi'
import {BsFillPeopleFill} from 'react-icons/bs'
import {IoMdSettings} from 'react-icons/io'
const Sidebar = () => {
    return (
        <div className="sidebar--container">
            <div className="header">
                <img src={logo} alt="Logo Image" />
                <HiMenu size={40} style={{ color: 'white', fontWeight:'bold' }} />
            </div>
            <div className="links">
                <div className="link active">
                    <HiHome size={20}/>
                    <p>Dashboard</p>
                </div>
                <div className="link">
                    <BsFillPeopleFill size={20} />
                    <p>Owners</p>
                </div>
                <div className="link">
                    <IoMdSettings size={20} />
                    <p>Settings</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;