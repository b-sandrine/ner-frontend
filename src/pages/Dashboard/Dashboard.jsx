import Sidebar from "../../components/Sidebar/Sidebar";
import { FaHome } from "react-icons/fa";
import profile from "../../assets/profile.png"
import { Outlet } from "react-router";
import '../../assets/styles/dashboard.css'

const Dashboard = ({children}) => {
    return (
        <div className="dashboard--container">
            <Sidebar />
            <div className="content">
                <div className="content--header">
                    <div className="title">
                        <FaHome />
                        <p>Dashboard</p>
                    </div>
                    <img src={profile} alt="Profile Image" />
                </div>
                <div className="content--changing">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Dashboard;