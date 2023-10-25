const input=document.getElementById('input')
const output=document.getElementById('output')

function uppercase(){
    if(input.value==''){
        output.innerText=''
    console.log(input.value)
    let peragraph=document.createElement('p')
    output.classList.add("red")
    peragraph.innerHTML='please enter the prompt inside the iput feild :) '
    output.classList.add("upper")
    output.appendChild(peragraph)

    }
    else{
        output.innerText=''
        console.log(input.value)
        let peragraph=document.createElement('p')
        peragraph.innerHTML=input.value
        output.classList.add("upper")
        output.appendChild(peragraph)
    }
    


}

function lowercase(){
    if(input.value==''){
    output.innerText=''
    console.log(input.value)
    let peragraph=document.createElement('p')
    output.classList.add("red")
    peragraph.innerHTML='please enter the prompt inside the iput feild :) '
    output.classList.add("lower")
    output.appendChild(peragraph)
    }
    else{
        output.innerText=''
    console.log(input.value)
    let peragraph=document.createElement('p')
    peragraph.innerHTML=input.value
    output.classList.add("lower")
    output.appendChild(peragraph)
    }

}


function bolder(){
    if(input.value==''){
    output.innerText=''
    console.log(input.value)
    let peragraph=document.createElement('p')
    output.classList.add("red")
    peragraph.innerHTML='please enter the prompt inside the iput feild :) '
    output.classList.add("bold")
    output.appendChild(peragraph)
    }
    else{
        output.innerText=''
    console.log(input.value)
    let peragraph=document.createElement('p')
    peragraph.innerHTML=input.value
    output.classList.add("bold")
    output.appendChild(peragraph)
    }

}
function italic(){
    if(input.value==''){
    output.innerText=''
    console.log(input.value)
    let peragraph=document.createElement('p')
    output.classList.add("red")
    peragraph.innerHTML='please enter the prompt inside the iput feild :) '
    output.classList.add("italic")
    output.appendChild(peragraph)
    }
    else{
        output.innerText=''
        console.log(input.value)
        let peragraph=document.createElement('p')
        peragraph.innerHTML=input.value
        output.classList.add("italic")
        output.appendChild(peragraph)  
    }
}

function underline(){
    if(input.value==''){
    output.innerText=''
    console.log(input.value)
    let peragraph=document.createElement('p')
    output.classList.add("red")
    peragraph.innerHTML='please enter the prompt inside the iput feild :) '
    output.classList.add("under")
    output.appendChild(peragraph)
    }
    else{
        output.innerText=''
        console.log(input.value)
        let peragraph=document.createElement('p')
        peragraph.innerHTML=input.value
        output.classList.add("under")
        output.appendChild(peragraph)  
    }
}
 function capitalize(){
    if(input.value==''){
    output.innerText=''
    console.log(input.value)
    let peragraph=document.createElement('p')
    output.classList.add("red")
    peragraph.innerHTML='please enter the prompt inside the iput feild :) '
    output.classList.add("capital")
    output.appendChild(peragraph)
    }
    else{
        output.innerText=''
    console.log(input.value)
    let peragraph=document.createElement('p')
    peragraph.innerHTML=input.value
    output.classList.add("capital")
    output.appendChild(peragraph)
    }

 }
