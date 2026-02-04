terraform {
  backend "gcs" {
    bucket = "sfujiwara-terraform"
    prefix = "datadog"
  }
}
