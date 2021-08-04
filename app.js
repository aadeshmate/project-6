const list=document.getElementById('list');
const btn=document.querySelector('button')
const inp=document.getElementById('inp');


btn.onclick=function(){
    
    //getting the text from input box
    const todoText=inp.value;
    const li=document.createElement('li');
    
    li.innerHTML+=todoText;
    li.onclick = function(event){
        event.target.classList.toggle('hide');   
    }

   
   

    //adding li as ul child
   
    list.append(li);
    const delBtn = document.createElement("i");
    delBtn.classList.add("far", "fa-trash-alt");
    li.appendChild(delBtn);
    delBtn.addEventListener("click",function(e){
        console.log(e.target);
        e.target.remove();
        li.remove();
    });
    inp.value="";
}
