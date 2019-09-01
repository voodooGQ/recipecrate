import createError from 'http-errors';

export default class BaseWrapper {
  public service: any;
  protected logger: any;

  // tslint:disable-next-line: no-empty
  constructor(...params: any) { }

  /** Default error return w/ logging */
  protected defaultError(err: any) {
    this.logger.error(err);
    return createError(err);
  }
}
