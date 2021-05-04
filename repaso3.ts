import{Mobile, Mobile2} from './mobile'
export class MobileLibrary {

    private name: string
    private location: string
    private mobiles: Mobile2[]
    private totalPrice: number

    constructor(nameP:string, locationP:string, mobilesP:Mobile2[]){
        this.name=nameP
        this.location=locationP
        this.mobiles=mobilesP
        this.totalPrice= this.totalPriceCalculation()
    }

    getTotalPrice():number{
        return this.totalPrice
    }
    setTotalPrice(totalPrice:number){
        this.totalPrice=totalPrice
    }
    getMobile():Mobile2[]{
        return this.mobiles
    }
    setMobiles(Mobile:Mobile2[]){
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
    private totalPriceCalculation():number{
        let resultado=0
        for(let i=0;i<this.mobiles.length;i++){
           resultado+= this.mobiles[i].getPrice()
        }
        return resultado
    }
    printLibrary(){
        console.log(`These are all my mobiles:`)
        for(let i=0;i<this.mobiles.length;i++){console.log( this.mobiles[i].toString())}
        console.log(`Price overall:${this.totalPriceCalculation()}`)
    }
}
