import * as cdk from '@aws-cdk/core';
import * as ec2 from '@aws-cdk/aws-ec2';

export class CdkStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    const vpc = new ec2.Vpc(this, "IAC-VPC", {
      cidr: "10.0.0.0/21",
      natGateways:0,
      subnetConfiguration: [
        {
          subnetType: ec2.SubnetType.PUBLIC,
          name: 'publicSN',
          cidrMask:24,
        },
        {
          subnetType:ec2.SubnetType.ISOLATED,
          name: 'isolatedSN1',
          cidrMask:24,          
          
        },
        {
          subnetType:ec2.SubnetType.ISOLATED,
          name: 'isolatedSN2',
          cidrMask:24,
        }
      ]

    })
  }
}
