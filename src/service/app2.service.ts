import { Injectable } from '@nestjs/common'

@Injectable()
export class App2Service {
  getBye(): string {
    return '겟 바이'
  }
}
