resource "google_project_iam_member" "editor" {
  project = var.project
  role    = "roles/editor"
  member  = google_service_account.github.member
}
