import React from "react";
import Navbar from "../components/navbar/Navbar";
import interior from "../assets/interior.jpeg";
export default function LandingPage() {
  return (
    <div>
      <Navbar />
      <div className="flex justify-around bg-[#3d405b]">
        <div className="flex flex-col w-2/5">
          <h1>We Help You Make Modern Interior</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis
            accusamus modi asperiores accusantium illo! Nam possimus aliquam
            aspernatur unde ab?
          </p>
        </div>
        <div>
          <img width={200} height={400}src={interior} alt=""  className="interior-img  min-w-[350px] min-h-[350px] rounded-lg"/>
        </div>
      </div>
    </div>
  );
}
