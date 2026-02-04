resource "google_project_iam_member" "github" {
  for_each = toset([
    "roles/editor",
  ])
  project = var.project
  role    = each.value
  member  = "principalSet://iam.googleapis.com/${google_iam_workload_identity_pool.github.name}/attribute.repository/sfujiwara/${var.domain}"
}
