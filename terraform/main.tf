terraform {
  required_providers {
    google = {
      version = "6.14.1"
    }
  }

  backend "gcs" {
    bucket = "sfujiwara-terraform"
  }
}

provider "google" {
  project = var.project
  region  = var.location
}
