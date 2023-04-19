import React from "react";
import Shoe from "../assets/shoe4.JPG";


function SplashScreen() {
  return (
    <div className=" background  bg-cover bg-no-repeat h-[100vh]" 
    style={{
        backgroundImage: `url(${Shoe})`,
        backgroundPosition: "center",
        backgroundSize: "contain",
        
      }}>
      <div className="flex flex-col items-center justify-center h-full bg-black bg-opacity-70">
        <h1 className="text-6xl font-bold text-white">Welcome to</h1>
        <h1 className="text-6xl font-bold text-white">Shoe Store</h1>
        <p className="text-6xl font-bold text-white">App</p>
    

      </div>
    </div>
  );
}

export default SplashScreen;
