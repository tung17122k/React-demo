/* eslint-disable no-unused-vars */
import React from "react";
import CardItem from "./CardItem";

// image = "https://images.unsplash.com/photo-1719937050814-72892488f741?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   name = "@zndrson",
//   avar = "https://cdn.dribbble.com/userupload/11087035/file/original-d18e5383bf37c6baaf074a8b3c5b5447.png?resize=1024x768",
//   title = "Cosmic Perspective",
//   amount = "12,000 PSL",
//   meta = 256,
const card = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1719937050814-72892488f741?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "@zndrson",
    avar: "https://cdn.dribbble.com/userupload/11087035/file/original-d18e5383bf37c6baaf074a8b3c5b5447.png?resize=1024x768",
    title: "Cosmic Perspective",
    amount: "11,000 PSL",
    meta: 256,
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1719937050814-72892488f741?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "@zndrson",
    avar: "https://cdn.dribbble.com/userupload/11087035/file/original-d18e5383bf37c6baaf074a8b3c5b5447.png?resize=1024x768",
    title: "Cosmic Perspective",
    amount: "13,000 PSL",
    meta: 256,
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1719937050814-72892488f741?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "@zndrson",
    avar: "https://cdn.dribbble.com/userupload/11087035/file/original-d18e5383bf37c6baaf074a8b3c5b5447.png?resize=1024x768",
    title: "Cosmic Perspective",
    amount: "12,000 PSL",
    meta: 256,
  },
];

const CardList = () => {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
      {card.map((item) => (
        <CardItem
          key={item.id}
          image={item.image}
          name={item.name}
          avar={item.avar}
          amount={item.amount}
          meta={item.meta}
          title={item.title}
        />
      ))}
    </div>
  );
};

export default CardList;
