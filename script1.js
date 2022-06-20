var sname="aneesh";

function toTitleCase(s)
{
    return s.substring(0,1).toUpperCase()+s.substring(1);
}

toTitleCase=(s)=>{ return s.substring(0,1).toUpperCase()+s.substring(1); }

let myfriend='subramani';
let s=toTitleCase(myfriend);
console.log(s);

console.log(myfriend.substring(5));