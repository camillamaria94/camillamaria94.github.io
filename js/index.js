// Supondo que o SDK da Incognia tenha uma função chamada `getSessionToken` que retorna o "session token"

async function getSessionToken(){
    const sessionToken = await IncogniaWebSdk.getSessionToken()
    console.log(sessionToken)
    return sessionToken
  }


// Função para preencher o campo de input com o "session token"

async function preencherSessionToken() {
    const sessionToken = await getSessionToken();
    document.getElementById("session-token").innerText = "Session Token: " + sessionToken;
  }
// Chamando a função para preencher o campo de input quando a página é carregada
