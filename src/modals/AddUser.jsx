import './AddUser.css'
import '../assets/styles/main.css'
const Adduser = ({ isOpen, onClose }) => {
    return (
        <div className={`modal ${isOpen ? 'modal-open' : ''}`}>
            <div className="modal-content">
                <div className="close">
                    <span onClick={onClose}>&times;</span>
                </div>
                <h2>Add New Car Owner</h2>
                <div className="form">
                    <input type="text" name="fullnames" id="" placeholder='Full Names' />
                    <input type="email" name="email" id="" placeholder='Email' />
                    <input type="number" name="NID" id="" placeholder='National Id' />
                    <input type="text" name="phoneNumber" id="" placeholder='Phone number' />
                    <input type="text" name="address" id="" placeholder='Address' />
                    <input type="text" name="username" id="" placeholder='Username' />
                    <input type="password" name="password" id="" placeholder='Password' />
                    <div className="buttons">
                        <input type="submit" name="" id="" value="Cancel" className='cancel' onClick={onClose} />
                        <input type="submit" name="" id="" value="Submit" className='success' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Adduser;