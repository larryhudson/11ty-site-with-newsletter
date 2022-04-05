---
title: Eleventy site with newsletter
layout: post.njk
---

This is an example project of how you could turn a content site into a HTML email newsletter using Eleventy and MJML.

You can see how it works in the [GitHub repo](https://github.com/larryhudson/11ty-site-with-newsletter).

## Newsletters

{% for newsletter in collections.newsletters %}

- [{{newsletter.data.title}}]({{newsletter.url}})
  {% endfor %}

## Posts

{% for post in collections.posts | reverse %}

- [{{post.data.title}}]({{post.url}})
  {% endfor %}
