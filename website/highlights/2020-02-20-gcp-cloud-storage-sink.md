---
last_modified_on: "2020-03-31"
$schema: "/.meta/.schemas/highlights.json"
title: "New GCP Cloud Storage Sink"
author_github: https://github.com/a-rodin
pr_numbers: [1794]
release: "0.8.0"
tags: ["type: new feature", "domain: sinks", "sink: gcp_cloud_storage"]
---

The [GCP Cloud Storage service][urls.gcp_cloud_storage] is reliable, durable,
cheap storage for users on Google's Cloud. It's similar to [Amazon's S3
service][urls.aws_s3]. Vector now supports this via the [`gcp_cloud_storage`
sink][docs.sinks.gcp_cloud_storage].

Notable highlight: Vector allows templated values for the [`key_prefix`
option][docs.sinks.gcp_cloud_storage#key_prefix]. Making it easy to partition
data for efficient querying.
