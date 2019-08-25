# terraform_feature_flag_lambda
A simple terraform script to demonstrate feature flag deployments with a lambda script

# Background 
This borrows heavily from [this article](https://learn.hashicorp.com/terraform/aws/lambda-api-gateway).

# To use this

## First, we bring up the basic environment
```bash
terraform init
terraform apply -auto-approve
``` 
## Then, to switch between languages in the output, use the following commands
```bash
terraform apply -var="language=french"
OR
terraform apply -var="language=english"
```
