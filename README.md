# Project-syonet

Desafio de automação de teste no site The Internet. Validações de login com sucesso/insucesso e loader dinamico

# Pré-requisitos
Node.js instalado

Cypress instalado

# Configuração do Ambiente

Criar repositório no git

Clonar repositório no projeto 
> comando: git clone https://github.com/leticiarijo/project-syonet.git

Instale as depencias
> comando: npm install


# Executar os Testes
**Executar a suite teste completa**
> comando: npx cypress run


**Executar os testes separadamente**

->Form Athentication
> comando: npx cypress run --spec cypress/e2e/formAthentication.cy.js

->Dynamic Loading
> comando: npx cypress run --spec cypress/e2e/dynamicLoading.cy.js


# Relatórios
Os relatórios de cada teste é possivel visualizar em cypress\report\mochawesome-report, disponilizado em html










