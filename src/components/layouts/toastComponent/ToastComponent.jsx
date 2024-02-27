import React, { useEffect } from "react";

const ToastComponent = ({ showAlert }) => {
    useEffect(() => {
      
    }, [])
    
  return (
    <div>
      {showAlert && (
        <div class="alert alert-success" role="alert">
        Message sent successfully!
        </div>
      )}

      
    </div>
  );
};

export default ToastComponent;
