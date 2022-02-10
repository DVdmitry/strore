import {Injectable} from "@angular/core";
import {Logger} from "../interface/logger.interface";
import {HttpClient} from "@angular/common/http";

@Injectable()

export class ExperimentalLoggerService implements Logger {
  prefix = 'root'
  constructor(private http: HttpClient) {
  }

  log(message: string) {
    console.log(`${this.prefix} (experimental): ${message}` )
  }
}
