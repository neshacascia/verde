import divide from '../../public/assets/patterns/pattern-divide.svg';

export default function Item({ item }) {
  return (
    <div className="text-darkBlue text-center w-[327px] h-[662px] flex flex-col items-center -mt-16">
      <img src={item.image} className="shadow-2xl mb-12" />
      <img src={divide} />
      <h2 className="text-[32px] font-bold tracking-wide mt-9 mb-3">
        {item.heading}
      </h2>
      <p className="leading-7">{item.text}</p>
    </div>
  );
}
