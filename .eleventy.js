const { MjmlPlugin } = require("eleventy-plugin-mjml");
const dayjs = require("dayjs");
const isBetween = require("dayjs/plugin/isBetween");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(MjmlPlugin, {
    preprocessWithNunjucks: true,
    nunjucksFilters: {
      filterFromDaysBeforeDate: (items, date, days) => {
        const endDate = dayjs(date);
        const startDate = endDate.subtract(days, "day");

        dayjs.extend(isBetween);

        return items.filter((item) =>
          dayjs(item.data.date).isBetween(endDate, startDate)
        );
      },
    },
  });

  eleventyConfig.addCollection("newsletterArticles", function (collectionApi) {
    return collectionApi.getAll().filter((item) => {
      return "newsletterBlurb" in item.data;
    });
  });

  return {
    dir: {
      input: "src",
      output: "_site",
    },
    markdownTemplateEngine: "njk",
  };
};
