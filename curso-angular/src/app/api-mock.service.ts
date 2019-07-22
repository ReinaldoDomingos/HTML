import {Injectable} from '@angular/core';
import {Consulta} from './consulta';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class ApiMockService {

  constructor() {
  }

  public getAllConsultas(): Observable<Consulta[]> {
    return Observable.of([
      new Consulta({id: 1, title: 'Read article', complete: false})
    ]);
  }

  public createConsulta(consulta: Consulta): Observable<Consulta> {
    return Observable.of(
      new Consulta({id: 1, cor: 'azul', complete: false})
    );
  }

  public getConsultaById(consultaId: number): Observable<Consulta> {
    return Observable.of(
      new Consulta({id: 1, cor: 'azul', complete: false})
    );
  }

  public updateConsulta(consulta: Consulta): Observable<Consulta> {
    return Observable.of(
      new Consulta({id: 1, cor: 'azul', complete: false})
    );
  }

  public deleteConsultaById(consultaId: number): Observable<null> {
    return null;
  }
}
