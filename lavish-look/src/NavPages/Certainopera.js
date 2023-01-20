import axios from "axios";
function  AscendingPrice(array){
    let arr=array.sort((a,b)=>{
        return(a.price) - (b.price)
      })
     return arr
}




 function DescendingPrice(array){
    let arr=array.sort((a,b)=>{
        return(b.price) - (a.price)
      })
     return arr
}
function  AscendingRating(array){
    let arr=array.sort((a,b)=>{
        return(a.rating) - (b.rating)
      })
     return arr
}




 function DescendingRating(array){
    let arr=array.sort((a,b)=>{
        return(b.rating) - (a.rating)
      })
     return arr
}

 export  {AscendingPrice,  DescendingPrice, AscendingRating,DescendingRating}