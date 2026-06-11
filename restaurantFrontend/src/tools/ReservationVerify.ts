import { Reservation_Api } from "./reservation_Api";
import type { ReservationData } from "./reservation_Api";
export async function Verify_Reservation(
  checkData: ReservationData,
): Promise<boolean> {
  const data = (await Reservation_Api.getNonPrivateReservations()).data;
  const is_Free = data.some((data) => {
    if (checkData.tableId !== data.tableId) {
      return false;
    }
    const Start = new Date(data.reservedFrom).getTime();
    const End = new Date(data.reservedTo).getTime();
    const checkStart = new Date(checkData.reservedFrom).getTime();
    const checkEnd = new Date(checkData.reservedTo).getTime();
    const isOverlapping = checkStart < End && checkEnd > Start;
    return isOverlapping;
  });
  console.log(!is_Free);
  return !is_Free;
}
