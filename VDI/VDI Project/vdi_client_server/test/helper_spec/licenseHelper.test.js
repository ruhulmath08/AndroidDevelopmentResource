import {expect} from 'chai';
import {hostnameVSlicenseQty} from '../../src/helper/licenseHelper';
describe('License Helper',()=>{
  it('Host List VS License Qty', (done)=>{
    hostnameVSlicenseQty(2).then(function(bol) {
      expect(bol).is.eql(true)
    })
  })
})
