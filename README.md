autenticacao_azure_ad:
  descricao: >
    Este código é uma prova de conceito (PoC) para autenticar usuários em um 
    aplicativo utilizando o Azure Active Directory (Azure AD) em testes automatizados de API
    com Cypress. O processo de autenticação envolve várias etapas, que são detalhadas a seguir:
  
  etapas:
    - nome: "Visita ao Frontend"
      descricao: >
        O teste começa acessando a URL do frontend da aplicação, onde a autenticação 
        será realizada.
    
    - nome: "Login no Azure AD"
      descricao: >
        Utiliza a função `loginAzureAd`, que automatiza o login no Azure AD. A função 
        usa as credenciais (nome de usuário e senha) configuradas no ambiente para 
        interagir com a página de login da Microsoft.

    - nome: "MFA (Autenticação Multifator)"
      descricao: >
        A função também verifica se deve pular a configuração de MFA (Multi-Factor 
        Authentication). Se a configuração permitir, um link para pular o processo de 
        configuração de MFA é clicado.

    - nome: "Verificação de Autenticação"
      descricao: >
        Após o login, o código obtém a instância do MSAL (Microsoft Authentication Library) 
        da aplicação. Em seguida, espera até que a autenticação seja confirmada, 
        verificando se o usuário está autenticado com sucesso.

    - nome: "Geração de Token"
      descricao: >
        A função `generateTokenMsal` é responsável por solicitar um token de acesso 
        para um recurso específico, utilizando a instância do MSAL. O token é armazenado 
        em uma variável de ambiente do Cypress para uso posterior nos testes.

    - nome: "Comandos Personalizados"
      descricao: >
        Dois comandos personalizados (`loginAzureAd` e `generateTokenMsal`) são adicionados 
        ao Cypress, facilitando o processo de login e a geração de tokens em outros testes.
