// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Card from "./Card";
import Loader from "./Loader";
// import Profile from './Profile'

import myCardPicOne from "./assets/photoOne.jpg";
import myCardPicTwo from "./assets/photoTwo.jpg";
import myCardPicThree from "./assets/photothree.png";

import { FaBeer } from "react-icons/fa";

function App() {
  const voter = 24;

  const isloading = true;

  const myData = [
    {
      id: 1,
      name: "Sneakers",
      price: 800,
      description: "Comfortable and stylish sneakers for casual wear.",
      image:
        "https://cdn.pixabay.com/photo/2016/12/10/16/57/shoes-1897708_1280.jpg",
      icon: <FaBeer />,
    },
    {
      id: 2,
      name: "Hiking Boots",
      price: 1200,
      description: "Durable hiking boots for outdoor adventures.",
      image:
        "https://cdn.pixabay.com/photo/2023/10/06/07/14/plant-8297610_1280.jpg",
    },
    {
      id: 3,
      name: "Running Shoes",
      price: 900,
      description: "High-performance running shoes for athletes.",
      image:
        "https://cdn.pixabay.com/photo/2023/10/14/09/20/mountains-8314422_1280.png",
    },
    {
      id: 4,
      name: "Dress Shoes",
      price: 1000,
      description: "Elegant dress shoes for formal occasions.",
      image: myCardPicOne,
    },
    {
      id: 5,
      name: "Sandals",
      price: 500,
      description: "Lightweight and comfortable sandals for the summer.",
      image: myCardPicTwo,
    },
    {
      id: 6,
      name: "Winter Boots",
      price: 1500,
      description:
        "Insulated winter boots to keep your feet warm in cold weather.",
      image: myCardPicThree,
    },
    {
      id: 7,
      name: "Work Boots",
      price: 1100,
      description:
        "Sturdy work boots with steel toe protection for job safety.",
      image: "https://cdn.example.com/workboots1.jpg",
    },
    {
      id: 8,
      name: "Slippers",
      price: 300,
      description: "Cozy and comfortable slippers for indoor relaxation.",
      image: "https://cdn.example.com/slippers1.jpg",
    },
    {
      id: 9,
      name: "Flip-Flops",
      price: 200,
      description: "Casual flip-flops for a day at the beach or by the pool.",
      image: "https://cdn.example.com/flipflops1.jpg",
    },
    {
      id: 10,
      name: "Athletic Shoes",
      price: 1200,
      description: "Versatile athletic shoes for sports and active lifestyles.",
      image: "https://cdn.example.com/athleticshoes1.jpg",
    },
  ];
  // console.log(myData)

  return (
    <>
      {(() => {
        if (voter > 18) {
          console.log("beshi");
        } else {
          console.log("kom");
        }
      })()}

      {(() => {})()}

      <div className="flex justify-center">
        {
          // isloading?<Loader/>:""
          isloading && <Loader />
        }
      </div>
      <div className="flex flex-wrap gap-3">
        {myData.map((eachData, index) => (
          <Card key={index} cardData={eachData} />
        ))}
      </div>
    </>
  );
}

export default App;
