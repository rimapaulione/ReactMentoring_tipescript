import SessionsItem from "./SessionsItem";

export type SessionsItemProps = {
  id: string;
  title: string;
  summary: string;
  image: string;
};

type SessionsListProps = {
  sessions: SessionsItemProps[];
};

function SessionsList({ sessions }: SessionsListProps) {
  return (
    <ul id="sessions-list">
      {sessions.map((session) => (
        <li key={session.id}>
          <SessionsItem {...session} />
        </li>
      ))}
    </ul>
  );
}

export default SessionsList;
