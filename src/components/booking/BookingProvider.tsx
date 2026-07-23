"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";
import { CLASSES, SITE } from "@/lib/site";

export type BookingPackage = "two" | "single";

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
  const [selectedPackage, setSelectedPackage] =
    useState<BookingPackage>(packageType);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (open) {
      setMounted(true);
      setSelectedPackage(packageType);
      setSubmitted(false);
      const frame = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(frame);
    }

    setVisible(false);
    const timeout = window.setTimeout(() => setMounted(false), 300);
    return () => window.clearTimeout(timeout);
  }, [open, packageType]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const notes = String(data.get("notes") ?? "").trim();
    const pkg = data.get("package") as BookingPackage;

    const packageLabel =
      pkg === "two"
        ? `Two Classes · ${CLASSES.pricing.two}`
        : `Single Class · ${CLASSES.pricing.single}`;

    const body = [
      "New class booking request",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
      `Class: ${packageLabel}`,
      `Session: ${CLASSES.schedule.next}`,
      `Location: ${CLASSES.location}`,
      notes ? `Notes: ${notes}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    const subject = encodeURIComponent(`Class Booking — ${packageLabel}`);
    const mailBody = encodeURIComponent(body);
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${mailBody}`;
    setSubmitted(true);
  };

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-[80]">
      <button
        type="button"
        aria-label="Close booking form"
        className={`absolute inset-0 bg-ink/60 backdrop-blur-sm transition-opacity duration-300 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      <aside
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-title"
        onClick={(event) => event.stopPropagation()}
        className={`absolute inset-y-0 left-0 z-10 flex w-full max-w-md flex-col bg-bone shadow-2xl transition-transform duration-300 ease-out ${
          visible ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-start justify-between border-b border-ink/10 px-6 py-5">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
              Book a class
            </p>
            <h2
              id="booking-title"
              className="mt-2 font-display text-2xl text-ink"
            >
              Saturday Session
            </h2>
            <p className="mt-1 text-sm text-muted">{CLASSES.schedule.next}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close booking form"
            className="flex h-10 w-10 items-center justify-center border border-ink/15 text-ink transition hover:border-ink hover:bg-ink hover:text-white"
          >
            <span aria-hidden className="text-xl leading-none">
              ×
            </span>
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-1 flex-col overflow-y-auto px-6 py-6"
        >
          <fieldset className="space-y-3">
            <legend className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
              Choose your class
            </legend>
            <label className="flex cursor-pointer items-start gap-3 border border-ink/15 p-4 has-[:checked]:border-ink has-[:checked]:bg-white">
              <input
                type="radio"
                name="package"
                value="two"
                checked={selectedPackage === "two"}
                onChange={() => setSelectedPackage("two")}
                className="mt-1"
              />
              <span>
                <span className="block font-display text-base text-ink">
                  Two Classes · {CLASSES.pricing.two}
                </span>
                <span className="mt-1 block text-sm text-muted">
                  Best value for regular Saturday sessions
                </span>
              </span>
            </label>
            <label className="flex cursor-pointer items-start gap-3 border border-ink/15 p-4 has-[:checked]:border-ink has-[:checked]:bg-white">
              <input
                type="radio"
                name="package"
                value="single"
                checked={selectedPackage === "single"}
                onChange={() => setSelectedPackage("single")}
                className="mt-1"
              />
              <span>
                <span className="block font-display text-base text-ink">
                  Single Class · {CLASSES.pricing.single}
                </span>
                <span className="mt-1 block text-sm text-muted">
                  One Saturday session at {CLASSES.location}
                </span>
              </span>
            </label>
          </fieldset>

          <div className="mt-8 space-y-4">
            <label className="block">
              <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
                Full name
              </span>
              <input
                type="text"
                name="name"
                required
                autoComplete="name"
                className="mt-2 w-full border border-ink/15 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-ink"
              />
            </label>

            <label className="block">
              <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
                Email
              </span>
              <input
                type="email"
                name="email"
                required
                autoComplete="email"
                className="mt-2 w-full border border-ink/15 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-ink"
              />
            </label>

            <label className="block">
              <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
                Phone{" "}
                <span className="normal-case tracking-normal">(optional)</span>
              </span>
              <input
                type="tel"
                name="phone"
                autoComplete="tel"
                className="mt-2 w-full border border-ink/15 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-ink"
              />
            </label>

            <label className="block">
              <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
                Notes{" "}
                <span className="normal-case tracking-normal">(optional)</span>
              </span>
              <textarea
                name="notes"
                rows={3}
                placeholder="Anything we should know before your session?"
                className="mt-2 w-full resize-none border border-ink/15 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-ink"
              />
            </label>
          </div>

          <div className="mt-auto space-y-3 pt-8">
            {submitted ? (
              <p className="rounded-sm border border-lemon bg-lemon/30 px-4 py-3 text-sm text-ink">
                Your email app should open with the booking details. If it
                doesn&apos;t, email us at{" "}
                <a href={`mailto:${SITE.email}`} className="underline">
                  {SITE.email}
                </a>
                .
              </p>
            ) : null}

            <button
              type="submit"
              className="w-full bg-lemon px-6 py-3.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-ink transition hover:bg-lemon-deep"
            >
              Send booking request
            </button>

            <p className="text-center text-xs text-muted">
              {CLASSES.location} · Every Saturday
            </p>
          </div>
        </form>
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
