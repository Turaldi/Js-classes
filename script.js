class CustomMath{
    constructor(results){
        this.results=results
    }
    plus(plus){
        this.results=this.results+plus;
        return this;
    }
    minus(minus){
        this.results=this.results-minus;
        return this;
    }
    multiply(multiply){
        this.results=this.results*multiply;
        return this;
    }
    divide(divide){
        this.results=this.results/divide;
        return this;
    }
}
var result=new CustomMath(100).plus(6).minus(30).multiply(3).divide(2)
console.log(result);