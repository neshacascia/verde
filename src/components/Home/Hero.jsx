import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="text-white bg-heroHomeMobile bg-cover text-center h-[120vh] flex flex-col justify-center items-center px-6">
      <span className="text-5xl font-medium tracking-wide mt-[160px]">
        dine
      </span>
      <h1 className="text-[32px] font-light -tracking-[0.4px] leading-10 w-[200px] mt-4">
        Exquisite dining since 1989
      </h1>
      <p className="text-lg font-light leading-[26px] w-[350px] mt-5">
        Experience our seasonal menu in beautiful country surroundings. Eat the
        freshest produce from the comfort of our farmhouse.{' '}
      </p>
      <Link to="/booking">
        <button className="text-[17px] font-semibold tracking-widest uppercase w-[245px] border-[1px] py-5 px-14 mt-14 hover:text-codGray hover:bg-white">
          Book a table
        </button>
      </Link>
    </section>
  );
}
