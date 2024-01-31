import React, { useState } from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ name, icon, url }) => {
  return (
    <Link to={url}>
      <div className="flex flex-col items-center justify-center shadow-lg rounded-3xl cursor-pointer hover:scale-110 h-[230px] w-[190px] gap-8">
        <div className="card-image">
          <img width={80} height={80} src={icon} alt={name} />
        </div>
        <div className="card-text">{name}</div>
      </div>
    </Link>
  );
};
export default ServiceCard;
