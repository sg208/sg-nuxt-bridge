// Placeholder quotes for the template; swap in real words from real customers
export const testimonials = [
  {
    quote: "Awesome product! And the customer service is exceptionally good.",
    name: "Jane Placeholder",
    role: "Founder, Example Co.",
  },
  {
    quote:
      "I can't express enough how amazing this service has been for my company.",
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
