import { useEffect, useRef } from "react";
import Button from "./UI/Button";
import Modal, { type ModalHandler } from "./UI/Modal";
import UpcomingSession from "./UpcomingSession";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { cancelSession } from "../store/sessionsSlice";

type UpcomingSessionsProps = {
  onClose: () => void;
};

function UpcomingSessions({ onClose }: UpcomingSessionsProps) {
  const modalRef = useRef<ModalHandler>(null);
  const sessions = useAppSelector((state) => state.sessions.sessions);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (modalRef.current) {
      modalRef.current.open();
    }

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".modal-content")) {
        modalRef.current?.close();
      }
    };
    document.addEventListener("mousedown", handleClick, true);

    return () => {
      document.removeEventListener("mousedown", handleClick, true);
    };
  }, [modalRef]);
  const hasSessions = sessions.length > 0;

  function cancelHandler(id: string) {
    dispatch(cancelSession(id));
  }

  return (
    <Modal onClose={onClose} ref={modalRef}>
      {hasSessions && (
        <ul>
          {sessions.map((session) => (
            <li key={session.id}>
              <UpcomingSession
                session={session}
                onCancel={() => cancelHandler(session.id)}
              />
            </li>
          ))}
        </ul>
      )}
      {!hasSessions && <p>No upcoming sessions.</p>}
      <Button type="button" onClick={onClose}>
        Close
      </Button>
    </Modal>
  );
}

export default UpcomingSessions;
