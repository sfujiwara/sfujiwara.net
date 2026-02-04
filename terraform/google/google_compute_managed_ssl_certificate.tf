resource "google_compute_managed_ssl_certificate" "default" {
  provider = google
  name     = var.name

  managed {
    domains = [var.domain]
  }
}
