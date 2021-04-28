export class Mobile{

    public name:string
    public model:string
    public trademark:string
    public sdSize:number
    public color:string
    public is5G:boolean
    public cameraNumber:number
    public price:number

    constructor(nameParameter:string, modelParameter:string, trademarkParameter:string, sdSizeParameter:number, colorParameter:string, is5GParameter:boolean,cameraNumberParameter:number,priceParameter:number)
    {
        this.name=nameParameter
        this.model=modelParameter
        this.trademark=trademarkParameter
        this.sdSize=sdSizeParameter
        this.color=colorParameter
        this.is5G=is5GParameter
        this.cameraNumber=cameraNumberParameter
        this.price=priceParameter
    }
}

export class Mobile2{

    private name:string
    private model:string
    private trademark:string
    private sdSize:number
    private color:string
    private is5G:boolean
    private cameraNumber:number
    private price:number

    constructor(nameParameter:string, modelParameter:string, trademarkParameter:string, sdSizeParameter:number, colorParameter:string, is5GParameter:boolean,cameraNumberParameter:number,priceParameter:number)
    {
        this.name=nameParameter
        this.model=modelParameter
        this.trademark=trademarkParameter
        this.sdSize=sdSizeParameter
        this.color=colorParameter
        this.is5G=is5GParameter
        this.cameraNumber=cameraNumberParameter
        this.price=priceParameter
    }
    getPrice():number
    {
        return this.price
    }
    setPrice(price:number)
    {
        this.price=price
    }
    getCameraNumber():number
    {
        return this.cameraNumber
    }
    setCameraNumber(cameraNumber:number)
    {
        this.cameraNumber=cameraNumber
    }
    GetIs5G():boolean
    {
        return this.is5G
    }
    setIs5G(is5G:boolean)
    {
        this.is5G=is5G
    }
    getColor():string
    {
        return this.color
    }
    setColor(color:string)
    {
        this.color=color
    }
    getSdSize():number
    {
        return this.sdSize
    }
    setSdSize(sdSize:number)
    {
        this.sdSize=sdSize
    }
    getTrademark():string
    {
        return this.trademark
    }
    setTrademark(trademark:string)
    {
        this.trademark=trademark
    }
    setName(name:string)
    {
        this.name=name
    }
    getName():string
    {
        return this.name
    }
    setModel(model:string){
        this.model=model
    }
    getModel():string
    {
        return this.model
    }
    toString():string
    {
        return(`The characteristics of the mobile ${this.name} are:
                Name:${this.name} 
                Model:${this.model}
                Trademark:${this.trademark}
                SD Size (GB):${this.sdSize}
                Color:${this.color}
                Is 5G:${this.is5G}
                Number of Cameras:${this.cameraNumber}`)
    }

}