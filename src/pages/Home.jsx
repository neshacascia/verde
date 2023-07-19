import Hero from '../components/Hero';
import Item from '../components/Item';
import Highlight from '../components/Highlight';

import { itemArr } from '../../data';
import { menuHighlightsArr } from '../../data';

import divide from '../../public/assets/patterns/pattern-divide.svg';

const items = itemArr.map(item => <Item item={item} key={item.id} />);
const highlights = menuHighlightsArr.map(highlight => (
  <Highlight highlight={highlight} key={highlight.id} />
));

export default function Home() {
  return (
    <section className="bg-[#fcfbfb] h-auto">
      <Hero />

      <section className="bg-[#fcfbfb] w-screen h-auto flex flex-col items-center gap-[160px] pb-[120px]">
        {items}
      </section>

      <section className="text-white bg-[#111] w-screen h-auto flex flex-col items-center pt-16">
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
    </section>
  );
}
