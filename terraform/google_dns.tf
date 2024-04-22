resource "google_dns_managed_zone" "sfujiwara_com" {
  name        = "sfujiwara-com"
  dns_name    = "sfujiwara.com."
  description = "DNS zone for sfujiwara.com."
}

resource "google_dns_record_set" "sfujiwara_com" {
  name         = "sfujiwara.com."
  type         = "A"
  ttl          = 300
  managed_zone = google_dns_managed_zone.sfujiwara_com.name
  rrdatas      = [google_compute_global_address.sfujiwara_com.address]
}
