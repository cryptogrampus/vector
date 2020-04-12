---
last_modified_on: "2020-03-31"
$schema: "/.meta/.schemas/highlights.json"
title: "A ~36% Performance Increase!"
author_github: https://github.com/binarylogic
pr_numbers: [2295, 2296]
release: "nightly"
tags: ["type: performance"]
---

After some hard profiling work, we're pleased to announce that Vector is now
~36% faster. These performance gains are not [component][pages.component]
specific. All Vector users should see performance improvements.

<!--truncate-->

The improvements relate to our [data model][docs.data-model].
[PR#2295][urls.pr_2295] switch our event data from `atom`s to `string`s, netting
a ~8% performance increase, and [PR#2296][urls.pr_2296] improved how Vector
parses user provide fields paths (our
[field path notation][docs.field-path-notation]). These changes come on the
heels of a variety of testing and reliability work we've been performing to
prepare for 1.0. We plan to cover all of this in a more in-depth
[blog][pages.blog] post. Stay tuned!
