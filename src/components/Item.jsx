import divide from '../../public/assets/patterns/pattern-divide.svg';

export default function Item({ item }) {
  console.log(item);
  return (
    <div className="bg-[#F2F2F2] text-red w-full h-[662px] ">
      <img src={item.image} />
      <img src={divide} />
      <h2>{item.heading}</h2>
      <p>{item.text}</p>
    </div>
  );
}
