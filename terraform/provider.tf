terraform {
  required_providers {
    google = {
      version = "6.14.1"
    }
  }
}

provider "google" {
  project = var.project
  region  = var.location
}
