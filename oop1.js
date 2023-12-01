var shoes1 = {
    shoes1price:100,
    tax:1.2,
    total:function(){
        return this.shoes1*this.tax
    }

}

var x = shoes1.total()
console.log(x)