

let xhr = new XMLHttpRequest();

xhr.open('GET','https://restcountries.com/v3.1/all',true)

xhr.send()

var arr = []

xhr.onload = function() {
    var data = JSON.parse (this.response)
    console.log(data)
    for (let i=0; i < data.length; i++)
    {
        if (data[i].continents[0] == 'Asia')
        {
        arr.push(data[i].name.common)
        }
    }
    const out = data.filter((x) => x.continents[0]=='Asia')
    let arr1 = []
    for (let j=0; j<out.length; j++){
        arr1.push(out[j].name.official)
    }
    console.log('Countries in Asia',arr1)

    const out1 = data.filter((x) => x.population < 200000)
    let arr2 = []
    for (let j=0; j<out1.length; j++){
        arr2.push(out1[j].name.official)
    }
    console.log('Population lesss than 200000',arr2)

    console.log(data[10].name.nativeName)
    console.log(data[10].currencies)

    const out3 = data.filter((x) => x.currencies == 'USD')
    console.log(out3)
    let arr3 = []
    for (let j=0; j<out3.length; j++){
        arr3.push(out3[j].name.official)
    }
    console.log('Countries with USD',arr3)

    const ou = data.reduce (function (acc, curr){
        acc=acc+curr.population
        return acc
    } ,0)
    
    console.log ('Total Population of all countries : ',ou) 

    let k = 0
    data.forEach(myfunction);
    function myfunction(x){
        k++;
        console.log('Name : '+x.name.common, ' Capital : '+x.capital[0],' Flag : ' +x.flag, k)        
    }
}


//console.log(arr)



//const out = data.filter((x) => x.continents[0]=='Asia')
//console.log(out)