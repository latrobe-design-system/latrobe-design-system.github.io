---
title: "Icons"
---

<ul class="sg-icon-list">
{% for image in site.static_files %}
    {% if image.path contains 'ltu-patterns/assets/css/icons/feather/' %}
        <li>
            <img style="width: 20px; height: 20px; margin: 12px;" src="{{ site.baseurl }}{{ image.path }}" alt="" class="img-thumbnail"><br>
            {{ image.name | remove: ".svg"}}
        </li>
    {% endif %}
{% endfor %}
</ul>

CSS

{% for image in site.static_files %}
    {% if image.path contains 'ltu-patterns/assets/css/icons/feather/' %}
        .icon-{{ image.name | remove: ".svg"}}::after {
            background-image: url({{ image.path | remove: "/ltu-patterns/assets/css/" }});
        }
    {% endif %}
{% endfor %}
