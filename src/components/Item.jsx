import divide from '../../public/assets/patterns/pattern-divide.svg';

export default function Item({ item }) {
  return (
    <div className="text-red w-[327px] h-[662px] ">
      <img src={item.image} />
      <img src={divide} />
      <h2>{item.heading}</h2>
      <p>{item.text}</p>
    </div>
  );
}
