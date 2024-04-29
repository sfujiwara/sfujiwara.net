DOCKER_IMAGE := us-central1-docker.pkg.dev/sfujiwara/docker/sfujiwara
PROJECT := sfujiwara

docker-build:
	docker build -t $(DOCKER_IMAGE) .

docker-run:
	docker run -p 8080:8080 $(DOCKER_IMAGE)

docker-push:
	docker push $(DOCKER_IMAGE)

cloud-run-deploy:
	gcloud run deploy \
	  --project $(PROJECT) \
	  --region us-central1 \
	  --image $(DOCKER_IMAGE) \
	  --max-instances 10 \
	  sfujiwara

cloud-build:
	gcloud builds submit \
	  --project $(PROJECT) \
	  --config cloudbuild.yaml \
	  --region us-central1

terraform-init:
	cd terraform && terraform init

terraform-plan:
	cd terraform && terraform plan

terraform-apply:
	cd terraform && terraform apply

start:
	cd frontend && pnpm run dev
