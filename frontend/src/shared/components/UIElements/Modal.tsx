import React, { CSSProperties, ReactElement } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import Backdrop from './Backdrop';
import './Modal.css';

interface ModalProps {
  title?: string;
  children?: ReactElement;
  className?: string;
  show?: boolean;
  style?: CSSProperties;
  headerClass?: string;
  contentClass?: string;
  footerClass?: string;
  footer?: ReactElement;
  onSubmit?: () => void;
  onCancel: () => void;
}

// interface ModalProps {
//   show: boolean;
//   onCancel: () => void;
// }

const ModalOverlay = (props: ModalProps) => {
  const content = (
    <>
      <div className={`modal ${props.className}`} style={props.style}>
        <header className={`modal__header ${props.headerClass}`}>
          ${props.title}
        </header>
        <form
          onSubmit={
            props.onSubmit
              ? props.onSubmit
              : (event: React.FormEvent<HTMLElement>) => {
                  event.preventDefault();
                }
          }
        >
          <div className={`modal__content ${props.contentClass}`}>
            {props.children}
          </div>
          <footer className={`modal__footer ${props.footerClass}`}>
            ${props.footer}
          </footer>
        </form>
      </div>
    </>
  );

  return ReactDOM.createPortal(
    content,
    document.getElementById('modal-hook') as HTMLElement
  );
};
const Modal = (props: ModalProps) => {
  return (
    <>
      {props.show && <Backdrop onClick={props.onCancel} />}
      <CSSTransition
        in={props.show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames='modal'
      >
        <ModalOverlay {...props} />
      </CSSTransition>
    </>
  );
};

export default Modal;
