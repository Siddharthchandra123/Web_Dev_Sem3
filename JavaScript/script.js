function FN(F){
    var first=F
    return first;
}

function LN(L){
    var last=L;
    return last;
}

function display(){
    // firstName=FN("VIKAS")
    // lastName=LN("CHOUDHARY")

    // document.write(firstName+' '+lastName)

    const c='*';
    for(let i=0; i<5; i++){
        for (let s=0; s<i; s++){
            document.write(c)
        }
        document.write('<br>')
    }
    document.write('<br>')
    for(let i=0; i<5; i++){
        for (let s=0; s<i; s++){
            document.write(c)
        }
        document.write('<br>')
    }
    for(let i=4; i>0; i--){
        for (let s=0; s<i; s++){
            document.write(c)
        }
        document.write('<br>')
    }
}