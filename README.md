# Eleventy site with newsletter

This is a project demonstrating how you can use Eleventy and MJML to create HTML email newsletters.

Demo site hosted on Netlify: [11ty-site-with-newsletter.netlify.app](https://11ty-site-with-newsletter.netlify.app)

In this project, we:

- add the `eleventy-plugin-mjml` plugin that allows us to use MJML files as templates and layouts
- add articles as Markdown files in `src/posts`. We add a 'date' and a 'newsletterBlurb' to the frontmatter data.
- add newsletters as Markdown files in `src/newsletters`. We add a 'date' and a `getArticlesFromNumPreviousDays` value. This tells Eleventy how far back it should look for articles. For example, a newsletter with the date `2022-03-31` and `getArticlesFromNumPreviousDays` value of 31 will get articles from all days in March.
- create our newsletter template in `src/includes/newsletter.mjml`

I'm still working out the best way to integrate this with a mail sending API to send the newsletter. I'm looking at Mailjet and Mailgun for this purpose.

## Interesting things to check out

- The custom Nunjucks filter for filtering an array of items based on the date
