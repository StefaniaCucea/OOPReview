import{Mobile} from './mobile'
export class MobileLibrary {

    private name: string
    private location: string
    private mobiles: Mobile[]
    private totalPrice: number

    constructor(nameP:string, locationP:string, mobilesP:Mobile[]){
        this.name=nameP
        this.location=locationP
        this.mobiles=mobilesP
    }

    getTotalPrice():number{
        return this.totalPrice
    }
    setTotalPrice(totalPrice:number){
        this.totalPrice=totalPrice
    }
    getMobile():Mobile[]{
        return this.mobiles
    }
    setMobiles(Mobile:Mobile[]){
        this.mobiles=Mobile
    }
    getLocation():string{
        return this.location
    }
    setLocation(location:string){
        this.location=location
    }
    getName():string{
        return this.name
    }
    setName(name:string){
        this.name=name
    }
    totalPriceCalculation():number{
        let resultado=0
        for(let i=0;i<this.mobiles.length;i++){
           resultado+= this.mobiles[i].price
        }
        return resultado
    }
}
