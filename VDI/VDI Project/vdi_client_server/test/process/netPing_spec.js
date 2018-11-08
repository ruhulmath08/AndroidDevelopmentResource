import {expect} from 'chai'
import {pingClient} from '../../src/process/net_ping'
import ping_subscribe from '../../src/subscribers/ping_subscribe'
describe('netPing',()=>{
  it('ping clients',(done)=>{
    ping_subscribe();
    pingClient('192.168.223.60');
    done()
  })
})
