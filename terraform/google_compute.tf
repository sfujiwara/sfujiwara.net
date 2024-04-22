# Global IP Adress
resource "google_compute_global_address" "sfujiwara_com" {
  name = "sfujiwara-com"
}

# SSL Certificate
resource "google_compute_managed_ssl_certificate" "sfujiwara_com" {
  provider = google
  name     = "sfujiwara-com"

  managed {
    domains = ["sfujiwara.com"]
  }
}

# NEG (Network Endpoint Group)
resource "google_compute_region_network_endpoint_group" "sfujiwara_com" {
  name                  = "sfujiwara-com"
  region                = "us-central1"
  network_endpoint_type = "SERVERLESS"
  cloud_run {
    service = google_cloud_run_service.sfujiwara.name
  }
}

# Backend Service
resource "google_compute_backend_service" "sfujiwara_com" {
  name                  = "sfujiwara-com"
  protocol              = "HTTP"
  port_name             = "http"
  load_balancing_scheme = "EXTERNAL_MANAGED"
  timeout_sec           = 30
  backend {
    group = google_compute_region_network_endpoint_group.sfujiwara_com.id
  }
}

# URL Map (Load Balancer)
resource "google_compute_url_map" "sfujiwara_com" {
  name            = "sfujiwara-com"
  default_service = google_compute_backend_service.sfujiwara_com.id
}

resource "google_compute_target_https_proxy" "sfujiwara_com" {
  name    = "sfujiwara-com"
  url_map = google_compute_url_map.sfujiwara_com.id
  ssl_certificates = [
    google_compute_managed_ssl_certificate.sfujiwara_com.id
  ]
}

resource "google_compute_global_forwarding_rule" "sfujiwara_com" {
  name                  = "sfujiwara-com"
  target                = google_compute_target_https_proxy.sfujiwara_com.id
  port_range            = "443"
  ip_address            = google_compute_global_address.sfujiwara_com.address
  load_balancing_scheme = "EXTERNAL_MANAGED"
}
