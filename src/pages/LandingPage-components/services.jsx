import { Link } from "react-router-dom";

const services = [
    { service: "Care & Repair", https: '/' },
    { service: "Book An Appointment", https: '/' },
    { service: "Made-to-Order", https: '/' },
    { service: "Customer Services", https: '/' },
    { service: "Gifting", https: '/' },
    { service: "Warranty", https: '/' },
    { service: "Delivery", https: '/' },
    { service: "Exchange & Return", https: '/' }
];

const ExclusiveServices = () => {
    return (
        <div className="w-full py-4 px-10 border-b border-gray-100">
            <h2 className="font-bold text-[#DFB83B] text-lg mb-5">Exclusive Services</h2>
            <div className="flex justify-between flex-wrap gap-10">
                {services.map((service, index) => (
                    <div key={index}>
                        <Link to={service.https} className="text-sm font-medium text-[#DFB83B] whitespace-nowrap">
                            {service.service}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExclusiveServices;
