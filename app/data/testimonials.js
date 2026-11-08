// Placeholder quotes for the template; swap in real words from real customers
export const testimonials = [
  {
    quote: "Good product, and the support team answers fast.",
    name: "Jane Placeholder",
    role: "Founder, Example Co.",
  },
  {
    quote: "This service has made a real difference to how my company works.",
    name: "Sam Sample",
    role: "Director, Sample Studio",
  },
  {
    quote: "We had our landing page up in an afternoon.",
    name: "Alex Example",
    role: "Product lead, Demo Labs",
  },
].map((item) => ({
  ...item,
  initials: item.name
    .split(" ")
    .map((part) => part[0])
    .join(""),
}));
