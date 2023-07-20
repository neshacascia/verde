export default function Footer() {
  return (
    <footer className="text-white bg-codGray h-auto flex flex-col items-center py-20 px-6">
      <span className="text-5xl font-medium tracking-wide mb-10">dine</span>

      <div className="text-sm font-light uppercase text-center tracking-[2px] leading-[28px] mb-8">
        <p>Marthwaite, Sedbergh</p>
        <p>Cumbria</p>
        <p>+00 44 123 4567</p>
      </div>

      <div className="text-sm font-light uppercase text-center tracking-[2px] leading-[28px]">
        <p>Open Times</p>
        <p>Mon - Fri: 09:00 AM - 10:00 PM</p>
        <p>Sat - Sun: 09:00 AM - 11:30 PM</p>
      </div>
    </footer>
  );
}
