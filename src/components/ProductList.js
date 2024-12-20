import React from "react";

const ProductList = () => {
  const products = [
    {
      id: 1,
      name: "Album + T-shirt Combo",
      price: "₦10,000",
      image: "/images/shirt.png",
      description: "Exclusive Christmas T-shirt with the album.",
    },
    {
      id: 2,
      name: "Album + Hoodie Combo",
      price: "₦15,000",
      image: "/images/hoodie.png",
      description: "Limited-edition hoodie with the album.",
    },
    {
      id: 3,
      name: "Album + Water Bottle",
      price: "₦8,000",
      image: "/images/bottle.png",
      description: "Customized water bottle with the album.",
    },

    {
        id: 4,
        name: "Album + Tote Bag",
        price: "₦8,000",
        image: "/images/bag.png",
        description: "Customized bag with the album",
      },

      {
        id: 5,
        name: "Album + Cap Combo",
        price: "₦8,000",
        image: "/images/caps.png",
        description: "Stylish face cap with the album.",
      },

      {
        id: 6,
        name: "Album + Beanie Combo",
        price: "₦8,000",
        image: "/images/beanie.png",
        description: "Stylish beanie cap with album.",
      },
  ];

  return (
    <section id="products" className="py-10 bg-white">
      <div className="container mx-auto p-4">
        <h3 className="text-2xl font-bold text-center mb-6">Our Combos</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 m-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg shadow-lg p-4 text-center"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-90 object-cover mb-4"
              />
              <h4 className="text-xl font-semibold mb-2">{product.name}</h4>
              <p className="text-gray-600 mb-2">{product.description}</p>
              <p className="text-red-500 font-bold mb-4">{product.price}</p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeiW43PxcA70AwXjdcI5nDCejSHSNCwQsOrfZ4BbUnFZgcaqQ/viewform?vc=0&c=0&w=1&flr=0"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Order Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
