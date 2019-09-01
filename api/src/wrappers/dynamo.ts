import { Logger } from '@sailplane/logger';
import { DynamoDB } from 'aws-sdk';
import { Converter } from 'aws-sdk/clients/dynamodb';
import { CreateAccountStatus } from 'aws-sdk/clients/organizations';
import BaseWrapper from './base';

/**
 * Wrapper for AWS DynamoDB calls.
 *
 * @example
 *   const wrapper = new StepFunctionsWrapper();
 *   wrapper.start(params, callback);
 */
export default class DynamoDBWrapper extends BaseWrapper {

  public service = new DynamoDB();

  private table = process.env.RECIPE_TABLE as string;

  constructor(...params: any) {
    super(params);
    this.logger = new Logger('DynamoDBWrapper');
  }

  public async listRecipes() {
    return this.service.scan({ TableName: this.table }).promise().then(
      (data: any) => data.Items.map((item: any) => Converter.unmarshall(item)),
      (err: any) => { throw this.defaultError(err); },
    );
  }
}
