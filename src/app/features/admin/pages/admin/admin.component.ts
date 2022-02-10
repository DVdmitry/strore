import {Component, Inject, OnInit} from '@angular/core';
import {LoggerService} from "../../../../shared/services/logger.service";
import {ExperimentalLoggerService} from "../../../../shared/services/experimental-logger.service";
import {loggerLegacy} from "../../../../shared/services/logger-legacy";
import {APP_CONFIG, AppConfig} from "../../../../shared/config/config.token";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  providers: [{
    provide: LoggerService,
    useFactory: (config: AppConfig, http: HttpClient) => {
      return config.experimentalEnabled ? new ExperimentalLoggerService(http) : new LoggerService()
    },
    deps: [APP_CONFIG, HttpClient]
    // useClass: ExperimentalLoggerService
    // useValue: loggerLegacy
  }]
})
export class AdminComponent implements OnInit {
// , @Inject(APP_CONFIG) private config: AppConfig
  constructor(private logger: LoggerService) {
  }
  ngOnInit(): void {
    this.logger.prefix = 'Admin Component'
    this.logger.log('Admin Component init... ')
  }
}
