terraform {
  required_providers {
    google = {
      version = "5.25.0"
    }
  }

  backend "gcs" {
    bucket = "sfujiwara-terraform"
  }
}

provider "google" {
  project = var.project
  region  = "us-central1"
}
