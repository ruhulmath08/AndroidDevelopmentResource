import {expect} from 'chai'
describe('prototype',()=>{
  it('set prototype',()=>{
    function Food(name, protein,carbs,fat){
      const obj={};
      Object.setPrototypeOf(obj,Food.prototype)
      obj.protein=protein;
      return obj;
    }
    class Food1{
      constructor(name, protein,carbs,fat){
        this.name=name;
        this.protein=protein;
        this.carbs=carbs;
        this.fat=fat;
      }
      hellow(){
        return 10;
      }
    }
    const fish=new Food('Salmon',26,0,0)
    expect(fish.protein).is.eql(26)
    const fish2=new Food1()
    fish2.protein=20;

    expect(fish2.protein).is.eql(20)
    const fish3=Food1.prototype
    fish3.property1='fish3';
    let fish4=Food1.prototype;
    fish4.property2='fish4'



  })
  it('learning prototype',()=>{
    const foo={
      speak(){
        console.log('Foo!')
      }
    }
    let bar=Object.create(foo)
    bar.another=()=>{
      return 'Bar'
    }
    expect(bar.another()).is.eql('Bar')
    expect(Object.getPrototypeOf(bar)===foo).is.eql(true)
  })
  it('class',()=>{
    class Food{

    }
    expect(typeof Food).is.eql('function')
    function Food1(name, protein){
      if(!new.target){
        return new Food1(name,protein)
      }
      this.name=name;
      this.protein=protein;
    }
    function Food2(name, protein){
      if(!(this instanceof Food2)){
        return new Food2(name,protein)
      }
      this.name=name;
      this.protein=protein;
    }
    let f2=new Food2('fish',10)
    let f=Food1('Bread',20)
    expect(f.protein).is.eql(20)
  })
  it('Class prototyping',()=>{
    class Client{
			constructor(active,lab,ip,opentime,labType,installedApps){
        this.active=active;
        this.lab=lab;
        this.ip=ip;
        this.opentime=opentime;
        this.labType=labType;
        this.installedApps=installedApps;
      }
		}


  })
})
