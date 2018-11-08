/**
 * @author Rakin Afser <r.afser01@gmail.com>
 * @fileoverview models
 */
/**
 * @class Client
 * @param {string} activate
 */
export default class Client{
  constructor(active  ,lab  ,ip  , opentime  ,labType ,installedApps,system ){
    this.active=active;
    this.lab=lab;
    this.ip=ip;
    this.opentime=opentime;
    this.labType=labType;
    this.installedApps=installedApps;
    this.system=system;
  }
}
