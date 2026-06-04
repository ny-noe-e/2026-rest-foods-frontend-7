import type { MenuData } from "../../tools/menu_Api";
import React, { useEffect } from "react";

export function Menu_Item({
  data,
  currExtended,
  setCurrExtended,
}: {
  data: MenuData;
  currExtended: number | undefined;
  setCurrExtended: React.Dispatch<React.SetStateAction<number | undefined>>;
}) {
  useEffect(() => {
    console.log("printing chefChoise" + data.chefChoice);
    console.log(data.name);
  }, []);
  return (
    <div
      onClick={() => {
        setCurrExtended(data.id);
        console.log("pressed");
      }}
    >
      <h1>{data?.name}</h1>
      {data?.chefChoice && <h2>Chef's Choice</h2>}
      <h4>{data?.description}</h4>
      {currExtended === data.id && (
        <div>
          {/* Booleans converted to text so they actually render on screen */}
          <h5>Gluten Free: {data.glutenFree ? "Yes" : "No"}</h5>
          <h5>Lactose Free: {data.lactoseFree ? "Yes" : "No"}</h5>
          <h5>Vegan: {data.vegan ? "Yes" : "No"}</h5>
          <h5>Vegetarian: {data.vegetarian ? "Yes" : "No"}</h5>
        </div>
      )}
      <h5> {data.price} CHF</h5>
    </div>
  );
}
