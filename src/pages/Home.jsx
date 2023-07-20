import { useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Home/Hero';
import Item from '../components/Home/Item';
import Highlight from '../components/Home/Highlight';
import Event from '../components/Home/Event';

import { itemArr } from '../../data';
import { menuHighlightsArr } from '../../data';
import { eventsArr } from '../../data';

import divide from '../../public/assets/patterns/pattern-divide.svg';
import Footer from '../components/Footer';

const items = itemArr.map(item => <Item item={item} key={item.id} />);
const highlights = menuHighlightsArr.map(highlight => (
  <Highlight highlight={highlight} key={highlight.id} />
));

export default function Home() {
  const [eventsPosition, setEventsPosition] = useState(0);

  return (
    <section className="bg-[#fcfbfb] h-auto">
      <Hero />

      <section className="bg-[#fcfbfb] w-screen h-auto flex flex-col items-center gap-[160px] pb-[120px]">
        {items}
      </section>

      <section className="text-white bg-codGray w-screen h-auto flex flex-col items-center pt-16">
        <div className="text-center w-[327px] flex flex-col items-center">
          <img src={divide} />
          <h2 className="text-[32px] font-semibold tracking-wide mt-9 mb-3">
            A few highlights from our menu
          </h2>
          <p className="font-light leading-[26px] pb-20">
            We cater for all dietary requirements, but here’s a glimpse at some
            of our diner’s favourites. Our menu is revamped every season.
          </p>
        </div>

        <section>{highlights}</section>
      </section>

      <section className="bg-[#fcfbfb] w-screen h-auto flex flex-col items-center mt-20 pb-32">
        <Event
          event={eventsArr[eventsPosition]}
          eventsPosition={eventsPosition}
          setEventsPosition={setEventsPosition}
        />
        <Link to="/booking">
          <button className="text-white bg-codGray text-[17px] font-medium tracking-widest uppercase w-[245px] border-[1px] py-5 px-14 mt-7 hover:text-codGray hover:bg-white">
            Book a table
          </button>
        </Link>
      </section>

      <section className="text-white bg-readyMobile bg-cover h-[328px] flex flex-col justify-center items-center">
        <span className="text-[32px] font-semibold">
          Ready to make a reservation?
        </span>
        <Link to="/booking">
          <button className="text-white text-[17px] font-medium tracking-widest uppercase w-[245px] border-[1px] py-5 px-14 mt-7 hover:text-codGray hover:bg-white">
            Book a table
          </button>
        </Link>
      </section>

      <Footer />
    </section>
  );
}
