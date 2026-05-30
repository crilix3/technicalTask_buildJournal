import React, { useState, useEffect } from "react";
import style from "./Error.module.css";

interface ErrorProps {
  message: string;
  onClose: () => void;
  duration?: number;
}

const Error: React.FC<ErrorProps> = ({ message, onClose, duration = 5000 }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [onClose, duration]);

  if (!visible) return null;

  return (
    <div className={style.error}>
      <div className={style.error_container}>
        <div>
          <strong>Ошибка!</strong>
          <div className={style.error_srting}>{message}</div>
        </div>
        <button onClick={onClose} className={style.btn_close}>
          ×
        </button>
      </div>
    </div>
  );
};

export default Error;
