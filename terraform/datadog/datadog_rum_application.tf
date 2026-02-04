resource "datadog_rum_application" "sfujiwara_net" {
  name                              = "sfujiwara.net"
  type                              = "browser"
  rum_event_processing_state        = "ALL"
  product_analytics_retention_state = "NONE"
}
