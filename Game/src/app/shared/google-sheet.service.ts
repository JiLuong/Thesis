import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface ScoreRow {
  [key: string]: string;
}

@Injectable({
  providedIn: 'root',
})
export class GoogleSheetService {
  private readonly sheetId = 'ghdn69r5v1rmk';
  private readonly sheetDBUrl = `https://sheetdb.io/api/v1/${this.sheetId}`;

  constructor(private http: HttpClient) {}

  getScores(level: number) {
    const nameColumn = `Name ${level}`;
    const scoreColumn = `Score ${level}`;
    const apiEndpoint = `${this.sheetDBUrl}`;
    return this.http
      .get<ScoreRow[]>(apiEndpoint)
      .toPromise()
      .then((data: ScoreRow[] | undefined) => {
        if (data) {
          return data.map((row) => ({
            name: row[nameColumn],
            score: row[scoreColumn],
          }));
        } else {
          return [];
        }
      })
      .catch(() => []); // handle rejected Promise by returning an empty array
  }

  postScore(level: number, name: string, score: number) {
    const nameColumn = `Name ${level}`;
    const scoreColumn = `Score ${level}`;
    const body = { data: [{ [nameColumn]: name, [scoreColumn]: score }] };
    const apiEndpoint = `${this.sheetDBUrl}`;
    return this.http.post(apiEndpoint, body).toPromise();
  }
}
