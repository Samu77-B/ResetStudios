export const SITE = {
  name: "Reset Studios",
  tagline: "Mind & Body",
  title: "Reset Studios | Mind & Body",
  description:
    "Mind, body and nervous system in one place. Fitness classes, workshops, coaching and movement at Reset Studios, North London.",
  email: "Info@resetstudios.co.uk",
  instagram: "https://www.instagram.com/resetstudiosuk",
  instagramHandle: "@resetstudiosuk",
  address: "190 Green Lanes, N13 5UE",
  bookTwoClassesUrl: `mailto:Info@resetstudios.co.uk?subject=Book%20Two%20Classes`,
  bookSingleClassUrl: `mailto:Info@resetstudios.co.uk?subject=Book%20A%20Single%20Class`,
  enquireUrl: `mailto:Info@resetstudios.co.uk?subject=Enquiry`,
} as const;

export const CLASSES = {
  label: "Fitness Classes",
  headline: ["Build Strength", "Burn Fat", "Stress Relief"],
  subline: "Work Hard · Show Up · Reset",
  specs: [
    { value: "All levels", label: "Are Welcome" },
    { value: "1 session", label: "Every Week" },
  ],
  location: SITE.address,
  joinUs: "Supportive group energy",
  expect: [
    "Fat Burning",
    "Full Body Workouts",
    "Strength & Conditioning",
    "Supportive Group Energy",
  ],
  schedule: {
    label: "Saturday Session",
    headline: "Every Saturday from 10.30am",
    venue: "at Broomfield Park, Palmers Green",
    sessionVenue: "Broomfield Park, Palmers Green",
  },
  pricing: { single: "£7", two: "£10" },
} as const;

export const PROCESS = [
  {
    step: "01",
    title: "Settle",
    text: "A grounded welcome and permission to arrive as you are.",
  },
  {
    step: "02",
    title: "Move",
    text: "Gentle mobility, stretch and breathwork for all levels.",
  },
  {
    step: "03",
    title: "Reflect",
    text: "Coaching prompts and journalling to reset your mind.",
  },
  {
    step: "04",
    title: "Integrate",
    text: "Leave with one simple practice for your week.",
  },
] as const;

export const FOUNDERS = [
  {
    name: "Fernanda Goncalves",
    roles: "Founder · Life Coach · Author",
    bio: "Supports women with nervous system regulation, identity, self trust and grounded change.",
    cta: "Explore Coaching",
    href: "/home#coaching",
    image: "/images/Fernanda-Goncalves.png",
  },
  {
    name: "Andrenys Garcia",
    roles: "Founder · Personal Trainer & Movement Coach",
    bio: "Leads movement, breathwork, stretch and strength sessions that feel calm, supportive and accessible.",
    cta: "Explore Movement",
    href: "/home#movement",
    image: "/images/Andrenys-Garcia.png",
  },
] as const;

export const BUSINESSES = [
  {
    title: "Reset for Mums Coaching",
    label: "Fernanda's Business",
    text: "Coaching support created for mothers who want to reconnect with themselves, regulate their nervous system and move through change with more clarity.",
    cta: "Visit Website",
    href: SITE.enquireUrl,
  },
  {
    title: "AG Creative Studios",
    label: "Andrenys's Business",
    text: "Digital media marketing strategies for brands that want thoughtful creative direction, stronger visibility and engaging content.",
    cta: "Visit Website",
    href: SITE.enquireUrl,
  },
] as const;

export const COACHING_PACKAGES = [
  {
    title: "Discovery session",
    text: "A first conversation to explore what support you need.",
  },
  {
    title: "Single session",
    text: "Focused support for one area of life, identity or emotion.",
  },
  {
    title: "5-10 sessions",
    text: "Deeper work across six weeks with continuity.",
  },
  {
    title: "Motherhood reset",
    text: "Tailored support for mothers returning to themselves.",
  },
] as const;

export const OPEN_DAY = {
  /** Override with NEXT_PUBLIC_FORMSPREE_OPEN_DAY if needed. */
  formspreeFormId:
    process.env.NEXT_PUBLIC_FORMSPREE_OPEN_DAY ?? "xqpaoqby",
  dateLabel: "Sunday, 8 November 2026",
  timeLabel: "From 2:00 PM",
  addressLines: [
    "Reset Studios",
    "The I/O Centre",
    "7 Lea Road",
    "Waltham Abbey",
    "EN9 1AS",
  ] as const,
  formHeading:
    "Be the First to Experience Reset Studios. Register Below for Free Access on the Day.",
  goals: [
    { value: "Strength", label: "Strength", icon: "/logos/strength.png" },
    { value: "Fitness", label: "Fitness", icon: "/logos/fitness.png" },
    {
      value: "Rebuilding Routine",
      label: "Rebuilding Routine",
      icon: "/logos/rebuild.png",
    },
    { value: "Weight Loss", label: "Weight Loss", icon: "/logos/weight.png" },
    {
      value: "General Wellbeing",
      label: "General Wellbeing",
      icon: "/logos/general.png",
    },
  ] as const,
  expectations: [
    {
      title: "Free Studio Access",
      text: "Test out the gym floor and brand-new facilities all day long.",
    },
    {
      title: "Meet the Team",
      text: "Get expert advice and answers to your training questions.",
    },
    {
      title: "Exclusive Launch Offers",
      text: "Special founding member discounts available only to those who attend the open day.",
    },
    {
      title: "Complimentary Refreshments",
      text: "Grab a quick drink and chat with the team.",
    },
  ] as const,
} as const;

export const MOVEMENT = [
  {
    letter: "M",
    title: "Package 5 to 10 — Movement & Stretch",
    text: "Improve mobility, recover faster, and support your body through fat loss and training.",
  },
  {
    letter: "P",
    title: "Personal Training",
    text: "Custom 1-on-1 coaching designed to build lean muscle and shred body fat safely.",
  },
  {
    letter: "B",
    title: "Boxing",
    text: "High-intensity conditioning to torch calories, build endurance, and tone up.",
  },
] as const;
