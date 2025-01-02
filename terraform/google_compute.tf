# Global IP Adress
resource "google_compute_global_address" "default" {
  name = var.name
}

# SSL Certificate
resource "google_compute_managed_ssl_certificate" "default" {
  provider = google
  name     = var.name

  managed {
    domains = [var.domain]
  }
}

# NEG (Network Endpoint Group)
resource "google_compute_region_network_endpoint_group" "default" {
  name                  = var.name
  region                = var.location
  network_endpoint_type = "SERVERLESS"
  cloud_run {
    service = google_cloud_run_v2_service.default.name
  }
}

# Backend Service
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

# URL Map (Load Balancer)
resource "google_compute_url_map" "default" {
  name            = var.name
  default_service = google_compute_backend_service.default.id
}

resource "google_compute_url_map" "https_redirect" {
  name            = "${var.name}-https-redirect"

  default_url_redirect {
    https_redirect         = true
    redirect_response_code = "MOVED_PERMANENTLY_DEFAULT"
    strip_query            = false
  }
}

resource "google_compute_target_https_proxy" "default" {
  name    = "${var.name}-https-proxy"
  url_map = google_compute_url_map.default.id
  ssl_certificates = [
    google_compute_managed_ssl_certificate.default.id
  ]
}

resource "google_compute_target_http_proxy" "https_redirect" {
  name   = "${var.name}-http-proxy"
  url_map          = google_compute_url_map.https_redirect.id
}

resource "google_compute_global_forwarding_rule" "default" {
  name                  = var.name
  target                = google_compute_target_https_proxy.default.id
  port_range            = "443"
  ip_address            = google_compute_global_address.default.address
  load_balancing_scheme = "EXTERNAL_MANAGED"
}

resource "google_compute_global_forwarding_rule" "https_redirect" {
  name   = "${var.name}-https-redirect"
  target = google_compute_target_http_proxy.https_redirect.id
  port_range = "80"
  ip_address = google_compute_global_address.default.address
  load_balancing_scheme = "EXTERNAL_MANAGED"
}
