import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useHistory } from 'react-router-dom';

const modalRoot = document.querySelector('#modal');

const Modal = ({ children }) => {
  const containerDiv = document.createElement('div');
  let history = useHistory();

  useEffect(() => {
    modalRoot.appendChild(containerDiv);
    function keyListener(e) {
      if (e.keyCode === 27) {
        history.push('/');
      }
    }
    document.addEventListener('keydown', keyListener);
    return () => modalRoot.removeChild(containerDiv);
  }, [containerDiv, history]);

  return createPortal(children, containerDiv);
};

export default Modal;
