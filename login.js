// funcao de cadastro
document.querySelector("#cadastrar").addEventListener("submit", async (event) => {
    event.preventDefault();
  
    const usuario = document.querySelector("#usuario").value;
    const email = document.querySelector("#email").value;
    const senha = document.querySelector("#senha").value;
    const confirmacao = document.querySelector("#senhaConfirmacao").value;
  
    if (senha !== confirmacao) {
         msgerror.textcontent = ""
    }
  
    try {
        const response = await fetch('http://localhost:3000//usuarioA/senha',{
            method: "POST",
            headers: {
                "Content-Type": "application/json" // Adiciona o cabeçalho correto
            },
            body: JSON.stringify({
        
                usuario: usuario,
                email: email,
                Senha: senha
                
            })
        });
  
        if (response.ok) {
            alert("Cadastro realizado com sucesso!", "success");
        } else {
            const data = await response.json();
            alert(data.error || "Erro ao realizar cadastro.", "danger");
        }
    } catch (error) {
        console.error("Erro ao fazer cadastro:", error);
        alert("Erro ao tentar cadastrar. Tente novamente mais tarde.", "danger");
    }
  });
  

// Login do usuário
document.querySelector("#botaologin").addEventListener("click", async (event) => {
    event.preventDefault();

    const usuario = document.querySelector("#usuario").value;
    const senha = document.querySelector("#usuario").value;
    console.log(usuario, senha)
    if (usuario != '' && senha != '') {
       
        try {
            const response = await fetch(`http://localhost:3000/login/${usuario}/${senha}`);
            if (response.status == 200) {

                // window.location.replace("../html/noticias.html"); // Redireciona para a página home
                alert('Login realizado com sucesso!!')
           
            } else {
                alert('Usuário ou senha incorretos!', 'danger');
            }
        } catch (error) {
            console.error('Erro ao fazer login:', error);
            alert('Erro ao tentar fazer login. Tente novamente mais tarde.', 'danger');
        }
    } else {
        alert('Preencha todos os campos!', 'warning');
    }
});


// Código para a transição de telas
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const main = document.getElementById('main');

      signUpButton.addEventListener('click',() => {
       main.classList.add("right-panel-active");
      })

      signInButton.addEventListener('click',() => {
       main.classList.remove("right-panel-active");
      })



const botao = document.querySelector('#Botao')
const vazio = document.querySelector('#vazio')
botao.addEventListener('click', function() {
    vazio.innerText = 'Hello World'
})
