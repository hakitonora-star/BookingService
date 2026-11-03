import  PrismaClient from "../prisma/client";
import { Prisma } from "../generated/prisma/browser";
/**
 * 
 * it is created by generaate
 * type BookingCreateInput = {
 userId: number;
 hotelId: number;
 createdAt?: string | Date | undefined;
 updatedAt?: string | Date | undefined;
 bookingAmount: number;
 status: BookingStatus;
}
 */

 export async function createBooking(bookingInput:Prisma.BookingCreateInput) {

    const booking=await PrismaClient.booking.create({
        data:bookingInput
    });
    return booking;
    
 }