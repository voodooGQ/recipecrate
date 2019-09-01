import { Logger } from '@sailplane/logger';
import { DynamoDB } from 'aws-sdk';
import { Converter } from 'aws-sdk/clients/dynamodb';
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

  public async addRecipe(recipe: any) {
    if (!recipe.Title) { throw this.defaultError('A title for the recipe must be supplied'); }
    recipe.Slug = this.slugify(recipe.Title);

    const params = {
      Item: Converter.marshall(recipe),
      TableName: this.table,
    };

    return this.service.putItem(params).promise().then(
      (data: any) => data,
      (err: any) => { throw this.defaultError(err); },
    );
  }

  private slugify(str: string) {
    const a = 'àáäâãåăæąçćčđďèéěėëêęğǵḧìíïîįłḿǹńňñòóöôœøṕŕřßşśšșťțùúüûǘůűūųẃẍÿýźžż·/_,:;';
    const b = 'aaaaaaaaacccddeeeeeeegghiiiiilmnnnnooooooprrsssssttuuuuuuuuuwxyyzzz------';
    const p = new RegExp(a.split('').join('|'), 'g');

    return str.toString().toLowerCase()
      .replace(/\s+/g, '-') // Replace spaces with -
      .replace(p, (c) => b.charAt(a.indexOf(c))) // Replace special characters
      .replace(/&/g, '-and-') // Replace & with 'and'
      .replace(/[^\w\-]+/g, '') // Remove all non-word characters
      .replace(/\-\-+/g, '-') // Replace multiple - with single -
      .replace(/^-+/, '') // Trim - from start of text
      .replace(/-+$/, ''); // Trim - from end of text
  }
}
