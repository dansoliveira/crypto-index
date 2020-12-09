export interface RequestData {
  url: string;
  body?: Record<string, unknown>;
}

export interface INetwork {
  get(data: RequestData): Promise<any>;
  post(data: RequestData): Promise<any>;
  patch(data: RequestData): Promise<any>;
  put(data: RequestData): Promise<any>;
  delete(data: RequestData): Promise<any>;
}
