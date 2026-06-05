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
  getMenus: async ({
    currfilt,
    setCurrfilt,
  }: FilterProps): Promise<MenuData[]> => {
    const filters =
      "/menus?vegan=" +
      currfilt.vegan +
      "&vegetarian=" +
      currfilt.vegetarian +
      "&lactoseFree=" +
      currfilt.lactoseFree +
      "&glutenFree=" +
      currfilt.glutenFree;
    console.log(filters);
    const menu_data = await Api.get(filters);
    return menu_data.data;
  },
};
