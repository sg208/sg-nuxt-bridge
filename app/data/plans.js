export const plans = [
  {
    name: "Starter",
    price: 5,
    summary: "Ideal for startups and small companies",
    perks: ["Automated reporting", "Faster processing", "Customizations"],
    isFeatured: false,
  },
  {
    name: "Basic",
    price: 15,
    summary: "Ideal for medium-size businesses to larger businesses",
    perks: [
      "Everything in Starter",
      "100 builds",
      "Progress reports",
      "Premium support",
    ],
    isFeatured: true,
  },
  {
    name: "Plus",
    price: 25,
    summary: "Ideal for larger and enterprise companies",
    perks: [
      "Everything in Basic",
      "Unlimited builds",
      "Advanced analytics",
      "Company evaluations",
    ],
    isFeatured: false,
  },
];
