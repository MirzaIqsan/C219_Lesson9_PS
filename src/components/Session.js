import { useParams } from "react-router-dom";
import { getSession } from "../api";

export default function Session() {
  const {catId, sessionId} = useParams()

  const { name, desc, speaker } = getSession({ catId, sessionId });

  return (
    <>
      <h3>{speaker.org}</h3>
      <p>{desc}</p>

      <h4>{speaker.bio}</h4>
      <span>
        {speaker.title} 
      </span>
      
    </>
  );
}
