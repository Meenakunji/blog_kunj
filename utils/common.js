export const calculateReadingTime = (text, averageReadingSpeed = 100) => {
  const words = text.trim().split(/\s+/); // Split text into words
  const wordCount = words.length;
  const readingTime = Math.ceil(wordCount / averageReadingSpeed);
  return readingTime;
};

export const createSlug = (username, title) => {
  if (typeof title !== "string" || !title) {
    // Handle cases where title is not a string or empty
    return ""; // Or handle it based on your requirements
  }
  const lowercaseTitle = title?.toLowerCase();
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

export const reverseSlug = (slug) => {
  if (typeof slug !== "string" || !slug) {
    // Handle cases where slug is not a string or empty
    return ""; // Or handle it based on your requirements
  }

  // Remove leading "/" and "@username/" from the slug
  const titleWithUsername = slug.replace(/^\/?@.*?\//, "");

  // Replace hyphens with spaces and capitalize each word
  const title = titleWithUsername
    .replace(/-/g, " ")
    .replace(/\b\w/g, (match) => match.toUpperCase());

  return title;
};

// utils.js
export function debounce(func, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}


export const resources = [
  {
    title: "React Documentation",
    description: "Comprehensive guide and reference for building React applications.",
    link: "https://reactjs.org/docs/getting-started.html",
  },
  {
    title: "Material-UI",
    description: "The React component library you need to build your UI faster.",
    link: "https://mui.com/",
  },
  {
    title: "Next.js Documentation",
    description: "Learn how to use Next.js to build production-grade React apps.",
    link: "https://nextjs.org/docs",
  },
  {
    title: "JavaScript Info",
    description: "Modern JavaScript tutorial and documentation.",
    link: "https://javascript.info/",
  },
];