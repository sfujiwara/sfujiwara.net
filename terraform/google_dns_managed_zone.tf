resource "google_dns_managed_zone" "example-zone" {
  name        = "sfujiwara-com"
  dns_name    = "sfujiwara.com."
  description = "DNS zone for sfujiwara.com."
}
