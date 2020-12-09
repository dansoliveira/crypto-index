import axios from 'axios';
import { INetwork, RequestData } from './INetwork';

class AxiosNetwork implements INetwork {
  private api;

  constructor(baseURL: string) {
    this.api = axios.create({
      baseURL,
    });
  }

  get({ url }: RequestData): Promise<any> {
    return this.api.get(url);
  }

  post({ url, body }: RequestData): Promise<any> {
    return this.api.post(url, body);
  }

  patch({ url, body }: RequestData): Promise<any> {
    return this.api.patch(url, body);
  }

  put({ url, body }: RequestData): Promise<any> {
    return this.api.put(url, body);
  }

  delete({ url }: RequestData): Promise<any> {
    return this.api.delete(url);
  }
}

export default AxiosNetwork;
