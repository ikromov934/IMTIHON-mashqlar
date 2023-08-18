
 //kabisa yearni topish

let kabisa = 120;

 function leapYear(year){

     let result; 

     year = kabisa

     if (year % 400 == 0){

       result = true

     }

     else if(year % 100 == 0){

       result = false
     }

     else if(year % 4 == 0){

       result= true

     }

     else{

       result= false

     }

     alert(result)
  }

  leapYear()