# sfujiwara.com

[![GitHub Actions](https://github.com/sfujiwara/sfujiwara/actions/workflows/config.yaml/badge.svg)](https://github.com/sfujiwara/sfujiwara/actions/workflows/config.yaml)

https://sfujiwara.com

## Architecture

```mermaid
graph LR;
    USER(User) --> DNS[Cloud DNS]

    subgraph LB[Load Balancer]
        direction TB
        IP[External IP] --> MAP[URL Map] --> BE[Backend]
    end

    subgraph NEG[Serverless NEG]
        RUN[Cloud Run]
    end

    DNS --> IP
    BE --> NEG
```

## Deployment

### Terraform

```shell
make terraform-apply
```

### Docker Image

```shell
make docker-build
make docker-push
```

### Cloud Run

```shell
make cloud-run-deploy
```

### Memo

- Fix name server settings of registrar (onamae.com)
