import{Mobile} from './mobile'
import{Mobile2} from './mobile'

let Nokia3210:Mobile=new Mobile('Nokia1','Nokia3210','Nokia',20, 'black',false,12,300 )
let iPhone3G:Mobile=new Mobile('iPhone1','iPhonexxx','iPhone',20, 'black',false,24,600)
let SamsungGalaxy10:Mobile=new Mobile('Samsung1','Samsung Galaxy','Samsung',20, 'white',true,12,650 )
// console.log(Nokia3210)
// console.log(iPhone3G)
// console.log(SamsungGalaxy10)

let Nokia3210_:Mobile2=new Mobile2('Nokia1','Nokia3210','Nokia',20, 'black',false,12,300 )
let iPhone3G_:Mobile2=new Mobile2('iPhone1','iPhonexxx','iPhone',20, 'black',false,24,600)
let SamsungGalaxy10_:Mobile2=new Mobile2('Samsung1','Samsung Galaxy','Samsung',20, 'white',true,12,650 )
console.log(Nokia3210_.toString())
console.log(iPhone3G_.toString())
console.log(SamsungGalaxy10_.toString())

let arr:Mobile2[]=[Nokia3210_,iPhone3G_,SamsungGalaxy10_]
for(let i=0;i<arr.length;i++){
    console.log(arr[i].toString())
}
