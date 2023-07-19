import Hero from '../components/Hero';
import Item from '../components/Item';

import { itemArr } from '../../data';

const items = itemArr.map(item => <Item item={item} key={item.id} />);

export default function Home() {
  return (
    <section className="bg-[#F2F2F2] h-screen">
      <Hero />

      <section className="bg-[#F2F2F2] h-full">{items}</section>
    </section>
  );
}
