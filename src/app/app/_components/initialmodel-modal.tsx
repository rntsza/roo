import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

const modalRoot = typeof document !== 'undefined' ? document.getElementById('modal-root') : null;

if (modalRoot === null && typeof document !== 'undefined') {
  const el = document.createElement('div');
  el.id = 'modal-root';
  document.body.appendChild(el);
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const el = React.useMemo(() => document.createElement('div'), []);

  useEffect(() => {
    if (modalRoot) {
      modalRoot.appendChild(el);
    }
    return () => {
      if (modalRoot) {
        modalRoot.removeChild(el);
      }
    };
  }, [el]);

  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-md w-full shadow-lg">
        <button
          className="text-black text-3xl leading-none absolute top-0 right-0 mt-4 mr-4"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="mt-4">{children}</div>
      </div>
    </div>,
    el
  );
};

export default Modal;
