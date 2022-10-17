import React from "react";
import "./DeliveryCollections.css";

const deliveryItems = [
  {
    id: 1,
    title: "pizza",
    cover:
      "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
  },
];

function DeliveryCollections() {
  return (
    <div className="dilivery-collection">
      <div className="max-width">
        <div className="collection-title">Eat What Makes you Happy</div>
      </div>
    </div>
  );
}

export default DeliveryCollections;
