const inp=document.getElementById("input")
const cont=document.getElementById("todolist")

const arr=[];

function del(ind){
    console.log("dele"+ind);
    arr.splice(ind, 1);
    create();
}

function edit(ind){
    console.log(ind);
    const text=prompt("enter the text here");
    arr.splice(ind,1,text);
    // console.log("edit");
    create()
}

// arr.splice(ind,1)

function create(){
    cont.innerHTML=""
    arr.forEach((ele,index) => {
        let temp=""
        temp="<li>"+ele+`<a onclick='edit(${index})'>`+"edit"+"</a>"+`<a onclick='del(${index})'>`+"<pre>"+"&#10060; |"+"</pre>"+"</a>"+"</li>"
        cont.innerHTML+=temp;
    });
}

inp.onchange=() =>{
    console.log(inp.value);
    arr.push(inp.value);
    console.log(arr)
    create()
}