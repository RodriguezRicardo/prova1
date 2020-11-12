import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clientAng';
  listaProd : string[];
  obs : Observable<Object>;

  constructor(private http : HttpClient) {}

  eventoClicco() : void {
    this.obs = this.http.get('https://3000-d11e8740-3ec6-4a69-9088-faa81be9c76c.ws-eu01.gitpod.io/api/products');
    this.obs.subscribe(this.getData);
  }

  getData = data => {
    this.listaProd = data['products'];
  }
  ngOnInit(): void {}
}
