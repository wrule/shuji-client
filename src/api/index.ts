
export class API {
  private project: string;
  private method: string;
  private pathname: string;
  private search: string;
  private rspBody: any;

  public get Project() {
    return this.project;
  }

  public get Method() {
    return this.method;
  }

  public get PathName() {
    return this.pathname;
  }

  public get Search() {
    return this.search;
  }

  public get RspBody() {
    return this.rspBody;
  }

  public constructor() {
    this.project = '';
    this.method = '';
    this.pathname = '';
    this.search = '';
  }
}
