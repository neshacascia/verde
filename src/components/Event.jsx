export default function Event({ event, eventsPosition, setEventsPosition }) {
  return (
    <div className="text-center w-[327px]">
      <img src={event.image} />

      <div className="flex flex-col gap-4 mt-14">
        <div className="flex flex-col items-center">
          <button
            onClick={() => setEventsPosition(0)}
            className={`${
              eventsPosition === 0 ? 'text-[#4C4C4C]' : 'text-[#a7a7a7]'
            } text-[18px] font-medium tracking-[2.5px] uppercase`}
          >
            Family Gathering
          </button>
          {eventsPosition === 0 && (
            <hr className="w-14 border-[#9E7F66] border-[1px]"></hr>
          )}
        </div>

        <div className="flex flex-col items-center">
          <button
            onClick={() => setEventsPosition(1)}
            className={`${
              eventsPosition === 1 ? 'text-[#4C4C4C]' : 'text-[#a7a7a7]'
            } text-[#4C4C4C] text-[18px] font-medium tracking-[2.5px] uppercase`}
          >
            Special Events
          </button>
          {eventsPosition === 1 && (
            <hr className="w-14 border-[#9E7F66] border-[1px]"></hr>
          )}
        </div>

        <div className="flex flex-col items-center">
          <button
            onClick={() => setEventsPosition(2)}
            className={`${
              eventsPosition === 2 ? 'text-[#4C4C4C]' : 'text-[#a7a7a7]'
            } text-[#4C4C4C] text-[18px] font-medium tracking-[2.5px] uppercase`}
          >
            Social Events
          </button>
          {eventsPosition === 2 && (
            <hr className="w-14 border-[#9E7F66] border-[1px]"></hr>
          )}
        </div>
      </div>

      <h2 className="text-darkBlue text-[32px] font-semibold tracking-wide mt-7 mb-3">
        {event.heading}
      </h2>
      <p className="font-light leading-[26px]">{event.description}</p>
    </div>
  );
}
