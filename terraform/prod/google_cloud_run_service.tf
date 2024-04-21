resource "google_cloud_run_service" "sfujiwara" {
  name     = "sfujiwara"
  location = "us-central1"

  template {
    spec {
      containers {
        image = "us-central1-docker.pkg.dev/sfujiwara/docker/sfujiwara"
      }
    }
  }

  traffic {
    percent         = 100
    latest_revision = true
  }
}
