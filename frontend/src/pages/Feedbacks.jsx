import React from "react";

import { feedbacks } from "../data/feedbacks.js";

const FeedbackCard = ({ name, feedback }) => {
  return (
    <div className="w-[85vw] h-max shadow-xl p-8 rounded-2xl border-1 border-solid border-black">
      <div className="name text-xl font-bold">{name}</div>
      <div className="feedback">{feedback}</div>
    </div>
  );
};

const Feedbacks = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-11">
      {feedbacks.map((feedback) => (
        <FeedbackCard name={feedback.name} feedback={feedback.feedback} />
      ))}
    </div>
  );
};

export default Feedbacks;
