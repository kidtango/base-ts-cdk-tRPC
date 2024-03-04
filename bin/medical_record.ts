#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { MedicalRecordStack } from '../lib/medical_record-stack';

const app = new cdk.App();
new MedicalRecordStack(app, 'MedicalRecordStack');
