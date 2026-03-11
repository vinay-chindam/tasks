import React from "react";
import ReactDOM from "react-dom";

const LoginModal = ({ setOpenModal }) => {
  const loginModal = document.getElementById("login-modal-root");
  return ReactDOM.createPortal(
    <div 
     style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    onClick={()=>setOpenModal(false)} >
      <div onClick={(e)=>e.stopPropagation()}>
        <h4>Login here</h4>
        <input />
        <input />
        <button onClick={() => setOpenModal(false)}>Close Modal</button>
      </div>
    </div>,
    loginModal,
  );
};

export default LoginModal;
