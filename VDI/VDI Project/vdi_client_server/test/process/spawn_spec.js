import {expect} from 'chai';
import {loadAppListFromDir} from '../../src/service/spawn';
import * as _path from '../../src/path';
describe('spawn ',()=>{
  it('loadAppListFromDir ',()=>{
    let obj={cmd:'sh',
              args:['-c','ls','-a'],
              options:{cwd:'/home/swapnil/projects/boothub/boothubr2/boothubr/ui_react_core_template/staticFolder/VM_WIN/'},
              key:_path.VM_WIN_APPS,
            }
    loadAppListFromDir(obj)
  })
})
