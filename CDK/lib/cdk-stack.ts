import * as cdk from '@aws-cdk/core';
import * as ec2 from '@aws-cdk/aws-ec2';
import * as ecr from '@aws-cdk/aws-ecr';
import * as ecs from "@aws-cdk/aws-ecs";


import config from '../config.json';

export class CdkStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    const publicSNs = [
      {
        subnetType: ec2.SubnetType.PUBLIC,
        name: 'public1',
        cidrMask:config.SUBNET_CIDR_MASK,      
      },
      {
        subnetType: ec2.SubnetType.PUBLIC,
        name: 'public2',
        cidrMask:config.SUBNET_CIDR_MASK,      
      },
      {
        subnetType: ec2.SubnetType.PUBLIC,
        name: 'public3',
        cidrMask:config.SUBNET_CIDR_MASK,      
      }
    ]
    
    const isolatedSNs = [
      {
        subnetType: ec2.SubnetType.ISOLATED,
        name: 'isolated1',
        cidrMask:config.SUBNET_CIDR_MASK,      
      },
      {
        subnetType: ec2.SubnetType.ISOLATED,
        name: 'isolated2',
        cidrMask:config.SUBNET_CIDR_MASK,      
      },
      {
        subnetType: ec2.SubnetType.ISOLATED,
        name: 'isolated3',
        cidrMask:config.SUBNET_CIDR_MASK,      
      }
    ]
    const vpc = new ec2.Vpc(this, "IAC-VPC", {
      cidr: [config.VPC_IP, config.VPC_CIDR_MASK].join("/"),
      maxAzs:1,
      natGateways:0,
      subnetConfiguration: [...publicSNs, ...isolatedSNs]
    });

    const ecr_repo = new ecr.Repository(this, config.project_name);
  }

  const vpc = new ec2.Vpc(this, "MyVpc", {
        maxAzs: 3 // Default is all AZs in region
      });

      const cluster = new ecs.Cluster(this, "MyCluster", {
        vpc: vpc
      });

      // Create a load-balanced Fargate service and make it public
      new ecs_patterns.ApplicationLoadBalancedFargateService(this, "MyFargateService", {
        cluster: cluster, // Required
        cpu: 512, // Default is 256
        desiredCount: 6, // Default is 1
        taskImageOptions: { image: ecs.ContainerImage.fromRegistry("amazon/amazon-ecs-sample") },
        memoryLimitMiB: 2048, // Default is 512
        publicLoadBalancer: true // Default is false
      });
}
