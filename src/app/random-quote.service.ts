import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RandomQuoteService {
  private readonly apiKey = '688b6d21-c087-4651-8a38-ad684b6f3008';

  constructor(private http: HttpClient) { }

  getRandomNumber(min: number, max: number): Promise<number> {
    const url = `https://api.random.org/json-rpc/2/invoke`;
    const requestBody = {
      jsonrpc: '2.0',
      method: 'generateIntegers',
      params: {
        apiKey: this.apiKey,
        n: 1,
        min,
        max,
        replacement: true
      },
      id: 1
    };

    return this.http.post<any>(url, requestBody).toPromise()
      .then(response => response.result.random.data[0]);
  }
}

