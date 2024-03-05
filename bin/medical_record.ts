#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { MedicalRecordStack } from '../stacks/medical_record-stack';

const app = new cdk.App();
new MedicalRecordStack(app, 'MedicalRecordStack');

async function main() {
  cdk.Tags.of(app).add('app', 'medchart');

  const env = {
    
  }
}