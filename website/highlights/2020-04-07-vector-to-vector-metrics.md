---
last_modified_on: "2020-03-31"
$schema: "/.meta/.schemas/highlights.json"
title: "The Vector Source Now Accepts Metrics"
author_github: https://github.com/binarylogic
pr_numbers: [2245]
release: "nightly"
tags: ["type: new feature", "domain: sources", "source: vector"]
---

Until recently the [`vector` source][docs.sources.vector] only accepted
[`log` events][docs.data-model.log]. Supporting metrics was blocked by pending
metric data model development, as well as topology improvements.
[PR#2245][urls.pr_2245] removes that limitation enabling you to truly build
observability pipelines that can process both logs and metrics.
