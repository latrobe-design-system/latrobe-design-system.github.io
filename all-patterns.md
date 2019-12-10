---
title: "Sketch pattern exports"
status: draft
layout: "sample"
---

{%- for pattern in site.ltu-patterns -%}

    <div class="ds-block">
        {%- if pattern.url contains "ltu-patterns/packages/accordion" -%}
            {%- assign sketch = ' data-sketch-symbol="' | append: pattern.url | remove: '/ltu-patterns/packages/' | remove: '/src/html' | remove: '.html' | append: '">' -%}
            
            {{ pattern.content | replace_first: '>', sketch }}
        {%- endif -%}

        {%- if pattern.url contains "ltu-patterns/packages/alert/src/html/alert-success/alert-success-with-content.html" -%}
            {%- assign sketch = ' data-sketch-symbol="' | append: pattern.url | remove: '/ltu-patterns/packages/' | remove: '/src/html' | remove: '.html' | append: '">' -%}
            
            {{ pattern.content | replace_first: '>', sketch }}
        {%- endif -%}

        {%- if pattern.url contains "ltu-patterns/packages/alert/src/html/alert-success/alert-success.html" -%}
            {%- assign sketch = ' data-sketch-symbol="' | append: pattern.url | remove: '/ltu-patterns/packages/' | remove: '/src/html' | remove: '.html' | append: '">' -%}
            
            {{ pattern.content | replace_first: '>', sketch }}
        {%- endif -%}

        {%- if pattern.url contains "ltu-patterns/packages/alert/src/html/alert-info/alert-info-with-content.html" -%}
            {%- assign sketch = ' data-sketch-symbol="' | append: pattern.url | remove: '/ltu-patterns/packages/' | remove: '/src/html' | remove: '.html' | append: '">' -%}
            
            {{ pattern.content | replace_first: '>', sketch }}
        {%- endif -%}

        {%- if pattern.url contains "ltu-patterns/packages/alert/src/html/alert-info/alert-info.html" -%}
            {%- assign sketch = ' data-sketch-symbol="' | append: pattern.url | remove: '/ltu-patterns/packages/' | remove: '/src/html' | remove: '.html' | append: '">' -%}
            
            {{ pattern.content | replace_first: '>', sketch }}
        {%- endif -%}

        {%- if pattern.url contains "ltu-patterns/packages/alert/src/html/alert-error/alert-error-with-content.html" -%}
            {%- assign sketch = ' data-sketch-symbol="' | append: pattern.url | remove: '/ltu-patterns/packages/' | remove: '/src/html' | remove: '.html' | append: '">' -%}
            
            {{ pattern.content | replace_first: '>', sketch }}
        {%- endif -%}

        {%- if pattern.url contains "ltu-patterns/packages/alert/src/html/alert-error/alert-error.html" -%}
            {%- assign sketch = ' data-sketch-symbol="' | append: pattern.url | remove: '/ltu-patterns/packages/' | remove: '/src/html' | remove: '.html' | append: '">' -%}
            
            {{ pattern.content | replace_first: '>', sketch }}
        {%- endif -%}

        {%- if pattern.url contains "ltu-patterns/packages/breadcrumb" -%}
            {%- assign sketch = ' data-sketch-symbol="' | append: pattern.url | remove: '/ltu-patterns/packages/' | remove: '/src/html' | remove: '.html' | append: '">' -%}
            
            {{ pattern.content | replace_first: '>', sketch }}
        {%- endif -%}

        {%- if pattern.url contains "ltu-patterns/packages/banner" -%}
            {%- assign sketch = ' data-sketch-symbol="' | append: pattern.url | remove: '/ltu-patterns/packages/' | remove: '/src/html' | remove: '.html' | append: '">' -%}
            
            {{ pattern.content | replace_first: '>', sketch }}
        {%- endif -%}

        {%- if pattern.url contains "ltu-patterns/packages/button" -%}
            {%- assign sketch = ' data-sketch-symbol="' | append: pattern.url | remove: '/ltu-patterns/packages/' | remove: '/src/html' | remove: '.html' | append: '">' -%}
            
            {{ pattern.content | replace_first: '>', sketch }}
        {%- endif -%}

        {%- if pattern.url contains "ltu-patterns/packages/card" -%}
            {%- assign sketch = ' data-sketch-symbol="' | append: pattern.url | remove: '/ltu-patterns/packages/' | remove: '/src/html' | remove: '.html' | append: '">' -%}
            
            {{ pattern.content | replace_first: '>', sketch }}
        {%- endif -%}

        {%- if pattern.url contains "ltu-patterns/packages/callout/src/html/callout-default" -%}
            {%- assign sketch = ' data-sketch-symbol="' | append: pattern.url | remove: '/ltu-patterns/packages/' | remove: '/src/html' | remove: '.html' | append: '">' -%}
            
            {{ pattern.content | replace_first: '>', sketch }}
        {%- endif -%}

        {%- if pattern.url contains "ltu-patterns/packages/core/src/html/colour/primary-colours.html" -%}
            {{ pattern.content }}
        {%- endif -%}

        {%- if pattern.url contains "ltu-patterns/packages/cta/src/html/cta" -%}
            {%- assign sketch = ' data-sketch-symbol="' | append: pattern.url | remove: '/ltu-patterns/packages/' | remove: '/src/html' | remove: '.html' | append: '">' -%}
            
            {{ pattern.content | replace_first: '>', sketch }}
        {%- endif -%}

        {% comment %} {%- if pattern.url contains "ltu-patterns/packages/text/src/html/heading" -%}

            {%- assign heading = pattern.url -%}

            {%- assign sketch = ' data-sketch-text="' | append: pattern.url | remove: '/ltu-patterns/packages/' | remove: '/src/html' | remove: '.html' | append: '">T' -%}
            
            {{ pattern.content | replace: '>T', sketch }}
        {%- endif -%} {% endcomment %}

        {%- if pattern.url contains "ltu-patterns/packages/inputs/src/html/checkbox/checkbox-group-invalid.html" -%}
            {%- assign sketch = ' data-sketch-symbol="' | append: pattern.url | remove: '/ltu-patterns/packages/' | remove: '/src/html' | remove: '.html' | append: '"' -%}
            
            <div class="form-group" {{ sketch }}>
                {{ pattern.content }}
            </div>
        {%- endif -%}

        {%- if pattern.url contains "ltu-patterns/packages/inputs/src/html/checkbox/checkbox-group-valid.html" -%}
            {%- assign sketch = ' data-sketch-symbol="' | append: pattern.url | remove: '/ltu-patterns/packages/' | remove: '/src/html' | remove: '.html' | append: '"' -%}
            
            <div class="form-group" {{ sketch }}>
                {{ pattern.content }}
            </div>
        {%- endif -%}

        {%- if pattern.url contains "ltu-patterns/packages/inputs/src/html/checkbox/checkbox-group.html" -%}
            {%- assign sketch = ' data-sketch-symbol="' | append: pattern.url | remove: '/ltu-patterns/packages/' | remove: '/src/html' | remove: '.html' | append: '"' -%}
            
            <div class="form-group" {{ sketch }}>
                {{ pattern.content }}
            </div>
        {%- endif -%}

        {%- if pattern.url contains "ltu-patterns/packages/inputs/src/html/file" -%}
            {%- assign sketch = ' data-sketch-symbol="' | append: pattern.url | remove: '/ltu-patterns/packages/' | remove: '/src/html' | remove: '.html' | append: '"' -%}
            
            <div class="form-group" {{ sketch }}>
                {{ pattern.content }}
            </div>
        {%- endif -%}

        {%- if pattern.url contains "ltu-patterns/packages/inputs/src/html/radio/radio.html" -%}
            {%- assign sketch = ' data-sketch-symbol="' | append: pattern.url | remove: '/ltu-patterns/packages/' | remove: '/src/html' | remove: '.html' | append: '"' -%}
            
            <div class="form-group" {{ sketch }}>
                {{ pattern.content }}
            </div>
        {%- endif -%}

        {%- if pattern.url contains "ltu-patterns/packages/inputs/src/html/radio/radio-group-invalid.html" -%}
            {%- assign sketch = ' data-sketch-symbol="' | append: pattern.url | remove: '/ltu-patterns/packages/' | remove: '/src/html' | remove: '.html' | append: '"' -%}
            
            <div class="form-group" {{ sketch }}>
                {{ pattern.content }}
            </div>
        {%- endif -%}

        {%- if pattern.url contains "ltu-patterns/packages/inputs/src/html/radio/radio-group-valid.html" -%}
            {%- assign sketch = ' data-sketch-symbol="' | append: pattern.url | remove: '/ltu-patterns/packages/' | remove: '/src/html' | remove: '.html' | append: '"' -%}
            
            <div class="form-group" {{ sketch }}>
                {{ pattern.content }}
            </div>
        {%- endif -%}

        {%- if pattern.url contains "ltu-patterns/packages/inputs/src/html/radio/radio-group.html" -%}
            {%- assign sketch = ' data-sketch-symbol="' | append: pattern.url | remove: '/ltu-patterns/packages/' | remove: '/src/html' | remove: '.html' | append: '"' -%}
            
            <div class="form-group" {{ sketch }}>
                {{ pattern.content }}
            </div>
        {%- endif -%}

        {% comment %} {%- if pattern.url contains "ltu-patterns/packages/inputs/src/html/text-input/date-picker.html" -%}
            {%- assign sketch = ' data-sketch-symbol="' | append: pattern.url | remove: '/ltu-patterns/packages/' | remove: '/src/html' | remove: '.html' | append: '"' -%}
            
            <div class="form-group" {{ sketch }}>
                {{ pattern.content }}
            </div>
        {%- endif -%} {% endcomment %}

        {% comment %} {%- if pattern.url contains "ltu-patterns/packages/inputs/src/html/text-input/different-width-sizes-for-inputs.html" -%}
            {%- assign sketch = ' data-sketch-symbol="' | append: pattern.url | remove: '/ltu-patterns/packages/' | remove: '/src/html' | remove: '.html' | append: '"' -%}
            
            <div class="form-group" {{ sketch }}>
                {{ pattern.content }}
            </div>
        {%- endif -%} {% endcomment %}

        {%- if pattern.url contains "ltu-patterns/packages/inputs/src/html/text-input/disabled-text-input.html" -%}
            {%- assign sketch = ' data-sketch-symbol="' | append: pattern.url | remove: '/ltu-patterns/packages/' | remove: '/src/html' | remove: '.html' | append: '"' -%}
            
            <div class="form-group" {{ sketch }}>
                {{ pattern.content }}
            </div>
        {%- endif -%}

        {%- if pattern.url contains "ltu-patterns/packages/inputs/src/html/text-input/number-input.html" -%}
            {%- assign sketch = ' data-sketch-symbol="' | append: pattern.url | remove: '/ltu-patterns/packages/' | remove: '/src/html' | remove: '.html' | append: '"' -%}
            
            <div class="form-group" {{ sketch }}>
                {{ pattern.content }}
            </div>
        {%- endif -%}

        {%- if pattern.url contains "ltu-patterns/packages/inputs/src/html/text-input/text-input-invalid.html" -%}
            {%- assign sketch = ' data-sketch-symbol="' | append: pattern.url | remove: '/ltu-patterns/packages/' | remove: '/src/html' | remove: '.html' | append: '"' -%}
            
            <div class="form-group" {{ sketch }}>
                {{ pattern.content }}
            </div>
        {%- endif -%}

        {%- if pattern.url contains "ltu-patterns/packages/inputs/src/html/text-input/text-input-required.html" -%}
            {%- assign sketch = ' data-sketch-symbol="' | append: pattern.url | remove: '/ltu-patterns/packages/' | remove: '/src/html' | remove: '.html' | append: '"' -%}
            
            <div class="form-group" {{ sketch }}>
                {{ pattern.content }}
            </div>
        {%- endif -%}

        {%- if pattern.url contains "ltu-patterns/packages/inputs/src/html/text-input/text-input-valid.html" -%}
            {%- assign sketch = ' data-sketch-symbol="' | append: pattern.url | remove: '/ltu-patterns/packages/' | remove: '/src/html' | remove: '.html' | append: '"' -%}
            
            <div class="form-group" {{ sketch }}>
                {{ pattern.content }}
            </div>
        {%- endif -%}

        {%- if pattern.url contains "ltu-patterns/packages/inputs/src/html/text-input/text-input.html" -%}
            {%- assign sketch = ' data-sketch-symbol="' | append: pattern.url | remove: '/ltu-patterns/packages/' | remove: '/src/html' | remove: '.html' | append: '"' -%}
            
            <div class="form-group" {{ sketch }}>
                {{ pattern.content }}
            </div>
        {%- endif -%}

        {%- if pattern.url contains "ltu-patterns/packages/inputs/src/html/text-input/textarea.html" -%}
            {%- assign sketch = ' data-sketch-symbol="' | append: pattern.url | remove: '/ltu-patterns/packages/' | remove: '/src/html' | remove: '.html' | append: '"' -%}
            
            <div class="form-group" {{ sketch }}>
                {{ pattern.content }}
            </div>
        {%- endif -%}

        {%- if pattern.url contains "ltu-patterns/packages/link" -%}
            {%- assign sketch = ' data-sketch-symbol="' | append: pattern.url | remove: '/ltu-patterns/packages/' | remove: '/src/html' | remove: '.html' | append: '">' -%}
            
            {{ pattern.content | replace_first: '>', sketch }}
        {%- endif -%}

        {%- if pattern.url contains "ltu-patterns/packages/loader" -%}
            {%- assign sketch = ' data-sketch-symbol="' | append: pattern.url | remove: '/ltu-patterns/packages/' | remove: '/src/html' | remove: '.html' | append: '">' -%}
            
            {{ pattern.content | replace_first: '>', sketch }}
        {%- endif -%}

        {% comment %} {%- if pattern.url contains "ltu-patterns/packages/logo-showcase" -%}
            {%- assign sketch = ' data-sketch-symbol="' | append: pattern.url | remove: '/ltu-patterns/packages/' | remove: '/src/html' | remove: '.html' | append: '">' -%}
            
            {{ pattern.content | replace_first: '>', sketch }}
        {%- endif -%} {% endcomment %}

        {%- if pattern.url contains "ltu-patterns/packages/map" -%}
            {%- assign sketch = ' data-sketch-symbol="' | append: pattern.url | remove: '/ltu-patterns/packages/' | remove: '/src/html' | remove: '.html' | append: '">' -%}
            
            {{ pattern.content | replace_first: '>', sketch }}
        {%- endif -%}

        {% comment %} {%- if pattern.url contains "ltu-patterns/packages/media" -%}
            {%- assign sketch = ' data-sketch-symbol="' | append: pattern.url | remove: '/ltu-patterns/packages/' | remove: '/src/html' | remove: '.html' | append: '">' -%}
            
            {{ pattern.content | replace_first: '>', sketch }}
        {%- endif -%} {% endcomment %}

        {% comment %} {%- if pattern.url contains "ltu-patterns/packages/modal" -%}
            {%- assign sketch = ' data-sketch-symbol="' | append: pattern.url | remove: '/ltu-patterns/packages/' | remove: '/src/html' | remove: '.html' | append: '">' -%}
            
            {{ pattern.content | replace_first: '>', sketch }}
        {%- endif -%} {% endcomment %}

        {%- if pattern.url contains "ltu-patterns/packages/mosaic" -%}
            {%- assign sketch = ' data-sketch-symbol="' | append: pattern.url | remove: '/ltu-patterns/packages/' | remove: '/src/html' | remove: '.html' | append: '">' -%}
            
            {{ pattern.content | replace_first: '>', sketch }}
        {%- endif -%}

        {%- if pattern.url contains "ltu-patterns/packages/pagination" -%}
            {%- assign sketch = ' data-sketch-symbol="' | append: pattern.url | remove: '/ltu-patterns/packages/' | remove: '/src/html' | remove: '.html' | append: '">' -%}
            
            {{ pattern.content | replace_first: '>', sketch }}
        {%- endif -%}

        {%- if pattern.url contains "ltu-patterns/packages/proofpoint/src/html/proof-points-set.html" -%}
            {%- assign sketch = ' data-sketch-symbol="' | append: pattern.url | remove: '/ltu-patterns/packages/' | remove: '/src/html' | remove: '.html' | append: '">' -%}
            
            {{ pattern.content | replace_first: '>', sketch }}
        {%- endif -%}

        {% comment %} {%- if pattern.url contains "ltu-patterns/packages/select/src/html/disabled.html" -%}
            {%- assign sketch = ' data-sketch-symbol="' | append: pattern.url | remove: '/ltu-patterns/packages/' | remove: '/src/html' | remove: '.html' | append: '">' -%}
            
            {{ pattern.content | replace_first: '>', sketch }}
        {%- endif -%} {% endcomment %}

        {%- if pattern.url contains "ltu-patterns/packages/select/src/html/select-invalid.html" -%}
            {%- assign sketch = ' data-sketch-symbol="' | append: pattern.url | remove: '/ltu-patterns/packages/' | remove: '/src/html' | remove: '.html' | append: '">' -%}
            
            {{ pattern.content | replace_first: '>', sketch }}
        {%- endif -%}

        {%- if pattern.url contains "ltu-patterns/packages/select/src/html/select-valid.html" -%}
            {%- assign sketch = ' data-sketch-symbol="' | append: pattern.url | remove: '/ltu-patterns/packages/' | remove: '/src/html' | remove: '.html' | append: '">' -%}
            
            {{ pattern.content | replace_first: '>', sketch }}
        {%- endif -%}

        {%- if pattern.url contains "ltu-patterns/packages/select/src/html/select.html" -%}
            {%- assign sketch = ' data-sketch-symbol="' | append: pattern.url | remove: '/ltu-patterns/packages/' | remove: '/src/html' | remove: '.html' | append: '">' -%}
            
            {{ pattern.content | replace_first: '>', sketch }}
        {%- endif -%}

        {%- if pattern.url contains "ltu-patterns/packages/step-list/src/html/step-list.html" -%}
            {%- assign sketch = ' data-sketch-symbol="' | append: pattern.url | remove: '/ltu-patterns/packages/' | remove: '/src/html' | remove: '.html' | append: '">' -%}
            
            {{ pattern.content | replace_first: '>', sketch }}
        {%- endif -%}

        {%- if pattern.url contains "ltu-patterns/packages/tab/src/html/tabs-small.html" -%}
            {%- assign sketch = ' data-sketch-symbol="' | append: pattern.url | remove: '/ltu-patterns/packages/' | remove: '/src/html' | remove: '.html' | append: '">' -%}
            
            {{ pattern.content | replace_first: '>', sketch }}
        {%- endif -%}

        {%- if pattern.url contains "ltu-patterns/packages/table/src/html/table-2.html" -%}
            {%- assign sketch = ' data-sketch-symbol="' | append: pattern.url | remove: '/ltu-patterns/packages/' | remove: '/src/html' | remove: '.html' | append: '">' -%}
            
            {{ pattern.content | replace_first: '>', sketch }}
        {%- endif -%}

        {% comment %} {%- if pattern.url contains "ltu-patterns/packages/tags" -%}
            {%- assign sketch = ' data-sketch-symbol="' | append: pattern.url | remove: '/ltu-patterns/packages/' | remove: '/src/html' | remove: '.html' | append: '">' -%}
            
            {{ pattern.content | replace_first: '>', sketch }}
        {%- endif -%} {% endcomment %}
        
        {%- if pattern.url contains "ltu-patterns/packages/testimonial/src/html/testimonial.html" -%}
            {%- assign sketch = ' data-sketch-symbol="' | append: pattern.url | remove: '/ltu-patterns/packages/' | remove: '/src/html' | remove: '.html' | append: '">' -%}
            
            {{ pattern.content | replace_first: '>', sketch }}
        {%- endif -%}

        {%- if pattern.url contains "ltu-patterns/packages/testimonial/src/html/testimonial-set-4.html" -%}
            {%- assign sketch = ' data-sketch-symbol="' | append: pattern.url | remove: '/ltu-patterns/packages/' | remove: '/src/html' | remove: '.html' | append: '">' -%}
            
            {{ pattern.content | replace_first: '>', sketch }}
        {%- endif -%}
    </div>

{%- endfor -%}