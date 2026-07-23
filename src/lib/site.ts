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
  label: "Fitness Classes · Recharge",
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
    next: "Saturday 13th June – 10AM",
    recurring: "Every Saturday",
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
    href: "#coaching",
    image: "/images/img-6385.jpg",
  },
  {
    name: "Andrenys Garcia",
    roles: "Founder · Personal Trainer & Movement Coach",
    bio: "Leads movement, breathwork, stretch and strength sessions that feel calm, supportive and accessible.",
    cta: "Explore Movement",
    href: "#movement",
    image: "/images/img-6386.jpg",
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
    title: "3 session package",
    text: "Deeper work across six weeks with continuity.",
  },
  {
    title: "Motherhood reset",
    text: "Tailored support for mothers returning to themselves.",
  },
] as const;

export const MOVEMENT = [
  {
    letter: "M",
    title: "Movement & Stretch",
    text: "Full body mobility and gentle strength for all levels.",
  },
  {
    letter: "B",
    title: "Breathwork",
    text: "Simple breathing tools to calm and regulate energy.",
  },
  {
    letter: "S",
    title: "Strength Reset",
    text: "Beginner friendly strength and confidence building.",
  },
] as const;
