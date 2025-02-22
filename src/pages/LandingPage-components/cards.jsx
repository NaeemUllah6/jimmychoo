import { Link } from "react-router-dom";
import Card1 from "../../assets/d-hp-box2.webp";
import Card2 from "../../assets/d-hp-box3.webp";

const cardItems = [
  { id: 1, image: Card1, title: "Sandals", link: "/" },
  { id: 2, image: Card2, title: "Bags", link: "/" },
  { id: 3, image: Card1, title: "Shoes", link: "/" },
];

const Cards = () => {
  return (
    <div className="py-20 px-5 lg:px-10 max-w-full lg:max-w-[1300px] mx-auto">
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full items-center justify-center">
        {cardItems.map((item) => (
          <div key={item.id} className="p-6">
            <img src={item.image} alt={item.title} />
            <div className="mt-3">
              <Link className="relative text-base font-bold group" to={item.link}>
                {item.title}
                
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-black transition-all duration-300 group-hover:w-0"></span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
