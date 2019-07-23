/**
 * Test Setup file.
 *
 * Run `mocha` with the `--file` flag and specify this file to preload global defaults for the test
 * suite.
 *
 * Note: `package.json` is already setup to execute this through the `npm run test` script
 */
import chai from 'chai';
import sinonChai from 'sinon-chai';

chai.use(sinonChai);

export default chai;
