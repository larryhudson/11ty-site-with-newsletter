---
title: Eleventy site with newsletter
layout: post.njk
---

This is an example project of how you could turn a content site into a HTML email newsletter using Eleventy and MJML.

## Newsletters

{% for newsletter in collections.newsletters %}

- [{{newsletter.data.title}}]({{newsletter.url}})
  {% endfor %}

## Posts

{% for post in collections.posts | reverse %}

- [{{post.data.title}}]({{post.url}})
  {% endfor %}
