resource "google_storage_bucket" "public" {
  name                        = "${var.project}-public"
  location                    = var.location
  force_destroy               = true
  uniform_bucket_level_access = true
}
