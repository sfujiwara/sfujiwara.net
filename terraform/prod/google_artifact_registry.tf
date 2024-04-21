resource "google_artifact_registry_repository" "docker" {
  project       = var.project
  location      = "us-central1"
  repository_id = "docker"
  format        = "DOCKER"
}
