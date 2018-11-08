import {expect} from 'chai'
import {subscriber,publisher} from '../../src/init'
var _path=require('../../src/path')
describe('pub_sub',()=>{
  it('Announce Event',()=>{
    subscriber.subscribe(_path.serverIp+_path.announceToServerAlive)
  	subscriber.on('message',(chanel,msg)=>{
      if(chanel===_path.serverIp+_path.announceToServerAlive){
        var obj=JSON.parse(msg);
        console.log(obj.mac)
        // expect(obj.mac).is.eql('92:a7:13:1d:6c:7e')
  		}
  	})
  })
  it('spawn to client',()=>{
    let obj={type:'child_process',
              execMethod:'spawn',
              id:11,
              cmd:'dir',
              args:['',''],
              options:{cwd:'./'},
              serverIp:'192.168.223.34'
            }
    publisher.publish('92:a7:13:1d:6c:7e',JSON.stringify(obj))
    subscriber.subscribe(_path.serverIp)

  })
})


let obj_linux={type:'child_process',
          execMethod:'spawn',
          id:11,
          cmd:'dir',
          args:['',''],
          options:{cwd:'./'},
          serverIp:'192.168.223.34'
        }
let obj_win={type:'child_process',
          execMethod:'spawn',
          id:11,
          cmd:'cmd',
          args:['/c','dir'],
          options:{cwd:'./'},
          serverIp:'192.168.223.34'
        }
