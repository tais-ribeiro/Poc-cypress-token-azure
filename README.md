# PoC de Autenticação no Azure AD com Cypress

Este repositório contém uma prova de conceito (PoC) para autenticação de usuários em um aplicativo utilizando o Azure Active Directory (Azure AD) com Cypress. O objetivo deste projeto é demonstrar como integrar a autenticação do Azure AD em testes de API automatizados, garantindo que a aplicação esteja protegida e acessível apenas para usuários autenticados.

## Tecnologias Utilizadas

- **Cypress**: Uma ferramenta de teste de integração para aplicações web.
- **Azure Active Directory**: Serviço de gerenciamento de identidade e acesso da Microsoft.

## Estrutura do Projeto

O projeto é estruturado da seguinte forma:

- `cypress/`: Contém os testes automatizados e as configurações do Cypress.
- `support/`: Contém funções de suporte e comandos personalizados para facilitar a interação com o Azure AD.

## Funcionalidades

O projeto implementa as seguintes funcionalidades:

1. **Login no Azure AD**: Automatiza o processo de login usando as credenciais configuradas.
2. **Verificação de MFA**: Suporte para pular a configuração de autenticação multifator, se necessário.
3. **Geração de Token de Acesso**: Capacidade de gerar tokens de acesso para recursos protegidos.

