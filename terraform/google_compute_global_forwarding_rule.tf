resource "google_compute_global_forwarding_rule" "default" {
  name                  = var.name
  target                = google_compute_target_https_proxy.default.id
  port_range            = "443"
  ip_address            = google_compute_global_address.default.address
  load_balancing_scheme = "EXTERNAL_MANAGED"
}

resource "google_compute_global_forwarding_rule" "https_redirect" {
  name                  = "${var.name}-https-redirect"
  target                = google_compute_target_http_proxy.https_redirect.id
  port_range            = "80"
  ip_address            = google_compute_global_address.default.address
  load_balancing_scheme = "EXTERNAL_MANAGED"
}
