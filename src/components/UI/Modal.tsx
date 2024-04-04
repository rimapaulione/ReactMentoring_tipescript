import { type ReactNode, forwardRef, useRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";

type ModalProps = {
  children: ReactNode;
  onClose: () => void;
};

export type ModalHandler = {
  open: () => void;
  close: () => void;
};

const Modal = forwardRef<ModalHandler, ModalProps>(function Modal(
  { children, onClose },
  ref
) {
  const dialog = useRef<HTMLDialogElement>(null);

  useImperativeHandle(ref, () => {
    return {
      open() {
        if (dialog.current) {
          dialog.current.showModal();
        }
      },
      close() {
        dialog.current?.close();
      },
    };
  });

  return createPortal(
    <dialog onClose={onClose} ref={dialog} className="modal">
      <div className="modal-content">{children}</div>
    </dialog>,
    document.getElementById("modal-root")!
  );
});

export default Modal;
