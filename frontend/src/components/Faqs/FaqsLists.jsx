import React from "react";
import { faqs } from "../../assets/data/faqs";
import FaqItems from "./FaqItems";

const FaqsLists = () => {
  return (
    <ul className="mt-[38px]">
      {faqs.map((item, index) => (
        <FaqItems key={index} item={item} />
      ))}
    </ul>
  );
};

export default FaqsLists;
