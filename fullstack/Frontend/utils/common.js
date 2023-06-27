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
