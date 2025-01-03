resource "google_compute_url_map" "default" {
  name            = var.name
  default_service = google_compute_backend_service.default.id

    host_rule {
      hosts        = ["*"]
      path_matcher = "path-matcher"
    }

    path_matcher {
      name            = "path-matcher"
      default_service = google_compute_backend_service.default.id
      path_rule {
        paths   = ["/certifications/*"]
        service = google_compute_backend_bucket.default.id
      }
    }
}

resource "google_compute_url_map" "https_redirect" {
  name = "${var.name}-https-redirect"

  default_url_redirect {
    https_redirect         = true
    redirect_response_code = "MOVED_PERMANENTLY_DEFAULT"
    strip_query            = false
  }
}
