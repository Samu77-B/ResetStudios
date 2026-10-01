export const RESET_STUDIOS_LD_JSON = {
  "@context": "https://schema.org",
  "@type": ["HealthClub", "SportsActivityLocation"],
  name: "Reset Studios",
  url: "https://www.resetstudios.co.uk",
  description:
    "Boutique fitness and wellbeing studio in Waltham Abbey offering training focused on strength, rebuilding routines, weight loss, and general fitness.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "The I/O Centre, 7 Lea Road",
    addressLocality: "Waltham Abbey",
    postalCode: "EN9 1AS",
    addressCountry: "GB",
  },
  knowsAbout: [
    "Strength Training",
    "Fitness",
    "Rebuilding Routine",
    "Weight Loss",
    "General Wellbeing",
  ],
  event: {
    "@type": "Event",
    name: "Reset Studios Free Open Day",
    startDate: "2026-11-08T14:00:00+00:00",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: "Reset Studios",
      address: {
        "@type": "PostalAddress",
        streetAddress: "The I/O Centre, 7 Lea Road",
        addressLocality: "Waltham Abbey",
        postalCode: "EN9 1AS",
        addressCountry: "GB",
      },
    },
    description:
      "Free open day access pass registration for the launch of Reset Studios in Waltham Abbey.",
  },
} as const;
