export const calculateReadingTime = (text, averageReadingSpeed = 100) => {
  const words = text.trim().split(/\s+/); // Split text into words
  const wordCount = words.length;
  const readingTime = Math.ceil(wordCount / averageReadingSpeed);
  return readingTime;
};

export const createSlug = (username, title) => {
  const lowercaseTitle = title.toLowerCase();
  const slug = lowercaseTitle
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/[^a-z0-9-]/g, "") // Remove special characters except hyphens
    .replace(/-+/g, "-") // Replace multiple consecutive hyphens with a single hyphen
    .substring(0, 60); // Truncate the slug to a desired length (e.g., 60 characters)

  return `@${username}/${slug}`;
};

export const formatCount = (count) => {
  if (count >= 1000000) {
    return (count / 1000000).toFixed(1) + "M";
  } else if (count >= 1000) {
    return (count / 1000).toFixed(1) + "k";
  }
  return count.toString();
};

// sachin@ezeiatech.com
//Based on child and parent relation do this

export const CategoryBar = [
  {
    name: "New",
    ID: 2048,
    parent: "0",
  },
  {
    name: "Travel Tales",
    ID: 7584,
    parent: "0",
  },
  {
    name: "Travel Themes",
    ID: 334,
    parent: "0",
  },
  {
    name: "Domestic Tales",
    ID: 8887,
    parent: "7584",
  },
  {
    name: "International Tales",
    ID: 8888,
    parent: "7584",
  },
  {
    name: "Honeymoon",
    ID: 340,
    parent: "8888",
  },
  {
    name: "Weekend Getaways",
    ID: 1416,
    parent: "334",
  },
  {
    name: "Holiday",
    ID: 968,
    parent: "334",
  },
  {
    name: "Travelogues",
    ID: 4208,
    parent: "334",
  },
  {
    name: "Shopping & Party",
    ID: 337,
    parent: "334",
  },
  {
    name: "Food & Drink",
    ID: 338,
    parent: "334",
  },
  {
    name: "Adventure",
    ID: 335,
    parent: "338",
  },
  {
    name: "Heritage",
    ID: 339,
    parent: "334",
  },
  {
    name: "Pilgrimage",
    ID: 341,
    parent: "334",
  },
  {
    name: "Art & Festival",
    ID: 336,
    parent: "334",
  },
  {
    name: "Health & Wellness",
    ID: 1418,
    parent: "334",
  },
  {
    name: "Photoscope",
    ID: 1837,
    parent: "1418",
  },
  {
    name: "Travel Tips",
    ID: 331,
    parent: "1418",
  },
  {
    name: "Go International",
    ID: 1544,
    parent: "336",
  },
  {
    name: "Offbeat",
    ID: 1545,
    parent: "0",
  },
  {
    name: "Top Level",
    ID: 0,
    parent: "",
  },
];

export const AboutData = [
  {
    id: 1,
    image: "/images/home/paris.jpg",
    title: "Breakfast - Guest Allowed",
    subTitle:
      "The Ultima Gstaad’s Presidential Suite opens the doors to a unique world of luxury. This veritable 160 m 2 apartment offers a private and convivial space for welcoming your guests, with a large lounge and reception area.",
  },
  {
    id: 2,
    image: "/images/home/paris.jpg",
    title: "Breakfast - Guest Allowed",
    subTitle:
      "The Ultima Gstaad’s Presidential Suite opens the doors to a unique world of luxury. This veritable 160 m 2 apartment offers a private and convivial space for welcoming your guests, with a large lounge and reception area.",
  },
];
