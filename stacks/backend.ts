
import { Duration, Stack, StackProps } from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';

import { Construct } from 'constructs';
import * as cdk from 'aws-cdk-lib';

import { ApiEnv, envToObject } from '@api/environment'
import { API_ENV } from '@config/index'
import { HttpMethod } from 'aws-cdk-lib/aws-lambda'

export class Backend extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    function name(name: string): string {
      return id + '-' + name;
    }

    const apiEnv: ApiEnv = {
      ENVIRONMENT: API_ENV.ENVIRONMENT,
    }

    const apiLambda = new lambda.Function(this, name('lambda-api'), {
      functionName: name('api'),
      code: new lambda.AssetCode('src'),
      handler: 'index.handler',
      runtime: lambda.Runtime.NODEJS_18_X,
      timeout: Duration.seconds(5),
      memorySize: 1024,
      environment: {
        AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
        API_ENV: JSON.stringify(apiEnv),
        NODE_OPTIONS: '--enable-source-maps',
        ...envToObject(apiEnv)
      },
    })

    const apiLambdaUrl = apiLambda.addFunctionUrl({
      authType: lambda.FunctionUrlAuthType.NONE,
      cors: {
        allowedOrigins: ['*'],
        allowedHeaders: ['*'],
        allowedMethods: [HttpMethod.ALL]
      }
    })

    new cdk.CfnOutput(this, 'Lambda API Host', {
      value: apiLambdaUrl.url
    })
  }
}
