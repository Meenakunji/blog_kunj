const NextI18Next = require("next-i18next").default;

const NextI18NextInstance = new NextI18Next({
  defaultLanguage: "en",
  otherLanguages: ["hi"],
  localeSubpaths: {
    en: "en",
    hi: "hi",
  },
});

module.exports = NextI18NextInstance;
