import Button from "./UI/Button";
import { type SessionsItemProps } from "./SessionsList";

function SessionsItem({ id, title, summary, image }: SessionsItemProps) {
  return (
    <article className="session-item">
      <img src={image} alt={title} />
      <div className="session-data">
        <div>
          <h3>{title}</h3>
          <p>{summary}</p>
        </div>
        <p className="actions">
          <Button to={id}>Learn More</Button>
        </p>
      </div>
    </article>
  );
}

export default SessionsItem;
