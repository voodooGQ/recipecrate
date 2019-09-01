import { apiFailure, APIGatewayProxyEvent, apiSuccess, wrapApiHandler} from '@sailplane/lambda-utils';
import { Context } from 'aws-lambda';
import { validator } from 'middy/middlewares';
import DynamoDBWrapper from '../../wrappers/dynamo';
import inputSchema from './get.schema.json';

async function handle(event: APIGatewayProxyEvent, _context: Context): Promise<any> {
  const dynamo = new DynamoDBWrapper();
  return await dynamo.getRecipe(event.pathParameters.slug).then(
    (data: any) => apiSuccess(data),
    (err: any) => apiFailure(500, err),
  );
}

export default wrapApiHandler(handle).use(
  validator({ inputSchema }),
);
