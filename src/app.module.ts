import { Module } from '@nestjs/common'
import { AppController } from './controller/app.controller'
import { AppService } from './service/app.service'
import { App2Controller } from './controller/app2.controller'
import { App2Service } from './service/app2.service'

@Module({
  imports: [],
  controllers: [AppController, App2Controller],
  providers: [AppService, App2Service],
})
export class AppModule {}
