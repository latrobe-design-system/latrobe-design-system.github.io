---
title: "Sketch pattern exports"
status: draft
layout: "sample"
---

{%- for pattern in site.ltu-patterns -%}

    <div class="ds-block">
        {%- if pattern.url contains "ltu-patterns/src/accordion" -%}
            {%- assign sketch = ' data-sketch-symbol="' | append: pattern.url | remove: '/ltu-patterns/src/' | remove: '/src/html' | remove: '.html' | append: '">' -%}

            {{ pattern.content | replace_first: '>', sketch }}
        {%- endif -%}

        {%- if pattern.url contains "ltu-patterns/src/alert/snippets/alert-success/alert-success-with-content.html" -%}
            {%- assign sketch = ' data-sketch-symbol="' | append: pattern.url | remove: '/ltu-patterns/src/' | remove: '/src/html' | remove: '.html' | append: '">' -%}

            {{ pattern.content | replace_first: '>', sketch }}
        {%- endif -%}

        {%- if pattern.url contains "ltu-patterns/src/alert/snippets/alert-success/alert-success.html" -%}
            {%- assign sketch = ' data-sketch-symbol="' | append: pattern.url | remove: '/ltu-patterns/src/' | remove: '/src/html' | remove: '.html' | append: '">' -%}

            {{ pattern.content | replace_first: '>', sketch }}
        {%- endif -%}

        {%- if pattern.url contains "ltu-patterns/src/alert/snippets/alert-info/alert-info-with-content.html" -%}
            {%- assign sketch = ' data-sketch-symbol="' | append: pattern.url | remove: '/ltu-patterns/src/' | remove: '/src/html' | remove: '.html' | append: '">' -%}

            {{ pattern.content | replace_first: '>', sketch }}
        {%- endif -%}

        {%- if pattern.url contains "ltu-patterns/src/alert/snippets/alert-info/alert-info.html" -%}
            {%- assign sketch = ' data-sketch-symbol="' | append: pattern.url | remove: '/ltu-patterns/src/' | remove: '/src/html' | remove: '.html' | append: '">' -%}

            {{ pattern.content | replace_first: '>', sketch }}
        {%- endif -%}

        {%- if pattern.url contains "ltu-patterns/src/alert/snippets/alert-error/alert-error-with-content.html" -%}
            {%- assign sketch = ' data-sketch-symbol="' | append: pattern.url | remove: '/ltu-patterns/src/' | remove: '/src/html' | remove: '.html' | append: '">' -%}

            {{ pattern.content | replace_first: '>', sketch }}
        {%- endif -%}

        {%- if pattern.url contains "ltu-patterns/src/alert/snippets/alert-error/alert-error.html" -%}
            {%- assign sketch = ' data-sketch-symbol="' | append: pattern.url | remove: '/ltu-patterns/src/' | remove: '/src/html' | remove: '.html' | append: '">' -%}

            {{ pattern.content | replace_first: '>', sketch }}
        {%- endif -%}

        {%- if pattern.url contains "ltu-patterns/src/breadcrumb" -%}
            {%- assign sketch = ' data-sketch-symbol="' | append: pattern.url | remove: '/ltu-patterns/src/' | remove: '/src/html' | remove: '.html' | append: '">' -%}

            {{ pattern.content | replace_first: '>', sketch }}
        {%- endif -%}

        {%- if pattern.url contains "ltu-patterns/src/banner" -%}
            {%- assign sketch = ' data-sketch-symbol="' | append: pattern.url | remove: '/ltu-patterns/src/' | remove: '/src/html' | remove: '.html' | append: '">' -%}

            {{ pattern.content | replace_first: '>', sketch }}
        {%- endif -%}

        {%- if pattern.url contains "ltu-patterns/src/button" -%}
            {%- assign sketch = ' data-sketch-symbol="' | append: pattern.url | remove: '/ltu-patterns/src/' | remove: '/src/html' | remove: '.html' | append: '">' -%}

            {{ pattern.content | replace_first: '>', sketch }}
        {%- endif -%}

        {%- if pattern.url contains "ltu-patterns/src/card" -%}
            {%- assign sketch = ' data-sketch-symbol="' | append: pattern.url | remove: '/ltu-patterns/src/' | remove: '/src/html' | remove: '.html' | append: '">' -%}

            {{ pattern.content | replace_first: '>', sketch }}
        {%- endif -%}

        {%- if pattern.url contains "ltu-patterns/src/callout/snippets/callout-default" -%}
            {%- assign sketch = ' data-sketch-symbol="' | append: pattern.url | remove: '/ltu-patterns/src/' | remove: '/src/html' | remove: '.html' | append: '">' -%}

            {{ pattern.content | replace_first: '>', sketch }}
        {%- endif -%}

        {%- if pattern.url contains "ltu-patterns/src/core/snippets/colour/primary-colours.html" -%}
            {{ pattern.content }}
        {%- endif -%}

        {%- if pattern.url contains "ltu-patterns/src/cta/snippets/cta" -%}
            {%- assign sketch = ' data-sketch-symbol="' | append: pattern.url | remove: '/ltu-patterns/src/' | remove: '/src/html' | remove: '.html' | append: '">' -%}

            {{ pattern.content | replace_first: '>', sketch }}
        {%- endif -%}

        {% comment %} {%- if pattern.url contains "ltu-patterns/src/text/snippets/heading" -%}

            {%- assign heading = pattern.url -%}

            {%- assign sketch = ' data-sketch-text="' | append: pattern.url | remove: '/ltu-patterns/src/' | remove: '/src/html' | remove: '.html' | append: '">T' -%}

            {{ pattern.content | replace: '>T', sketch }}
        {%- endif -%} {% endcomment %}

        {%- if pattern.url contains "ltu-patterns/src/inputs/snippets/checkbox/checkbox-group-invalid.html" -%}
            {%- assign sketch = ' data-sketch-symbol="' | append: pattern.url | remove: '/ltu-patterns/src/' | remove: '/src/html' | remove: '.html' | append: '"' -%}

            <div class="form-group" {{ sketch }}>
                {{ pattern.content }}
            </div>
        {%- endif -%}

        {%- if pattern.url contains "ltu-patterns/src/inputs/snippets/checkbox/checkbox-group-valid.html" -%}
            {%- assign sketch = ' data-sketch-symbol="' | append: pattern.url | remove: '/ltu-patterns/src/' | remove: '/src/html' | remove: '.html' | append: '"' -%}

            <div class="form-group" {{ sketch }}>
                {{ pattern.content }}
            </div>
        {%- endif -%}

        {%- if pattern.url contains "ltu-patterns/src/inputs/snippets/checkbox/checkbox-group.html" -%}
            {%- assign sketch = ' data-sketch-symbol="' | append: pattern.url | remove: '/ltu-patterns/src/' | remove: '/src/html' | remove: '.html' | append: '"' -%}

            <div class="form-group" {{ sketch }}>
                {{ pattern.content }}
            </div>
        {%- endif -%}

        {%- if pattern.url contains "ltu-patterns/src/inputs/snippets/file" -%}
            {%- assign sketch = ' data-sketch-symbol="' | append: pattern.url | remove: '/ltu-patterns/src/' | remove: '/src/html' | remove: '.html' | append: '"' -%}

            <div class="form-group" {{ sketch }}>
                {{ pattern.content }}
            </div>
        {%- endif -%}

        {%- if pattern.url contains "ltu-patterns/src/inputs/snippets/radio/radio.html" -%}
            {%- assign sketch = ' data-sketch-symbol="' | append: pattern.url | remove: '/ltu-patterns/src/' | remove: '/src/html' | remove: '.html' | append: '"' -%}

            <div class="form-group" {{ sketch }}>
                {{ pattern.content }}
            </div>
        {%- endif -%}

        {%- if pattern.url contains "ltu-patterns/src/inputs/snippets/radio/radio-group-invalid.html" -%}
            {%- assign sketch = ' data-sketch-symbol="' | append: pattern.url | remove: '/ltu-patterns/src/' | remove: '/src/html' | remove: '.html' | append: '"' -%}

            <div class="form-group" {{ sketch }}>
                {{ pattern.content }}
            </div>
        {%- endif -%}

        {%- if pattern.url contains "ltu-patterns/src/inputs/snippets/radio/radio-group-valid.html" -%}
            {%- assign sketch = ' data-sketch-symbol="' | append: pattern.url | remove: '/ltu-patterns/src/' | remove: '/src/html' | remove: '.html' | append: '"' -%}

            <div class="form-group" {{ sketch }}>
                {{ pattern.content }}
            </div>
        {%- endif -%}

        {%- if pattern.url contains "ltu-patterns/src/inputs/snippets/radio/radio-group.html" -%}
            {%- assign sketch = ' data-sketch-symbol="' | append: pattern.url | remove: '/ltu-patterns/src/' | remove: '/src/html' | remove: '.html' | append: '"' -%}

            <div class="form-group" {{ sketch }}>
                {{ pattern.content }}
            </div>
        {%- endif -%}

        {% comment %} {%- if pattern.url contains "ltu-patterns/src/inputs/snippets/text-input/date-picker.html" -%}
            {%- assign sketch = ' data-sketch-symbol="' | append: pattern.url | remove: '/ltu-patterns/src/' | remove: '/src/html' | remove: '.html' | append: '"' -%}

            <div class="form-group" {{ sketch }}>
                {{ pattern.content }}
            </div>
        {%- endif -%} {% endcomment %}

        {% comment %} {%- if pattern.url contains "ltu-patterns/src/inputs/snippets/text-input/different-width-sizes-for-inputs.html" -%}
            {%- assign sketch = ' data-sketch-symbol="' | append: pattern.url | remove: '/ltu-patterns/src/' | remove: '/src/html' | remove: '.html' | append: '"' -%}

            <div class="form-group" {{ sketch }}>
                {{ pattern.content }}
            </div>
        {%- endif -%} {% endcomment %}

        {%- if pattern.url contains "ltu-patterns/src/inputs/snippets/text-input/disabled-text-input.html" -%}
            {%- assign sketch = ' data-sketch-symbol="' | append: pattern.url | remove: '/ltu-patterns/src/' | remove: '/src/html' | remove: '.html' | append: '"' -%}

            <div class="form-group" {{ sketch }}>
                {{ pattern.content }}
            </div>
        {%- endif -%}

        {%- if pattern.url contains "ltu-patterns/src/inputs/snippets/text-input/number-input.html" -%}
            {%- assign sketch = ' data-sketch-symbol="' | append: pattern.url | remove: '/ltu-patterns/src/' | remove: '/src/html' | remove: '.html' | append: '"' -%}

            <div class="form-group" {{ sketch }}>
                {{ pattern.content }}
            </div>
        {%- endif -%}

        {%- if pattern.url contains "ltu-patterns/src/inputs/snippets/text-input/text-input-invalid.html" -%}
            {%- assign sketch = ' data-sketch-symbol="' | append: pattern.url | remove: '/ltu-patterns/src/' | remove: '/src/html' | remove: '.html' | append: '"' -%}

            <div class="form-group" {{ sketch }}>
                {{ pattern.content }}
            </div>
        {%- endif -%}

        {%- if pattern.url contains "ltu-patterns/src/inputs/snippets/text-input/text-input-required.html" -%}
            {%- assign sketch = ' data-sketch-symbol="' | append: pattern.url | remove: '/ltu-patterns/src/' | remove: '/src/html' | remove: '.html' | append: '"' -%}

            <div class="form-group" {{ sketch }}>
                {{ pattern.content }}
            </div>
        {%- endif -%}

        {%- if pattern.url contains "ltu-patterns/src/inputs/snippets/text-input/text-input-valid.html" -%}
            {%- assign sketch = ' data-sketch-symbol="' | append: pattern.url | remove: '/ltu-patterns/src/' | remove: '/src/html' | remove: '.html' | append: '"' -%}

            <div class="form-group" {{ sketch }}>
                {{ pattern.content }}
            </div>
        {%- endif -%}

        {%- if pattern.url contains "ltu-patterns/src/inputs/snippets/text-input/text-input.html" -%}
            {%- assign sketch = ' data-sketch-symbol="' | append: pattern.url | remove: '/ltu-patterns/src/' | remove: '/src/html' | remove: '.html' | append: '"' -%}

            <div class="form-group" {{ sketch }}>
                {{ pattern.content }}
            </div>
        {%- endif -%}

        {%- if pattern.url contains "ltu-patterns/src/inputs/snippets/text-input/textarea.html" -%}
            {%- assign sketch = ' data-sketch-symbol="' | append: pattern.url | remove: '/ltu-patterns/src/' | remove: '/src/html' | remove: '.html' | append: '"' -%}

            <div class="form-group" {{ sketch }}>
                {{ pattern.content }}
            </div>
        {%- endif -%}

        {%- if pattern.url contains "ltu-patterns/src/link" -%}
            {%- assign sketch = ' data-sketch-symbol="' | append: pattern.url | remove: '/ltu-patterns/src/' | remove: '/src/html' | remove: '.html' | append: '">' -%}

            {{ pattern.content | replace_first: '>', sketch }}
        {%- endif -%}

        {%- if pattern.url contains "ltu-patterns/src/loader" -%}
            {%- assign sketch = ' data-sketch-symbol="' | append: pattern.url | remove: '/ltu-patterns/src/' | remove: '/src/html' | remove: '.html' | append: '">' -%}

            {{ pattern.content | replace_first: '>', sketch }}
        {%- endif -%}

        {% comment %} {%- if pattern.url contains "ltu-patterns/src/logo-showcase" -%}
            {%- assign sketch = ' data-sketch-symbol="' | append: pattern.url | remove: '/ltu-patterns/src/' | remove: '/src/html' | remove: '.html' | append: '">' -%}

            {{ pattern.content | replace_first: '>', sketch }}
        {%- endif -%} {% endcomment %}

        {%- if pattern.url contains "ltu-patterns/src/map" -%}
            {%- assign sketch = ' data-sketch-symbol="' | append: pattern.url | remove: '/ltu-patterns/src/' | remove: '/src/html' | remove: '.html' | append: '">' -%}

            {{ pattern.content | replace_first: '>', sketch }}
        {%- endif -%}

        {% comment %} {%- if pattern.url contains "ltu-patterns/src/media" -%}
            {%- assign sketch = ' data-sketch-symbol="' | append: pattern.url | remove: '/ltu-patterns/src/' | remove: '/src/html' | remove: '.html' | append: '">' -%}

            {{ pattern.content | replace_first: '>', sketch }}
        {%- endif -%} {% endcomment %}

        {% comment %} {%- if pattern.url contains "ltu-patterns/src/modal" -%}
            {%- assign sketch = ' data-sketch-symbol="' | append: pattern.url | remove: '/ltu-patterns/src/' | remove: '/src/html' | remove: '.html' | append: '">' -%}

            {{ pattern.content | replace_first: '>', sketch }}
        {%- endif -%} {% endcomment %}

        {%- if pattern.url contains "ltu-patterns/src/mosaic" -%}
            {%- assign sketch = ' data-sketch-symbol="' | append: pattern.url | remove: '/ltu-patterns/src/' | remove: '/src/html' | remove: '.html' | append: '">' -%}

            {{ pattern.content | replace_first: '>', sketch }}
        {%- endif -%}

        {%- if pattern.url contains "ltu-patterns/src/pagination" -%}
            {%- assign sketch = ' data-sketch-symbol="' | append: pattern.url | remove: '/ltu-patterns/src/' | remove: '/src/html' | remove: '.html' | append: '">' -%}

            {{ pattern.content | replace_first: '>', sketch }}
        {%- endif -%}

        {%- if pattern.url contains "ltu-patterns/src/proofpoint/snippets/proof-points-set.html" -%}
            {%- assign sketch = ' data-sketch-symbol="' | append: pattern.url | remove: '/ltu-patterns/src/' | remove: '/src/html' | remove: '.html' | append: '">' -%}

            {{ pattern.content | replace_first: '>', sketch }}
        {%- endif -%}

        {% comment %} {%- if pattern.url contains "ltu-patterns/src/select/snippets/disabled.html" -%}
            {%- assign sketch = ' data-sketch-symbol="' | append: pattern.url | remove: '/ltu-patterns/src/' | remove: '/src/html' | remove: '.html' | append: '">' -%}

            {{ pattern.content | replace_first: '>', sketch }}
        {%- endif -%} {% endcomment %}

        {%- if pattern.url contains "ltu-patterns/src/select/snippets/select-invalid.html" -%}
            {%- assign sketch = ' data-sketch-symbol="' | append: pattern.url | remove: '/ltu-patterns/src/' | remove: '/src/html' | remove: '.html' | append: '">' -%}

            {{ pattern.content | replace_first: '>', sketch }}
        {%- endif -%}

        {%- if pattern.url contains "ltu-patterns/src/select/snippets/select-valid.html" -%}
            {%- assign sketch = ' data-sketch-symbol="' | append: pattern.url | remove: '/ltu-patterns/src/' | remove: '/src/html' | remove: '.html' | append: '">' -%}

            {{ pattern.content | replace_first: '>', sketch }}
        {%- endif -%}

        {%- if pattern.url contains "ltu-patterns/src/select/snippets/select.html" -%}
            {%- assign sketch = ' data-sketch-symbol="' | append: pattern.url | remove: '/ltu-patterns/src/' | remove: '/src/html' | remove: '.html' | append: '">' -%}

            {{ pattern.content | replace_first: '>', sketch }}
        {%- endif -%}

        {%- if pattern.url contains "ltu-patterns/src/step-list/snippets/step-list.html" -%}
            {%- assign sketch = ' data-sketch-symbol="' | append: pattern.url | remove: '/ltu-patterns/src/' | remove: '/src/html' | remove: '.html' | append: '">' -%}

            {{ pattern.content | replace_first: '>', sketch }}
        {%- endif -%}

        {%- if pattern.url contains "ltu-patterns/src/tab/snippets/tabs-small.html" -%}
            {%- assign sketch = ' data-sketch-symbol="' | append: pattern.url | remove: '/ltu-patterns/src/' | remove: '/src/html' | remove: '.html' | append: '">' -%}

            {{ pattern.content | replace_first: '>', sketch }}
        {%- endif -%}

        {%- if pattern.url contains "ltu-patterns/src/table/snippets/table-2.html" -%}
            {%- assign sketch = ' data-sketch-symbol="' | append: pattern.url | remove: '/ltu-patterns/src/' | remove: '/src/html' | remove: '.html' | append: '">' -%}

            {{ pattern.content | replace_first: '>', sketch }}
        {%- endif -%}

        {% comment %} {%- if pattern.url contains "ltu-patterns/src/tags" -%}
            {%- assign sketch = ' data-sketch-symbol="' | append: pattern.url | remove: '/ltu-patterns/src/' | remove: '/src/html' | remove: '.html' | append: '">' -%}

            {{ pattern.content | replace_first: '>', sketch }}
        {%- endif -%} {% endcomment %}

        {%- if pattern.url contains "ltu-patterns/src/testimonial/snippets/testimonial.html" -%}
            {%- assign sketch = ' data-sketch-symbol="' | append: pattern.url | remove: '/ltu-patterns/src/' | remove: '/src/html' | remove: '.html' | append: '">' -%}

            {{ pattern.content | replace_first: '>', sketch }}
        {%- endif -%}

        {%- if pattern.url contains "ltu-patterns/src/testimonial/snippets/testimonial-set-4.html" -%}
            {%- assign sketch = ' data-sketch-symbol="' | append: pattern.url | remove: '/ltu-patterns/src/' | remove: '/src/html' | remove: '.html' | append: '">' -%}

            {{ pattern.content | replace_first: '>', sketch }}
        {%- endif -%}
    </div>

{%- endfor -%}
