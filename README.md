# serverless-aws-cdk-iac
Infrastructure As Code (IaC) using AWS CDK with Typescript to create a complete serverless application

## Services to create
- VPC
  - Internet Gateway
  - CREATED :
  - - CIDR:10.0.0.0/21
  - - 1 public subnet- cidr mask:24
  - - 2 isolated subnets- cidr mask:24

- Subnets (3 subnets)
  - NACL
  - Security Groups
- Application Load Balancer
- ECS Cluster
  - ECS Service
  - Fargate task
- ECR
  - ECR LifeCycle Rules
