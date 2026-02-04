resource "google_compute_backend_service" "default" {
  name                  = var.name
  protocol              = "HTTP"
  port_name             = "http"
  load_balancing_scheme = "EXTERNAL_MANAGED"
  timeout_sec           = 30
  backend {
    group = google_compute_region_network_endpoint_group.default.id
  }
}
