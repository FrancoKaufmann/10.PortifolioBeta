const select = document.querySelector("#sel");
const ul = document.querySelector("#ul");

const firstOption = select.options[1];
const secondOption = select.options[2];
const thairdOption = select.options[3];
const atrasoEmMilissegundos = 1000;
const audio = document.querySelector('audio');

function opção1() {
    const select = document.querySelector("select");
    const selectOption = select.value;

    const newLi = document.createElement('li');
    newLi.innerText = 'No ensino medio estudei da FAETEC e fiz um curso tecnico de segurança';
    audio.play();
    ul.appendChild(newLi);
    
}

function opção2() {
    const newLi = document.createElement('li');
    newLi.innerText = 'Tenho disponiblidade e flexibilidade para qualquer horario';
    audio.play();
    ul.appendChild(newLi);
}

function opção3() {
    const newLi = document.createElement('li');
    newLi.innerText = 'No momento estou no 4º periodo';
    audio.play();
    ul.appendChild(newLi);
}

function clicou() {
    const select = document.querySelector("select");
    const selectOption = select.value;
    audio.play();

    if(selectOption === 'opcao1') {
        const newLi2 = document.createElement('li');
        newLi2.innerText = 'Qual escola estudou?';
        audio.play();
        ul.appendChild(newLi2);
        audio.play();
        setTimeout(opção1, atrasoEmMilissegundos);
        

        
    }

    if(selectOption === 'opcao2') {
        const newLi2 = document.createElement('li');
        newLi2.innerText = 'Tem disponiblidade de horario?';
        ul.appendChild(newLi2);
        audio.play();
        setTimeout(opção2, atrasoEmMilissegundos);
        
    }

    if(selectOption === 'opcao3') {
        const newLi2 = document.createElement('li');
        newLi2.innerText = 'Está em qual periodo?';
        ul.appendChild(newLi2);
        audio.play();
        setTimeout(opção3, atrasoEmMilissegundos);
        
    }
   
}