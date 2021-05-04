import{Mobile, Mobile2} from './mobile'
import{MobileLibrary} from './repaso3'


let Nokia3210:Mobile2=new Mobile2('Nokia1','Nokia3210','Nokia',20, 'black',false,1,300 )
let iPhone3G:Mobile2=new Mobile2('iPhone1','iPhonexxx','iPhone',20, 'black',false,2,600)
let SamsungGalaxy10:Mobile2=new Mobile2('Samsung1','Samsung Galaxy','Samsung',20, 'white',true,1,650 )
let iPhone5G:Mobile2=new Mobile2('iPhoneghx','ghx','iPhone',60,'white', true, 2,800)

let mb1: MobileLibrary=new MobileLibrary('TELEFONICA','Parla',[Nokia3210,iPhone3G,iPhone5G,SamsungGalaxy10])
//console.log(mb1.totalPriceCalculation())

console.log(mb1.getMobile())
console.log(mb1.getLocation())
console.log(mb1.getName())
mb1.setLocation('Móstoles')
mb1.setTotalPrice(13000)
console.log(mb1.getLocation())
console.log(mb1.getTotalPrice())
console.log(mb1.printLibrary())

