import Hero from '../components/Hero';
import Item from '../components/Item';

import { itemArr } from '../../data';

const items = itemArr.map(item => <Item item={item} key={item.id} />);

export default function Home() {
  return (
    <section className="bg-[#fcfbfb] h-screen">
      <Hero />

      <section className="bg-[#fcfbfb] w-screen h-auto flex flex-col items-center gap-[160px]">
        {items}
      </section>
    </section>
  );
}
