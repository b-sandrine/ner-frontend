import Sidebar from "../../components/Sidebar/Sidebar";
import { FaHome } from "react-icons/fa";
import profile from "../../assets/profile.png"
import '../../assets/styles/dashboard.css'

const Dashboard = () => {
    return (
        <div className="dashboard--container">
            <Sidebar />
            <div className="content--header">
                <div className="title">
                    <FaHome />
                    <p>Dashboard</p>
                </div>
                <img src={profile} alt="Profile Image" />
            </div>
        </div>
    )
}

export default Dashboard;