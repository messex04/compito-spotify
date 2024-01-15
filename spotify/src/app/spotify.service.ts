import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Dichiaro che il servizio è iniettabile agli altri componenti a partire dal componente root
@Injectable({
  providedIn: 'root'  
})
export class SpotifyService {
   //url per oauth: https://developer.spotify.com/console/get-search-item/
  //Ottengo il modulo HttpClient
  constructor(private http: HttpClient) { }

  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQAcip1xgw1TQnlhItxVITKQc8jVR7255NHDk5xZJ0TExfC-3R_s9HqwMlThXz6zl81RPXvdKV4gk0ojKBjS2UJi5U462zcFjhkTFf6-duDYfcn4F11iXrpiYAury5jaLYA0todTMoBmw3lqyQ99Us_idhJlx7_fYMNX1pLkas4Kh_goic1IjqDvVmv1uOvnnJNEeBwzgB_tbMc'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}

