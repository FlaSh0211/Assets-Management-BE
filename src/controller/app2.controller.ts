import { Controller, Get } from '@nestjs/common'
import { App2Service } from '../service/app2.service'

@Controller()
export class App2Controller {
  constructor(private readonly app2Service: App2Service) {}

  @Get('cats')
  getBye(): string {
    return this.app2Service.getBye()
  }
}
