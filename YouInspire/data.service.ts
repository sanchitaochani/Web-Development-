import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
    public myData: any;
    myArray: any = ['assets/data/provider2.json', 'assets/data/provider3.json', 'assets/data/provider4.json', 'assets/data/provider5.json', 'assets/data/provider6.json', 'assets/data/provider7.json', 'assets/data/provider8.json', 'assets/data/provider9.json', 'assets/data/provider10.json', 'assets/data/provider12.json', 'assets/data/provider11.json'];
    constructor(private http: HttpClient) {
    }

    loadData() {
        this.http.get('assets/data/provider.json')
            .subscribe((data: any) => {
                this.myData = data;
            });
        return this.myData;
    }

    loadMoreData() {
        console.log('new data', this.myArray.length);
        var i = Math.floor(Math.random() * Math.floor(this.myArray.length));
        console.log('value of index', i);
        this.http.get(this.myArray[i])
            .subscribe((data: any) => {
                this.myData = data;
            });
        return this.myData;
    }
}
