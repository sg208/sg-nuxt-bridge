// A fictional sample team for the template; replace with real people
export const team = [
  { name: "Robin Placeholder", role: "Founder" },
  { name: "Casey Sample", role: "Engineering lead" },
  { name: "Morgan Example", role: "Marketing" },
  { name: "Jordan Demo", role: "Designer" },
  { name: "Taylor Mock", role: "Senior developer" },
  { name: "Riley Stub", role: "Web developer" },
  { name: "Quinn Fixture", role: "Sales" },
  { name: "Avery Draft", role: "Partnerships" },
].map((person) => ({
  ...person,
  initials: person.name
    .split(" ")
    .map((part) => part[0])
    .join(""),
}));
