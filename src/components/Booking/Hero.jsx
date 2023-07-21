export default function Hero() {
  return (
    <section className="text-white bg-heroBookingMobile bg-cover text-center h-[600px] flex flex-col items-center px-6">
      <span className="text-5xl font-medium tracking-wide mt-16 mb-10">
        dine
      </span>
      <h1 className="text-[32px] font-light -tracking-[0.4px] leading-10 w-[200px]">
        Reservations
      </h1>
      <p className="text-lg font-light leading-[26px] w-[440px] mt-5">
        We can’t wait to host you. If you have any special requirements please
        feel free to call on the phone number below. We’ll be happy to
        accommodate you.
      </p>

      <button className="text-[17px] font-semibold tracking-widest uppercase  border-[1px] py-5 px-14 mt-7 hover:text-codGray hover:bg-white">
        Reserve Place
      </button>
    </section>
  );
}
