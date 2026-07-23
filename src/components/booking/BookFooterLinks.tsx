"use client";

import { BookingButton } from "@/components/booking/BookingProvider";

export function BookFooterLinks() {
  return (
    <ul className="mt-5 space-y-3">
      <li>
        <BookingButton
          packageType="two"
          className="text-base leading-[1.5] text-white/70 transition hover:text-white"
        >
          Two Classes · £10
        </BookingButton>
      </li>
      <li>
        <BookingButton
          packageType="single"
          className="text-base leading-[1.5] text-white/70 transition hover:text-white"
        >
          Single Class · £7
        </BookingButton>
      </li>
    </ul>
  );
}
