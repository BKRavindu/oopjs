var shoes1 = {
    shoes1price:100,
    tax:1.2,
    total:function(){
        return this.shoes1price*this.tax
    }

}

var shoes2 = {
    shoes2price:50,
    tax:1.2,
    total:function(){
        return shoes2.shoes2price*shoes2.tax
    }

}

var y = shoes2.total()
console.log(y)

var x = shoes1.total()
console.log(x)