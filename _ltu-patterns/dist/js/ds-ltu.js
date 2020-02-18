---
## This creates a js file for inclusion in sample pages
---
{% assign pages = site.ltu-patterns | where: "javascript", true %}
{% for js_file in pages %}{{ js_file.content }}
{% endfor %}
