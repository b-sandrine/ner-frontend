import './Sidebar.css'
import logo from '../../assets/LOGO.png'
import {HiHome,HiMenu} from 'react-icons/hi'
import {BsFillPeopleFill} from 'react-icons/bs'
import {IoMdSettings} from 'react-icons/io'
import { Link } from 'react-router-dom'
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
                    <Link to='/dashboard/content' className="dashboard-link"><p>Dashboard</p></Link>
                </div>
                <div className="link">
                    <BsFillPeopleFill size={20} />
                    <Link to='/dashboard/owners' className="dashboard-link"><p>Owners</p></Link>
                </div>
                <div className="link">
                    <IoMdSettings size={20} />
                    <Link to='/dashboard/settings' className="dashboard-link"><p>Settings</p></Link>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;