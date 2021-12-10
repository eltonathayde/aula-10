function fecharTarefa(li){
    // Criou um elemento
    let span = document.createElement("SPAN")
    // Criou um texto
    let botao = document.createTextNode(" ❌")


    span.className = "fechar";
    span.appendChild(botao);
    li.appendChild(span)
    // quando clicar  o elemento vai desaparecer 
    span.onclick= () => span.parentElement.style.display = "none";
}

document.querySelectorAll('li').forEach(fecharTarefa);
document.querySelector('ul').addEventListener('click', (e) =>{
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('cheked');
    }
});
 function adicionar(){
     let li= document.createElement('LI');
     let tarefa_value = document.tarefas.tarefa.value;
     let tarefa_text = document.createTextNode(tarefa_value)

     li.appendChild(tarefa_text);
     document.querySelector('ul').appendChild(li);
     document.tarefas.tarefa.value = "";
     fecharTarefa(li);
 }
    let aviso = prompt('digite Seu nome :')
    let box2 =  document.getElementById('box2')
    
    
    box2.innerHTML += (aviso) 
    