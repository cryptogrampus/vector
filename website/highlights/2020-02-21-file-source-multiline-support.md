---
last_modified_on: "2020-03-31"
$schema: "/.meta/.schemas/highlights.json"
title: "Improved Multiline Support In The File Soruce"
author_github: https://github.com/MOZGIII
pr_numbers: [1852]
release: "0.8.0"
tags: ["type: enhancement", "domain: sources", "source: file"]
---

One of the biggest frustrations we've heard from users in this space is the
inability to merge lines together. Such a simple task can be incredibly
complex and hard. Fear not! We plan to add first-class support for solving
this problem.

In addition to the recently added [automatic merging of Docker
logs][docs.sources.docker#auto_partial_merge], we also added [better multiline
[support][docs.sources.file#multiline] to our [`file` source][docs.sources.file].
These options are very expressive and should solve the vast majority of
multiline merging problems. And if this doesn't do it, you can always fallback
to our [`lua` transform][docs.transforms.lua].
