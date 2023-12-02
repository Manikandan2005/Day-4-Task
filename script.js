//Q1 (A) & Q2 (A)
//print odd number in an array

//(i)ANONYMOUS FUNCTION
var result=[];
var a = function(arr)
{
    for(var i=0;i<arr.length;i++)
    {
        if(arr[i]%2!=0)
        {
            result.push(arr[i])
        }
    }
    return(result)
}
console.log(a([1,2,3,4,5,6]))

//(ii)IIFE FUNCTION

var result=[];
(function(arr)
{
    for(var i=0;i<arr.length;i++)
    {
        if(arr[i]%2!=0)
        {
            result.push(arr[i])
        }
    }
    console.log(result)
})([1,2,3,4,5,6])

//(iii)ARROW FUNCTION

var result=[]
var odd = (arr)=>
{
    for(var i=0;i<arr.length;i++)
    {
        if(arr[i]%2!=0)
        {
            result.push(arr[i])
        }
    }
    return(result)
}
console.log(odd([1,2,3,4,5,6]))

//Q1(B) & Q2(B)
//CONVERT ALL THE STRINGS TO TITLE CAPS IN A STRING ARRAY

// (i)ANONYMOUS FUNCTION

var b = function (arr)
{
    var res = arr.toString();
    var data = res.toLowerCase().split(" ");
    for(var i=0;i<data.length;i++)
    {
        data[i] = data[i].charAt(0).toUpperCase()+data[i].slice(1);
    }
    return(data).join(" ")
}

console.log(b(["tHIS Is jaVaScRiPT"]));


// (ii)IIFE FUNCTION

(function caps(arr)
{
    var res = arr.toString();
    var data = res.toLowerCase().split(" ");
    for(var i=0;i<data.length;i++)
    {
        data[i] = data[i].charAt(0).toUpperCase()+data[i].slice(1);
    }
    console.log(data.join(" "));
})(["tHIS Is jaVaScRiPT"])




// (iii)ARROW FUNCTION

var caps = (arr)=>
{
    var res = arr.toString();
    var data = res.toLowerCase().split(" ");
    for(var i=0;i<data.length;i++)
    {
        data[i] = data[i].charAt(0).toUpperCase()+data[i].slice(1);
    }
    return(data).join(" ")
}

console.log(caps(["tHIS Is jaVaScRiPT"]));


//Q1(C) & Q2(C)
//SUM OF ALL NUMBERS IN AN ARRAY

// (i)ANONYMOUS FUNCTION

var result=0;
var c = function (arr)
{
    for(var i=0;i<arr.length;i++)
    {
        result=result+arr[i];
    }
    return(result);
}
console.log(c([1,2,3,4,5,6]))


// (ii)IIFE FUNCTION

var result=0;
(function(arr)
{
    for(var i=0;i<arr.length;i++)
    {
        result=result+arr[i];
    }
    console.log(result)
})([1,2,3,4,5,6])


// (iii)ARROW FUNCTION

var result=0;
var sum = (arr)=>
{
    for(var i=0;i<arr.length;i++)
    {
        result=result+arr[i];
    }
    return(result)
}
console.log(sum([1,2,3,4,5,6]))

//Q2(D) & Q2(D)
//RETURN ALL PRIME NUMBERS IN AN ARRAY

// (i)ANONYMOUS FUNCTION

var result=[];
var d = function (arr)
{
    for(var i=0;i<arr.length;i++)
    {
        var count=0;
        for(var j=2;j<arr[i];j++)
        {
            if(arr[i]%j===0)
            {
                count=1;
            }
        }
        if(count===0)
        {
            result.push(arr[i]);
        }
    }
    return(result)
}

console.log(d([2,4,7,8,11,14,13]))


// (ii)IIFE FUNCTION

var result=[];
(function (arr)
{
    for(var i=0;i<arr.length;i++)
    {
        var count=0;
        for(var j=2;j<arr[i];j++)
        {
            if(arr[i]%j===0)
            {
                count=1;
            }
        }
        if(count===0)
        {
            result.push(arr[i]);
        }
    }
    console.log(result) 
})([2,4,7,8,11,14,13])

// ARROW FUNCTION

var result=[];
var prime = (arr)=>
{
    for(var i=0;i<arr.length;i++)
    {
        var count=0;
        for(var j=2;j<arr[i];j++)
        {
            if(arr[i]%j===0)
            {
                count=1;
            }
        }
        if(count===0)
        {
            result.push(arr[i]);
        }
    }
    return(result)
}

console.log(prime([2,4,7,8,11,14,13]))


//Q1(E) & Q2(E)
//RETURN ALL PALINDROMES IN AN ARRAY

// (i)ANONYMOUS FUNCTION

var result=[]
var e = function (arr)
{
    for(var i=0;i<arr.length;i++)
    {
        var data=arr[i].split("").reverse().join("")
        if(arr[i]===data)
        {
            result.push(arr[i])
        }
    }
    return(result);
}

console.log(e(['mom','mani','level']))

//(ii)IIFE FUNCTION

var result=[];
(function(arr)
{
    for(var i=0;i<arr.length;i++)
    {
        var data=arr[i].split("").reverse().join("")
        if(arr[i]===data)
        {
            result.push(arr[i])
        }
    }
    console.log(result);
})(['mom','mani','level'])

//(iii)ARROW FUNCTION

var result=[]
var palindrome =(arr)=>
{
    for(var i=0;i<arr.length;i++)
    {
        var data=arr[i].split("").reverse().join("")
        if(arr[i]===data)
        {
            result.push(arr[i])
        }
    }
    return(result);
}

console.log(palindrome(['mom','mani','level']))


// Q1(F)
// RETURN MEDIAN OF TWO SORTED ARRAYS OF THE SAME SIZE

// (i)ANONYMOUS FUNCTION

var f = function(arr1,arr2)
{
    let arr=[...arr1,...arr2];
    arr.sort((a,b)=>a-b)
    let n = Math.floor(arr.length/2)
    return arr.length%2===0 ? (arr[n]+arr[n-1])/2 : arr[n];

}
console.log(f([1,3,5,7],[2,4,8,6]))


// (ii)IIFE FUNCTION
var res4;
(function(arr1,arr2)
{
    let arr=[...arr1,...arr2];
    arr.sort((a,b)=>a-b)
    let n = Math.floor(arr.length/2)
    res4 = arr.length%2===0 ? (arr[n]+arr[n-1])/2 : arr[n]
    console.log(res4);
})([1,3,5,7],[2,4,8,6])


// ARROW FUNCTION

var medianOfSortedArray = (arr1,arr2)=>
{
    let arr=[...arr1,...arr2];
    arr.sort((a,b)=>a-b)
    let n = Math.floor(arr.length/2)
    return(arr.length%2===0 ? (arr[n]+arr[n-1])/2 : arr[n]);
}
console.log(medianOfSortedArray([1,3,5,7],[2,4,8,6]))




// Q1 (G) Remove duplicates from an array:

// (i) ANONYMOUS FUNCTION

var g = function(arr)
{
    let array = arr
    let uniqueArray = [...new Set(array)];  //spread operator is used to convert the set to array
    return(uniqueArray)
}

console.log(g([1,2,1,1,3,4,5,5]))


// (ii)IIFE FUNCTION
var uniqueArray=[];
(function(arr){
    let array = arr
    uniqueArray = [...new Set(array)];
    console.log(uniqueArray)
})([1,2,1,1,3,4,5,5])



//Q1(H) Rotate an array by K times:

//(i) ANONYMOUS FUNCTION

var h = function (arr,k)
{
    for(var i=0;i<k;i++)
    {
        arr.push(arr[i]);
    }
    for(var j=0;j<k;j++)
    
    {
        arr.shift();
    }
    return(arr)
    
}

console.log(h([1,2,3,4,5],3))

// (ii)IIFE
var arr=[];
(function (arr,k)
{
    for(var i=0;i<k;i++)
    {
        arr.push(arr[i]);
    }
    for(var j=0;j<k;j++)
    
    {
        arr.shift();
    }
    console.log(arr)
    
})([1,2,3,4,5],3)













