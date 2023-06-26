export const calculateReadingTime = (text, averageReadingSpeed = 100) => {
  const words = text.trim().split(/\s+/); // Split text into words
  const wordCount = words.length;
  const readingTime = Math.ceil(wordCount / averageReadingSpeed);
  return readingTime;
};
