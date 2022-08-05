import {makeAutoObservable} from 'mobx';

export default class DeviceStore{
  constructor (){
    this._types=[
       /* {id:3, name:'iPhone'},{id:4, name:'TV'},{id:5, name:'Computers'},{id:6, name:'Watch'}*/
    ]
    this._brands = [
       /* {id:1, name:'Apple'},{id:2, name:'Samsung'},{id:3, name:'Lenovo'},{id:4, name:'Asus'}*/
    ]
    this._devices = [/*
        {id:1,	name:"iPhone 12 ", price:	4500,	rating: 5,  img:"http://flxtable.com/wp-content/plugins/pl-platform/engine/ui/images/image-preview.png"},
        {id:5,	name:"iPhone 12m", price:	4400,	rating: 5,	img:"http://flxtable.com/wp-content/plugins/pl-platform/engine/ui/images/image-preview.png"},
        {id:6,	name:"iPhone ",    price:	4400,	rating: 5,	img:"http://flxtable.com/wp-content/plugins/pl-platform/engine/ui/images/image-preview.png"},
        {id:7,	name:"iPhone Max", price:	4000,	rating: 5,	img:"http://flxtable.com/wp-content/plugins/pl-platform/engine/ui/images/image-preview.png"},
        {id:8,	name:"iPhone M",   price:	4000,	rating: 5,	img:"http://flxtable.com/wp-content/plugins/pl-platform/engine/ui/images/image-preview.png"}
  */]
    this._selectedType={}
    this._selectedBrand={}

    this._page = 1 
    this._totalCount = 0
    this._limit = 3
    makeAutoObservable(this)
  }

  setType(types){
    this._types=types;
  }
  setBrands(brands){
    this._brands=brands;
  }
  setDevices(devices){
    this._devices=devices;
  }
  setSelectedType(type){
    this.setPage(1)
    this._selectedType=type;
  }
  setSelectedBrand(brand){
    this.setPage(1)
    this._selectedBrand=brand;
  }
  setPage(page){
    this._page=page;
  }
  setTotalCount(Count){
    this._totalCount=Count;
  }
  /*
  setLimit(limit){
    this._limit=limit;
  }*/




  get types(){
    return this._types
  }
  
  get brands(){
    return this._brands
  }

  get devices(){
    return this._devices
  }
  get selectedType(){
    return this._selectedType
  }
  get selectedBrand(){
    return this._selectedBrand;
  }
  get page(){
    return this._page;
  }
  get totalCount(){
    return this._totalCount;
  }
  get limit(){
    return this._limit;
  }
  
}