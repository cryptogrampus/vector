---
last_modified_on: "2020-03-31"
$schema: "/.meta/.schemas/highlights.json"
title: "Compression Now Available In The Kafka Sink"
description: "Until now, the Vector source only accepted logs, now it accepts metrics as well"
author_github: https://github.com/a-rodin
pr_numbers: [1969]
release: "nightly"
tags: ["type: new feature", "domain: sinks", "sink: kafka"]
---

Compression for Vector's [`kafka` sink][docs.sinks.kafka] is now available.
Before we take credit for this feature, Vector uses
[`librdkafka`][urls.librdkafka] under the hood, and to maintain consistency
we just mapped the appropriate options. In addition, we added a
[new `librdkafka_options`][docs.sinks.kafka#librdkafka_options] that enables
transparent pass-through of [`librdkafka`'s options][urls.lib_rdkafka_config].
