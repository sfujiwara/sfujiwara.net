resource "google_storage_bucket_iam_member" "default" {
  bucket = google_storage_bucket.public.name
  role   = "roles/storage.objectViewer"
  member = "allUsers"
}
