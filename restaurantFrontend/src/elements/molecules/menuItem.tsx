import React from "react";
import type { MenuData } from "../../tools/menu_Api";

export function Menu_Item({
  data,
  currExtended,
  setCurrExtended,
}: {
  data: MenuData;
  currExtended: number | undefined;
  setCurrExtended: React.Dispatch<React.SetStateAction<number | undefined>>;
}) {
  return (
    <div
      onClick={() => {
        if (currExtended === data.id) {
          setCurrExtended(-1);
        } else {
          setCurrExtended(data.id);
        }
      }}
    >
      <h1>{data?.name}</h1>
      {data?.chefChoice && <h2>Chef's Choice</h2>}
      <h4>{data?.description}</h4>

      <div className="Menu_Details">
        <div
          className={`Menu_Details_Animation ${currExtended === data.id ? "is_open" : ""}`}
        >
          <h5>Gluten Free: {data.glutenFree ? "Yes" : "No"}</h5>
          <h5>Lactose Free: {data.lactoseFree ? "Yes" : "No"}</h5>
          <h5>Vegan: {data.vegan ? "Yes" : "No"}</h5>
          <h5>Vegetarian: {data.vegetarian ? "Yes" : "No"}</h5>
        </div>
        <h5> {data.price} CHF</h5>
      </div>
    </div>
  );
}
