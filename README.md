# serverless-aws-cdk-iac
Infrastructure As Code (IaC) using AWS CDK with Typescript to create a complete serverless application.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `npm run test`    perform the jest unit tests
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template

Use the Config file to manage the dynamic values

## Resources Included in Stack

- VPC
  - Subnets x 3
    - Private
    - Public
- ECR
  - ECR Lifecycle Rules
- ECS
  - Task Definition
  - Service
- Application Load Balancer
  - Listner


## Services to Create

- Security Groups
- Fargate task
