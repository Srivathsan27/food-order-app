import css from "./Modal.module.css";
import reactDom from "react-dom";
const Backdrop = (props) => {
  return <div className={css.backdrop} onClick={props.onClick} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={css.modal}>
      <div className={css.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <>
      {reactDom.createPortal(
        <Backdrop onClick={props.onBackdropClick} />,
        document.getElementById("overlays")
      )}
      {reactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        document.getElementById("overlays")
      )}
    </>
  );
};

export default Modal;
