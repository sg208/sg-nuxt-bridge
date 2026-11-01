const avatar = (id) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=facearea&facepad=4&w=128&h=128&q=60`;

export const testimonials = [
  {
    quote: "Awesome product! And the customer service is exceptionally good.",
    name: "Jane Cooper",
    role: "CEO, SomeCompany",
    image: avatar("1494790108377-be9c29b29330"),
  },
  {
    quote:
      "I can't express enough how amazing this service has been for my company.",
    name: "John Doe",
    role: "CEO, SomeCompany",
    image: avatar("1527980965255-d3b416303d12"),
  },
  {
    quote:
      "I can't express enough how amazing this service has been for my company.",
    name: "John Smith",
    role: "CEO, SomeCompany",
    image: avatar("1545167622-3a6ac756afa4"),
  },
];

export const logos = [
  { name: "Disney Plus", src: "disney-plus" },
  { name: "Google", src: "google" },
  { name: "Hubspot", src: "hubspot" },
  { name: "Youtube", src: "youtube" },
  { name: "Slack", src: "slack" },
  { name: "Shopify", src: "shopify" },
].map((logo) => ({
  ...logo,
  src: `https://cdn.devdojo.com/tails/images/${logo.src}.svg`,
}));
