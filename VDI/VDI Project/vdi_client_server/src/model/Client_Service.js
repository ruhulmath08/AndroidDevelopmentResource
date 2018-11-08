/**
 * @author Rakin Afser <r.afser01@gmail.com>
 * @fileoverview models
 */
import Client from './Client';
import ClientLinux from './ClientLinux';
export const createClientWin=(active, lab, ip, opentime, labType, installedApps, system) =>{
  return new Client(active,lab,ip,opentime,labType,installedApps,system);
}
export const createClientLinux=(active, lab,pc, ip, opentime, labType, installedApps, system) =>{
  return new ClientLinux(active,lab,pc,ip,opentime,labType,installedApps,system);
}
