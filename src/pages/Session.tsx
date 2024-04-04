import { useState } from "react";
import { useParams } from "react-router-dom";

import { SESSIONS } from "../dummy-sessions.ts";
import Button from "../components/UI/Button.tsx";
import BookSession from "../components/BookSession.tsx";

export default function SessionPage() {
  const params = useParams<{ id: string }>();
  const [showBookSession, setShowBookSession] = useState(false);

  const sessionId = params.id;
  const loadedSession = SESSIONS.find((session) => session.id === sessionId);

  if (!loadedSession) {
    return (
      <main id="session-page">
        <p>No session found!</p>
      </main>
    );
  }

  function showBookSessionHandler() {
    setShowBookSession(true);
  }
  function closeBookSessionHandler() {
    setShowBookSession(false);
  }

  return (
    <main id="session-page">
      {showBookSession && (
        <BookSession
          onClose={closeBookSessionHandler}
          session={loadedSession}
        />
      )}
      <article>
        <header>
          <img src={loadedSession.image} alt={loadedSession.title} />
          <div>
            <h2>{loadedSession.title}</h2>
            <time dateTime={new Date(loadedSession.date).toISOString()}>
              {new Date(loadedSession.date).toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </time>
            <p>
              <Button onClick={showBookSessionHandler}>Book Session</Button>
            </p>
          </div>
        </header>
        <p id="content">{loadedSession.description}</p>
      </article>
    </main>
  );
}
