export default function Event({ event, setEventsPosition }) {
  return (
    <div className="text-center w-[327px]">
      <img src={event.image} />

      <div className="flex flex-col gap-4 mt-14">
        <button
          onClick={() => setEventsPosition(0)}
          className="text-[#4C4C4C] text-[18px] font-medium tracking-[2.5px] uppercase"
        >
          Family Gathering
        </button>
        <button
          onClick={() => setEventsPosition(1)}
          className="text-[#4C4C4C] text-[18px] font-medium tracking-[2.5px] uppercase"
        >
          Special Events
        </button>
        <button
          onClick={() => setEventsPosition(2)}
          className="text-[#4C4C4C] text-[18px] font-medium tracking-[2.5px] uppercase"
        >
          Social Events
        </button>
      </div>

      <h2 className="text-darkBlue text-[32px] font-semibold tracking-wide mt-7 mb-3">
        {event.heading}
      </h2>
      <p className="font-light leading-[26px]">{event.description}</p>
    </div>
  );
}
