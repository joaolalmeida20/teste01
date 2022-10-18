function criarUsuario(nome, email, senha, tipo = "leitor") {
    const usuario = { nome, email, senha, tipo }
    console.log(usuario)
  }
  
  function novoUsuario(nome, tipo = "leitor", email = "jhon@", senha = "1666") {
    const usuario = { nome, email, senha, tipo }
    console.log(usuario)
  }
  
  criarUsuario("Isaac", "isaac@email.com", "1234")
  novoUsuario("Isaac")