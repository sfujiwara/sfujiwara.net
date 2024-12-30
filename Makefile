DOCKER_IMAGE := us-central1-docker.pkg.dev/sfujiwara/docker/sfujiwara
PROJECT := sfujiwara

docker-build:
	docker build -t $(DOCKER_IMAGE) .

docker-run:
	docker run -p 80:80 $(DOCKER_IMAGE)

docker-push:
	docker push $(DOCKER_IMAGE)

cloud-run:
	gcloud run deploy sfujiwara \
	  --project $(PROJECT) \
	  --region us-central1 \
	  --image $(DOCKER_IMAGE) \
	  --max-instances 10 \
	  --port 80

.PHONY: cloud-build
cloud-build:
	gcloud builds submit --tag $(DOCKER_IMAGE)

terraform-init:
	cd terraform && terraform init

terraform-plan:
	cd terraform && terraform plan

terraform-apply:
	cd terraform && terraform apply

start:
	cd frontend && pnpm run dev
