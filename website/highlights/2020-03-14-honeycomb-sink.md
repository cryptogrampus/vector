---
last_modified_on: "2020-03-19"
title: "New Honeycomb Sink"
author_github: https://github.com/hoverbear
pr_numbers: [1665]
release: "nightly"
tags: ["type: new feature", "domain: sinks", "sink: honeycomb"]
---

For you [Honeycomb][urls.honeycomb] fans we have a new
[`honeycomb` sink][docs.sinks.honeycomb]. Keep an eye on
[PR#1991][urls.pr_1991], which will introduce a new `transaction` transform.
This tranformed is designed to produce "canoncial" events. These are flattened,
wide events that represent an entire transaction, the concept that Honeycomb
is built upon. Vector + Honeycomb = 👯.
