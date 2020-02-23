---
## This creates a concatenated js file from all ltu-components for inclusion in the sample pages
layout: blank
---
{% assign pages = site.ltu-components | where: "javascript", true %}
{% for js_file in pages %}{{ js_file.content }}
{% endfor %}
