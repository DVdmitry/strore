import {Logger} from "../interface/logger.interface";

export const loggerLegacy: Logger = {
  prefix: 'legacy root',
  log(message) {
    console.log(`${this.prefix} (legacy): ${message}` )

  }
}
