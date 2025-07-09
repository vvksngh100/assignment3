import React from "react";
import CardComponent from "./CardComponent";
import { useCart } from "../context/CartContext";


export default function DisplayCard(){

  const { addToCart } = useCart();

 const shoes = [
  {
    id: 1,
    title: "Nike Air Jordan 1 Mid",
    price: 130,
    image: "https://res.cloudinary.com/dl39mk9pr/image/upload/v1750574800/cld-sample-5.jpg",
    alt: "Nike Air Jordan 1 Mid white and indigo haze"
  },
  {
    id: 2,
    title: "Nike Air Jordan 1 Low SE",
    price: 130,
    image: "https://res.cloudinary.com/dl39mk9pr/image/upload/v1750574800/cld-sample-5.jpg",
    alt: "Nike Air Jordan 1 Low SE red black white"
  },
  {
    id: 3,
    title: "Nike Air Jordan 1 High G",
    price: 190,
    image: "https://res.cloudinary.com/dl39mk9pr/image/upload/v1750574800/cld-sample-5.jpg",
    alt: "Nike Air Jordan 1 High G black white metallic gold"
  },
  {
    id: 4,
    title: "Nike Air Jordan 1 Mid SE",
    price: 140,
    image: "https://res.cloudinary.com/dl39mk9pr/image/upload/v1750574800/cld-sample-5.jpg",
    alt: "Nike Air Jordan 1 Mid SE multi color"
  },
  {
    id: 5,
    title: "Converse Chuck Taylor All Star High Top",
    price: 65,
    image: "https://res.cloudinary.com/dl39mk9pr/image/upload/v1750574800/cld-sample-5.jpg",
    alt: "Converse Chuck Taylor All Star classic black"
  },
  {
    id: 6,
    title: "Converse Chuck Taylor All Star Low Top",
    price: 60,
    image: "https://res.cloudinary.com/dl39mk9pr/image/upload/v1750574800/cld-sample-5.jpg",
    alt: "Converse Chuck Taylor All Star classic white low top"
  },
  {
    id: 7,
    title: "Nike Air Max 90",
    price: 129.99,
    image: "https://res.cloudinary.com/dl39mk9pr/image/upload/v1750574800/cld-sample-5.jpg",
    alt: "Nike Air Max 90 white grey"
  },
  {
    id: 8,
    title: "Adidas Ultraboost Light",
    price: 180,
    image: "https://res.cloudinary.com/dl39mk9pr/image/upload/v1750574800/cld-sample-5.jpg",
    alt: "Adidas Ultraboost Light white"
  },
  {
    id: 9,
    title: "Puma RS-X Efekt",
    price: 110,
    image: "https://res.cloudinary.com/dl39mk9pr/image/upload/v1750574800/cld-sample-5.jpg",
    alt: "Puma RS-X Efekt white black"
  },
  {
    id: 10,
    title: "New Balance 574 Core",
    price: 89.99,
    image: "https://res.cloudinary.com/dl39mk9pr/image/upload/v1750574800/cld-sample-5.jpg",
    alt: "New Balance 574 grey"
  },
  {
    id: 11,
    title: "Reebok Nano X3",
    price: 140,
    image: "https://res.cloudinary.com/dl39mk9pr/image/upload/v1750574800/cld-sample-5.jpg",
    alt: "Reebok Nano X3 grey"
  },
  {
    id: 12,
    title: "Nike Blazer Mid '77 Vintage",
    price: 100,
    image: "https://res.cloudinary.com/dl39mk9pr/image/upload/v1750574800/cld-sample-5.jpg",
    alt: "Nike Blazer Mid '77 Vintage white"
  },
  {
    id: 13,
    title: "Adidas Stan Smith",
    price: 85,
    image: "https://res.cloudinary.com/dl39mk9pr/image/upload/v1750574800/cld-sample-5.jpg",
    alt: "Adidas Stan Smith white green heel"
  },
  {
    id: 14,
    title: "Puma Suede Classic",
    price: 70,
    image: "https://res.cloudinary.com/dl39mk9pr/image/upload/v1750574800/cld-sample-5.jpg",
    alt: "Puma Suede Classic red"
  },
  {
    id: 15,
    title: "New Balance 990v5",
    price: 185,
    image: "https://res.cloudinary.com/dl39mk9pr/image/upload/v1750574800/cld-sample-5.jpg",
    alt: "New Balance 990v5 grey"
  },
  {
    id: 16,
    title: "Reebok Club C 85",
    price: 75,
    image: "https://res.cloudinary.com/dl39mk9pr/image/upload/v1750574800/cld-sample-5.jpg",
    alt: "Reebok Club C 85 white green"
  },
  {
    id: 17,
    title: "Nike Dunk Low",
    price: 110,
    image: "https://res.cloudinary.com/dl39mk9pr/image/upload/v1750574800/cld-sample-5.jpg",
    alt: "Nike Dunk Low white blue"
  },
  {
    id: 18,
    title: "Adidas Superstar",
    price: 95,
    image: "https://res.cloudinary.com/dl39mk9pr/image/upload/v1750574800/cld-sample-5.jpg",
    alt: "Adidas Superstar white shell toe"
  },
  {
    id: 19,
    title: "Puma Future Rider",
    price: 80,
    image: "https://res.cloudinary.com/dl39mk9pr/image/upload/v1750574800/cld-sample-5.jpg",
    alt: "Puma Future Rider pastel"
  },
  {
    id: 20,
    title: "New Balance 327",
    price: 100,
    image: "https://res.cloudinary.com/dl39mk9pr/image/upload/v1750574800/cld-sample-5.jpg",
    alt: "New Balance 327 white navy"
  },
];


return(
    <div className="container">
      <div className="row">
        {shoes.map(item => (
          <div key={item.id} className="col-6 mb-4">
            <CardComponent 
              image={item.image} 
              alt={item.alt} 
              price={item.price} 
              title={item.title}
              handleClick={() => addToCart(item)}
            />
          </div>
        ))}
      </div>
    </div>
)



}