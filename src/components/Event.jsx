export default function Event({ event, setEventsPosition }) {
  return (
    <div>
      <img src={event.image} />

      <div className="flex flex-col">
        <button onClick={() => setEventsPosition(0)} className="uppercase">
          Family Gathering
        </button>
        <button onClick={() => setEventsPosition(1)} className="uppercase">
          Special Events
        </button>
        <button onClick={() => setEventsPosition(2)} className="uppercase">
          Social Events
        </button>
      </div>

      <h2>{event.heading}</h2>
      <p>{event.description}</p>
    </div>
  );
}
