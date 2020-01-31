---
---
{% assign pages = site.ltu-patterns | where: "javascript", true %}
{% for js_file in pages %}{{ js_file.content }}
{% endfor %}
