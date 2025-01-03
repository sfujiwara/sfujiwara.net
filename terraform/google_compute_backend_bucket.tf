resource "google_compute_backend_bucket" "default" {
  name        = "${var.name}-backend-bucket"
  bucket_name = google_storage_bucket.public.name
  enable_cdn  = true
}
