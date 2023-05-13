import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface ScoreRow {
  [key: string]: string;
}

@Injectable({
  providedIn: 'root',
})
export class GoogleSheetService {
  //*------------------sheety------------------
  private readonly sheetyProjectId = '24b35ce3754a9d4de03691b8888c58d8';
  private readonly baseUrl = `https://api.sheety.co/${this.sheetyProjectId}/designersDenDatabase/allHighscores`;

  constructor(private http: HttpClient) {}

  getScores(level: number) {
    const url = this.baseUrl;
    return this.http
      .get<any>(url)
      .toPromise()
      .then((response: any) => {
        if (response && response.allHighscores) {
          const levelSuffix = level.toString();
          const nameColumn = `name${levelSuffix}`;
          const scoreColumn = `score${levelSuffix}`;
          return response.allHighscores
            .filter((row: any) => row[nameColumn] && row[scoreColumn])
            .map((row: any) => ({
              name: row[nameColumn],
              score: parseInt(row[scoreColumn]),
            }));
        } else {
          return [];
        }
      })
      .catch(() => []); // handle rejected Promise by returning an empty array
  }

  postScore(level: number, name: string, score: number) {
    const url = this.baseUrl;
    const levelSuffix = level.toString();
    const nameColumn = `name${levelSuffix}`;
    const scoreColumn = `score${levelSuffix}`;
    const body = {
      allhighscore: {
        [nameColumn]: name,
        [scoreColumn]: score,
      },
    };
    return this.http.post(url, body).toPromise();
  }
}
//------------------sheety------------------*/

/*------------------sheetDB------------------
  private readonly sheetId = "ghdn69r5v1rmk";
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
------------------sheetDB------------------*/
