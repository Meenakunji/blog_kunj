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
