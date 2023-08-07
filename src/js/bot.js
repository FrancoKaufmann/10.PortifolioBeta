const select = document.querySelector("#sel");
const ul = document.querySelector("#ul");

const atrasoEmMilissegundos = 1000;
const audio = document.querySelector('audio');

function opção1() {
    const select = document.querySelector("select");
    const selectOption = select.value;

    const newLi = document.createElement('li');
    newLi.innerText = 'Durante o ensino médio, realizei uma prova de aptidão e obtive sucesso ao ingressar na FAETEC para o curso de Segurança do Trabalho em 2019. Agora estou na Estácio, estudando Sistemas de Informação.';
    audio.play();
    ul.appendChild(newLi);
    
}

function opção2() {
    const newLi = document.createElement('li');
    newLi.innerText = 'Tenho total disponibilidade e flexibilidade de horário, pois estudo em formato EAD e posso adaptar meus estudos ao estágio.';
    audio.play();
    ul.appendChild(newLi);
}

function opção3() {
    const newLi = document.createElement('li');
    newLi.innerText = 'No momento estou no 4º período.';
    audio.play();
    ul.appendChild(newLi);
}

function opção4() {
    const newLi = document.createElement('li');
    newLi.innerText = 'Sempre fui muito apaixonado pela área de tecnologia e, ao iniciar a faculdade, essa paixão só aumentou. Acredito que a tecnologia é o motor que impulsiona o mundo e, por meio dela, podemos nos conectar de maneiras incríveis. Estou entusiasmado em fazer parte dessa aréa dinâmica e contribuir para o progresso e inovação que a tecnologia traz para a sociedade.';
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

    if(selectOption === 'opcao4') {
        const newLi2 = document.createElement('li');
        newLi2.innerText = 'Qual a razão para optar por estudar Sistemas de Informação?';
        ul.appendChild(newLi2);
        audio.play();
        setTimeout(opção4, atrasoEmMilissegundos);
        
    }
   
}