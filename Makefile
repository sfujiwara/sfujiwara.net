DOCKER_IMAGE := us-central1-docker.pkg.dev/sfujiwara/docker/sfujiwara

docker-build:
	docker build -t $(DOCKER_IMAGE) .

docker-push:
	docker push $(DOCKER_IMAGE)

cloud-run-deploy:
	gcloud config list
