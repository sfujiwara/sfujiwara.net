terraform {
  required_providers {
    google = {
      version = "7.8.0"
    }
  }
}

provider "google" {
  project = var.project
  region  = var.location
}
