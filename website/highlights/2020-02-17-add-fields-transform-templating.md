---
last_modified_on: "2020-03-31"
$schema: "/.meta/.schemas/highlights.json"
title: "The Add Fields Transform Supports Templating"
author_github: https://github.com/a-rodin
pr_numbers: [1799]
release: "0.8.0"
tags: ["type: new feature", "domain: transforms", "source: add_fields"]
---

Vector offers a [templating syntax][docs.templating] that you can use to build
dynamic values in your [Vector configuration][docs.configuration] files. This
has now been added to the [`add_fields` transform][docs.transforms.add_fields],
enabling the ability to create fields from other fields values.
