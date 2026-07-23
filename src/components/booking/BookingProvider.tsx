"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import {
  BookingFormPanel,
  type BookingPackage,
} from "@/components/booking/BookingFormPanel";

export type { BookingPackage };

type BookingContextValue = {
  open: boolean;
  packageType: BookingPackage;
  openBooking: (packageType?: BookingPackage) => void;
  closeBooking: () => void;
};

const BookingContext = createContext<BookingContextValue | null>(null);

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) {
    throw new Error("useBooking must be used within BookingProvider");
  }
  return ctx;
}

type BookingButtonProps = {
  packageType?: BookingPackage;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

export function BookingButton({
  packageType = "two",
  children,
  className,
  onClick,
}: BookingButtonProps) {
  const { openBooking } = useBooking();

  return (
    <button
      type="button"
      onClick={() => {
        onClick?.();
        openBooking(packageType);
      }}
      className={className}
    >
      {children}
    </button>
  );
}

function BookingDrawer({
  open,
  packageType,
  onClose,
}: {
  open: boolean;
  packageType: BookingPackage;
  onClose: () => void;
}) {
  const [mounted, setMounted] = useState(open);
  const [visible, setVisible] = useState(open);

  useEffect(() => {
    if (open) {
      setMounted(true);
      const frame = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(frame);
    }

    setVisible(false);
    const timeout = window.setTimeout(() => setMounted(false), 300);
    return () => window.clearTimeout(timeout);
  }, [open]);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-[80]">
      <button
        type="button"
        aria-label="Close booking form"
        className={`absolute inset-0 bg-ink/70 backdrop-blur-sm transition-opacity duration-300 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      <aside
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-title"
        onClick={(event) => event.stopPropagation()}
        className={`absolute inset-y-0 left-0 z-10 flex h-dvh w-full max-w-md flex-col overflow-hidden border-r border-white/10 bg-ink/88 p-4 shadow-2xl backdrop-blur-md transition-transform duration-300 ease-out md:p-5 ${
          visible ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <BookingFormPanel packageType={packageType} onClose={onClose} />
      </aside>
    </div>
  );
}

export function BookingProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [packageType, setPackageType] = useState<BookingPackage>("two");

  const openBooking = useCallback((pkg: BookingPackage = "two") => {
    setPackageType(pkg);
    setOpen(true);
  }, []);

  const closeBooking = useCallback(() => setOpen(false), []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeBooking();
    };

    if (open) {
      window.addEventListener("keydown", onKeyDown);
    }

    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, closeBooking]);

  return (
    <BookingContext.Provider
      value={{ open, packageType, openBooking, closeBooking }}
    >
      {children}
      <BookingDrawer
        open={open}
        packageType={packageType}
        onClose={closeBooking}
      />
    </BookingContext.Provider>
  );
}
