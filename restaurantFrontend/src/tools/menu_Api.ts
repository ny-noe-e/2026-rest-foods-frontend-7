import type { FilterProps } from "../elements/objects/menuFilter";
import { Api } from "./Api";
export interface MenuData {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  chefChoice: string;
  glutenFree: boolean;
  lactoseFree: boolean;
  vegan: boolean;
  vegetarian: boolean;
}

export const Menu_Api = {
  getMenus: async ({ currfilt }: FilterProps): Promise<MenuData[]> => {
    const veganParam = currfilt.vegan ? "vegan=true&" : "";
    const vegParam = currfilt.vegetarian ? "vegetarian=true&" : "";
    const lactose = currfilt.lactoseFree ? "lactoseFree=true&" : "";
    const gluten = currfilt.glutenFree ? "glutenFree=true" : "";
    const filters = "/menus?" + vegParam + veganParam + lactose + gluten;

    console.log(filters);
    const menu_data = await Api.get(filters);
    return menu_data.data;
  },
};
