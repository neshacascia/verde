import line from '../../public/assets/patterns/line.svg';

export default function Highlight({ highlight }) {
  return (
    <div className="text-white text-center w-[327px]">
      <img src={highlight.image} className="mb-2" />
      <h2 className="text-2xl font-semibold tracking-wider mt-9 mb-3">
        {highlight.name}
      </h2>
      <p className="font-light leading-7 mb-14">{highlight.description}</p>
      <img src={line} />
    </div>
  );
}
