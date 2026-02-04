resource "google_compute_target_http_proxy" "https_redirect" {
  name    = "${var.name}-http-proxy"
  url_map = google_compute_url_map.https_redirect.id
}
