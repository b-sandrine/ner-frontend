const Adduser = ({ isOpen, onClose }) => {
    return (
      <div className={`modal ${isOpen ? 'open' : ''}`}>
        <div className="modal-content">
          <span className="close" onClick={onClose}>&times;</span>
          <h2>Modal Title</h2>
          <p>This is the content of the modal.</p>
        </div>
      </div>
    );
  };
  
  export default Adduser;