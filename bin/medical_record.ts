#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { Backend } from '../stacks/backend';
import { ENVIRONMENT } from '@config/index'

const app = new cdk.App();

async function Main() {
  cdk.Tags.of(app).add('app', 'medchart');

  const env = {
    region: ENVIRONMENT.region,
    account: ENVIRONMENT.account,
  }

  new Backend(app, 'App Name Here', { env });

  app.synth();
}

Main().catch(e => {
  console.error(e);
  process.exit(1)
})