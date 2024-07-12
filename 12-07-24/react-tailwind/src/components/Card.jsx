import React from "react";
import squareImg from "../assets/image-equilibrium.jpg";
import IconEth from "./IconEth";
import IconClock from "./IconClock";

function Card() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-950">
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-blue-950 text-white">
        <img className="w-full" src={squareImg} alt="3D square" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Equilibrium #3429</div>
          <p className="text-base text-gray-500">
            Our Equilibrium collection promotes balance and calm
          </p>
        </div>
        <div className="flex justify-between px-6 pt-4 pb-2">
          <div className="flex gap-1  rounded-full px-3 py-1 text-sm font-semibold text-cyan-400 mr-2 mb-2">
            <IconEth />
            0.041 ETH
          </div>

          <div className="flex gap-1 rounded-full px-3 py-1 text-sm font-semibold text-blue-500 mr-2 mb-2">
            <IconClock />3 days left
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
