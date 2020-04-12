---
last_modified_on: "2020-03-31"
$schema: "/.meta/.schemas/highlights.json"
title: "New Dedupe Trasnform"
author_github: https://github.com/a-rodin
pr_numbers: [1848]
release: "nightly"
tags: ["type: new feature", "domain: sources", "source: vector"]
---

For certain use cases log deduplication can be a useful tool. Not only does
this promote your data integrity, but it can help protect against upstream
mistakes that accidentally doplicate logs. This mistake can easily double
(or more!) your log volume. To protect against this you can use our new
[`dedupe` transform][docs.transforms.dedupe].
