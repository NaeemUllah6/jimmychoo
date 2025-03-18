import { Link } from "react-router-dom";
import Card1 from "../../assets/d-hp-box2.webp";
import Card2 from "../../assets/bags.webp";
import Card3 from "../../assets/sandals2.webp";

const cardItems = [
  { id: 1, image: Card1, title: "Sandals", link: "/" },
  { id: 2, image: Card2, title: "Wardrobe Icons", link: "/" },
  { id: 3, image: Card3, title: "Shoes", link: "/" },
];

const Cards = () => {
  return (
    <div className="py-20 px-5 lg:px-10 max-w-full lg:max-w-[1300px] mx-auto">
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full items-center justify-center gap-5">
        {cardItems.map((item, index) => (
          <div key={item.id} className={` ${index === 0 || index === 2 ? 'bg-white rounded-lg p-4' : "bg-white  rounded-lg p-4"}`}>
            <img src={item.image} alt={item.title} />
            <div className="mt-3">
              <Link className={`relative text-base font-bold group ${index === 1 ? "text-[#DFB83B" : " text-[#DFB83B]" }`} to={item.link}>
                {item.title}
                
                <span className={`absolute left-0 -bottom-1 w-full h-[2px]  transition-all duration-300 group-hover:w-0 ${index === 1 ? "bg-[#DFB83B] !text-white" : "bg-[#DFB83B] !text-[#DFB83B]" }`}></span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
