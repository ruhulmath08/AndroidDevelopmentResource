/**
 * @author Rakin Afser <r.afser01@gmail.com>
 * @fileoverview models
 */
/**
 * @class App
 * @param {string} id
 * @param {string} name
 * @param {string} system
 * @param {string} version
 */
export default class App {
  constructor(id,name,link,system,version) {
    this.id=id;
    this.name=name;
    this.link=link;
    this.system=system;
    this.version=version;
  }
}
