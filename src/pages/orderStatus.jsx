
const OrderStatusReturns = () => {
    const steps = [
        {
            id: 1,
            title: "Request Return",
            description:
                "Enter your order number and email address in the 'Order Status & Returns' section of the sign-in page.",
        },
        {
            id: 2,
            title: "Select Return Option",
            description:
                "Select to return items from your order either for an exchange or refund.",
        },
        {
            id: 3,
            title: "Send your Return",
            description:
                "Carefully package your items and send them back to us, following the guidelines on your returns note.",
        },
        {
            id: 4,
            title: "We’ll be in touch",
            description:
                "We’ll process your refund or ship your exchange once your original order is with us. You’ll receive an email confirmation to keep you updated.",
        },
    ];

    return (
        <div className="bg-white">
            <div className="max-w-5xl mx-auto px-4 py-10 ">
                {/* Order Status & Returns */}
                <div className=" grid grid-cols-1 md:grid-cols-2">
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl font-bold">Order Status & Returns</h2>
                        <p className="text-gray-600 mt-2">
                            View the details and progress of your order, including delivery
                            tracking information.
                        </p>
                        <p className="text-gray-600 mt-2">
                            If you wish to receive a refund or exchange, please book here. <br />
                            <span className="font-semibold">
                                Please note: a Jimmy Choo account is not required to request a
                                return or exchange.
                            </span>
                        </p>
                    </div>

                    <div className="bg-gray-100 p-6 mt-6 rounded-md w-full">
                        <form className="flex flex-col w-full items-center gap-4">
                            <input
                                type="text"
                                placeholder="Order number*"
                                className="w-full px-4 py-2 border rounded-md outline-none"
                                required
                            />
                            <input
                                type="email"
                                placeholder="Email*"
                                className="w-full  px-4 py-2 border rounded-md outline-none"
                                required
                            />
                            <button
                                type="submit"
                                className="w-full md:w-auto px-6 py-2 bg-gray-300 text-gray-500 font-semibold rounded-md cursor-pointer"

                            >
                                CHECK STATUS
                            </button>
                        </form>
                    </div>
                </div>

                <h3 className="text-xl font-bold mt-10 text-center">
                    How Do I Return An Item?
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 h-full justify-between items-center mt-8 relative">
                    {steps.map((step) => (
                        <div
                            key={step.id}
                            className="relative text-center flex flex-col justify-between h-full items-center gap-3">
                            <div className="flex items-center flex-col gap-2">
                                <div className="w-10 h-10 bg-white border-2 border-gray-500 rounded-full flex items-center justify-center font-bold text-lg relative z-20">
                                    {step.id}
                                </div>
                                <h4 className="font-bold">{step.title}</h4>
                            </div>
                            <div className="">
                            
                                <p className="text-gray-600 text-sm">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center">
                <button className="border border-black px-4 py-3 mt-5 hover:text-white hover:bg-black">Read More About Returns</button>
                </div>
            </div>
        </div>
    );
};

export default OrderStatusReturns;
