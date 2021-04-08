# serverless-aws-cdk-iac
Infrastructure As Code (IaC) using AWS CDK with Typescript to create a complete serverless application

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `npm run test`    perform the jest unit tests
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template


## Services to create

- Subnets (3 subnets)
  - NACL
  - Security Groups

- Application Load Balancer
- ECS Cluster
  - ECS Service
  - Fargate task
- ECR
  - ECR LifeCycle Rules
