include config.mk

DOCKER_IMAGE := $(LOCATION)-docker.pkg.dev/$(PROJECT)/docker/$(NAME)


.PHONY: docker-build
docker-build:
	docker build -t $(DOCKER_IMAGE) .

.PHONY: docker-run
docker-run:
	docker run -p 80:80 $(DOCKER_IMAGE)

.PHONY: docker-push
docker-push:
	docker push $(DOCKER_IMAGE)

.PHONY: cloud-run
cloud-run:
	gcloud run deploy $(NAME) \
	  --project $(PROJECT) \
	  --region $(LOCATION) \
	  --image $(DOCKER_IMAGE) \
	  --max-instances 10 \
	  --port 80

.PHONY: cloud-build
cloud-build:
	gcloud builds submit --tag $(DOCKER_IMAGE)

.PHONY: terraform-tfvars
terraform-tfvars:
	touch terraform/terraform.tfvars
	echo hello > terraform/terraform.tfvars
	echo project = \"$(PROJECT)\" > terraform/terraform.tfvars
	echo name = \"$(NAME)\" >> terraform/terraform.tfvars
	echo location = \"$(LOCATION)\" >> terraform/terraform.tfvars
	echo domain = \"$(DOMAIN)\" >> terraform/terraform.tfvars

.PHONY: terraform-init
terraform-init:
	cd terraform && terraform init

.PHONY: terraform-plan
terraform-plan: terraform-tfvars
	cd terraform && terraform plan

.PHONY: terraform-apply
terraform-apply: terraform-tfvars
	cd terraform && terraform apply
