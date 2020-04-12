---
last_modified_on: "2020-03-31"
$schema: "/.meta/.schemas/highlights.json"
title: "More Condition Predicates"
author_github: https://github.com/binarylogic
pr_numbers: [1997, 2183, 2198]
release: "nightly"
tags: ["type: enhancement", "domain: testing", "domain: transforms", "transform: filter", "transform: swimlanes"]
---

Vector has a concept "conditions" that are used to qualify events. For example,
this is used in Vector's [unit testing feature][guides.unit-testing],
[`swimlanes` transform][docs.transforms.swimlanes], and
[`filter` transform][docs.transforms.filter]. This change adds new predicates
that enable powerful matching and condition expression. Specifically, the
following predicates were added:

* `begins_with`
* `contains`
* `ends_with`
* `is_log`
* `is_metric`
* `regex`
