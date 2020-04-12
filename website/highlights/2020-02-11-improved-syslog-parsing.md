---
last_modified_on: "2020-03-31"
$schema: "/.meta/.schemas/highlights.json"
title: "Improved Syslog Parsing"
author_github: https://github.com/binarylogic
pr_numbers: [1757]
release: "0.8.0"
tags: ["type: new feature", "domain: sources", "source: syslog"]
---

Anyone that dealth with Syslog knows that the format specification is a "goal".
It's very common for formats to deviate slightly. To account for this we've
updated our Syslog parsing to follow the [RFC 3164][urls.syslog_3164],
[RFC 5424][urls.syslog_5424], and other common formats. With these changes
Vector is very likely to parse a Syslog format, or anything like it. And, as
always, if Vector's [`syslog` source][docs.sources.syslog] fails to parse your
format you can always use the [`socket` source][docs.sources.socket] and the
[`regex_parser` transform][docs.transforms.regex_parser] to roll your own
collection parsing pipeline.
