import type { AxiosResponse, InternalAxiosRequestConfig } from "axios";
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
    const token = localStorage.getItem("JWT") ?? "";
    if (token == "") {
      console.log("no Token");
      return {
        data: [],
        status: 401, // 401 Unauthorized makes sense here since there's no token
        statusText: "Unauthorized",
        headers: {},
        config: {} as InternalAxiosRequestConfig,
      };
    }
    return await Api.get("/reservations", {
      headers: {
        // The 'Bearer ' prefix is standard for JWTs
        Authorization: `Bearer ${token}`,
      },
    });
  },
  getNonPrivateReservations: async (): Promise<
    AxiosResponse<ReservationData[]>
  > => {
    return await Api.get("/reservations/NP");
  },
};
