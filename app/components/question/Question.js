"use client";
import React, { useEffect, useState } from "react";
import cn from "classnames";
import * as AiIcons from "react-icons/ai";

const Question = ({ item }) => {
  const [isActive, setActive] = useState(false);
  return (
    <div key={item.id} className="Accordion-Item">
      <div className="accordion-title">
        <button
          className={`question-section ${isActive ? "opened" : ""}`}
          onClick={() => setActive(!isActive)}
        >
          <h4 className="question-title">{item.title}</h4>
          {isActive ? <AiIcons.AiOutlineMinus /> : <AiIcons.AiOutlinePlus />}
        </button>
      </div>

      <div className={"accordion-detail " + (isActive ? "opened" : "")}>
        {isActive ? <hr className="line" /> : ""}
        <div
          className="answer"
          dangerouslySetInnerHTML={{ __html: item.desc }}
        ></div>
      </div>
    </div>
  );
};

export default function AccordionList({ data }) {
  return (
    <div className="container">
      <div className="Accordion-List">
        <h3>Sıkça Sorulan Sorular</h3>

        {data?.map((item) => {
          return <Question key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
}
