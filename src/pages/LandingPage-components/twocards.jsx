import { Link } from "react-router-dom";
import card1 from "../../assets/d-hp-box5-jpn.jpg";
// import card2 from "../../assets/d-hp-box6-jpn.jpg";

const cards = [
  {
    image: card1,
    heading: "Explore Our Collection",
    link: "/collection",
    linkText: "Shop Now",
  },
  {
    image: card1,
    heading: "Discover New Arrivals",
    link: "/new-arrivals",
    linkText: "View More",
  },
];

const Twocards = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      {cards.map((card, index) => (
        <div key={index} className={`relative p-1 overflow-hidden group${index === 0 ? 'border' : 'border-none'}`}>
          <img src={card.image} alt={card.heading} className="w-full h-auto" />
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-70 transition-opacity duration-500">
            <h3 className="text-[#DFB83B] text-lg font-semibold mb-2">{card.heading}</h3>
            <Link
              to={card.link}
              className="text-[#DFB83B] border border-white px-4 py-2 transition-transform transform group-hover:scale-110 duration-300"
            >
              {card.linkText}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Twocards;
