import type { AxiosResponse } from "axios";
import { Api } from "./Api";
export interface ReservationData {
  numberOfPersons: string;
  phoneNumber: string;
  reservedFrom: string;
  reservedTo: string;
  tableId: string;
  customerName: string;
}

export const Reservation_Api = {
  postReservation: async (Data: ReservationData): Promise<string> => {
    return (await Api.post("/reservations", Data)).data;
  },
  getReservations: async (): Promise<AxiosResponse<ReservationData[]>> => {
    return await Api.get("/reservations");
  },
};
