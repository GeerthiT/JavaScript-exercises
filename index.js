/*function sleepIn(weekday, vacation) {
    if((weekday==true) && (vacation == false)){
        return false
    }
    else if((weekday==false) && (vacation==true)){
        return true
    }
    else if((weekday==false) && (vacation==false)){
        return true
    }
   }
   console.log(sleepIn(false, true) )

   
   function monkeyTrouble(aSmile, bSmile) {
       if((aSmile == bSmile)){
           return true
        }
        else{
            return false
        }
    }
    
    console.log(monkeyTrouble(false, false))
    
    function stringTimes(str, n) {
        a  = ""
        for(i=0;i<n;i++){
            a = a + str
        }
        return a
    }
    
    
    console.log(stringTimes("Hi",6))
    
    function luckysum(a,b,c){
        if(b==13){
            b = 0
            c = 0
        }
        else if((c==13)){
            c = 0
        }
        else if(a==13){
            a = b = c = 0
        }
        return(a+b+c)
    }
    
    console.log(luckysum(1,13,3))
    */

    function caught_speeding(speed, is_birthday){
        x = 0
        if(is_birthday == true){
            x=5
        }
        newSpeed = speed - x
        if(newSpeed <= 60){
            return 0
        }
        else if (61 >= newSpeed <= 80){
            return 1
        }
        else if (newSpeed >= 81){
            return 2
        }
       }

       console.log(caught_speeding(65, true))