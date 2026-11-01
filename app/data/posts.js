const photo = (name) => `https://cdn.devdojo.com/images/may2021/${name}.jpg`;

export const featuredPost = {
  title: "Savory templates. Sweet designs.",
  author: "John Doe",
  date: "2021-04-23",
  minutes: 5,
  image: photo("cupcakes"),
};

export const posts = [
  {
    title: "Creating a future worth living",
    category: "Lifestyle",
    excerpt:
      "Learn the attributes you need to gain in order to build a future and create a life that you are truly happy with.",
    author: "Mary Jane",
    date: "2021-04-17",
    image: photo("fruit"),
  },
  {
    title: "The healthier version of yourself",
    category: "Health",
    excerpt:
      "If you want to excel in life and become a better version of yourself, you'll need to upgrade your life.",
    author: "Fred Jones",
    date: "2021-04-10",
    image: photo("workout"),
  },
  {
    title: "Enjoy the meals of the kings",
    category: "Food",
    excerpt:
      "Take the time to enjoy the life that you've created. It's totally fine to live like kings and eat like royalty.",
    author: "Mike Roberts",
    date: "2021-04-06",
    image: photo("food"),
  },
  {
    title: "Writing for success",
    category: "Motivation",
    excerpt:
      "Writing about your plans for success is extremely helpful for yourself and it will allow you to share your story.",
    author: "Tom Johnson",
    date: "2021-05-25",
    image: photo("books"),
  },
  {
    title: "Simple time management",
    category: "Business",
    excerpt:
      "Managing your time can make the difference between getting ahead in life or staying exactly where you are.",
    author: "Scott Reedman",
    date: "2021-05-18",
    image: photo("clock"),
  },
  {
    title: "The fruits life",
    category: "Nutrition",
    excerpt:
      "Take a moment to enjoy the many fruits of life. Relaxation and a healthy diet can go a long way.",
    author: "Jake Caldwell",
    date: "2021-05-15",
    image: photo("lemons"),
  },
].map((post) => ({ ...post, minutes: 3 }));
