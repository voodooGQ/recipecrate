import { APIGatewayProxyEvent, apiSuccess, wrapApiHandler} from '@sailplane/lambda-utils';
import { Context } from 'aws-lambda';
import { validator } from 'middy/middlewares';
import inputSchema from './schema.json';

async function handle(_event: APIGatewayProxyEvent, _context: Context): Promise<any> {
  return apiSuccess('Success!');
}

export default wrapApiHandler(handle).use(
  validator({ inputSchema }),
);
