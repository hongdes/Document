//求和
function add(sum1, sum2){
    var sum = sum1 + sum2;
    if(sum2 + 1 > 100){
        return sum;
    }else {
        add(sum, sum2 + 1);
    }
}
var num = add(1, 2); 

