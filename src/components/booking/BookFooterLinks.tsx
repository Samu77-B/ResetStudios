"use client";

import { BookingButton } from "@/components/booking/BookingProvider";

export function BookFooterLinks() {
  return (
    <ul className="mt-5 space-y-3">
      <li>
        <BookingButton className="text-base leading-[1.5] text-white/70 transition hover:text-white">
          Book a class
        </BookingButton>
      </li>
    </ul>
  );
}
