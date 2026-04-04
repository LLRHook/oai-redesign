export interface Ticket {
  name: string;
  price: string;
  originalPrice?: string;
  description: string;
  features: string[];
  featured?: boolean;
  ctaText: string;
}

export const tickets: Ticket[] = [
  {
    name: "Student Pass",
    price: "$100",
    description: "Perfect for students looking to learn from industry leaders.",
    features: [
      "Access to all talks",
      "Light refreshments",
      "Networking opportunities",
    ],
    ctaText: "Get Student Pass",
  },
  {
    name: "Volunteer Pass",
    price: "Free",
    description: "Volunteer during the event and get access to talks after your shift.",
    features: [
      "Access to all talks (after shift)",
      "Workshops excluded",
      "No meals included",
      "Use code VOL-2026",
    ],
    ctaText: "Apply to Volunteer",
  },
  {
    name: "Early Bird Access",
    price: "$250",
    originalPrice: "$300",
    description: "Limited early access at an extreme discount. Includes workshops and talks.",
    features: [
      "All conference talks & keynotes",
      "Half-day hands-on workshops",
      "No meals included",
      "Limited availability",
    ],
    ctaText: "Grab Early Bird",
  },
  {
    name: "Full Conference Pass",
    price: "$400",
    originalPrice: "$450",
    description: "The complete experience with everything included.",
    features: [
      "Two days of conference talks",
      "All keynotes & breakout sessions",
      "Meals included",
      "Half-day hands-on workshops",
      "Priority networking access",
    ],
    featured: true,
    ctaText: "Get Full Pass",
  },
];
