import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

function Modal({ children, isOpen = true, onClose }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const modalContent = isOpen ? (
    <div className="modal modal-open">
      <div className="modal-box">
        {children}
        Modal
        <div className="modal-action">
          <button className="btn" onClick={onClose} type="button">
            {'OK'}
          </button>
        </div>
      </div>
      <style jsx>{`
        .modal {
          height: 100vh;
          width: 100vw;
          z-index: 1;

          display: none; /* Hidden by default */
          position: fixed; /* Stay in place */
          z-index: 1; /* Sit on top */
          left: 0;
          top: 0;
          width: 100%; /* Full width */
          height: 100%; /* Full height */
          overflow: auto; /* Enable scroll if needed */
          background-color: rgb(0, 0, 0); /* Fallback color */
          background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
        }
        .modal-box {
          background: #fff;
          width: 500px;
          height: 800px;

          background-color: #fefefe;
          margin: 15% auto; /* 15% from the top and centered */
          padding: 20px;
          border: 1px solid #888;
          width: 80%; /* Could be more or less, depending on screen size */
        }
      `}</style>
    </div>
  ) : null;

  return isMounted
    ? ReactDOM.createPortal(modalContent, document.getElementById('modal-root'))
    : null;
}

export default Modal;
