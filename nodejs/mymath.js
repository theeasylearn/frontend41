//create object 
mymath = {
    add:function(num1,num2)
    {
        //create local variable
        let temp = num1 + num2;
        return temp;
    },
    sub:function(num1,num2){
        let temp = num1 - num2;
        return temp;
    },
    mul:function(num1,num2){
        let temp = num1 * num2;
        return temp;
    },
    div:function(num1,num2){
        let temp = num1 / num2;
        return temp;
    }
}
//just exports object that has 4 functions
module.exports = mymath;
