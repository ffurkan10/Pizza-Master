import PropTypes from "prop-types";
import ReactModal from "react-modal";
import cn from "classnames";

const Modal = ({ toggle, isOpen, className, children, props }) => {
  return (
    <ReactModal
      className={cn(className)}
      isOpen={isOpen}
      onRequestClose={toggle}
      contentLabel="Example Modal"
      {...props}
    >
      {children}
    </ReactModal>
  );
};
Modal.propTypes = {
  toggle: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};
Modal.defaultProp = {
  toggle: () => {},
  isOpen: false,
};
export default Modal;
