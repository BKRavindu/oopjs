var shoes2 = {
    shoes2price:50,
    tax:1.2,
    total:function(){
        return shoes2.shoes2price*shoes2.tax
    }

}

var x = shoes2.total()
console.log(x)