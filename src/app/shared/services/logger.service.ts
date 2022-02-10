import {Injectable} from "@angular/core";
import {Logger} from "../interface/logger.interface";
import {ExperimentalLoggerService} from "./experimental-logger.service";

@Injectable({
  providedIn: 'root',
  useClass: ExperimentalLoggerService
})

export class LoggerService implements Logger {
  prefix = 'root'

  log(message: string) {
    console.log(`${this.prefix} ${message}` )
  }
}
