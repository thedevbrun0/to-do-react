#  To-Do List React

Aplicação **To-Do List** desenvolvida com **React**, com foco em componentização, manipulação de estado e persistência de dados no navegador.  
O projeto está **publicado e acessível online**.

 **Deploy:** https://todolist-usereact.netlify.app/

---

##  Funcionalidades

-  Adicionar novas tarefas
-  Marcar tarefas como concluídas através de um **checkbox**
-  Tarefas concluídas são riscadas dinamicamente
-  Cada tarefa possui um **ícone de lixeira** para exclusão individual
-  Validação no input para impedir o cadastro de tarefas vazias
-  Botão para **apagar todas as tarefas**, exibido apenas quando há itens na lista
-  **Persistência de dados** utilizando **localForage**, mantendo as tarefas salvas mesmo após recarregar a página

---

##  Desafios e aprendizados

Durante o desenvolvimento, os principais desafios foram:

- Separar a aplicação em **componentes React**
- Passar **funções via props** para comunicação entre componentes
- Alterar dinamicamente a **className** de um item da lista ao marcar o checkbox
- Implementar **persistência de dados** no navegador utilizando o **localForage**

Esses desafios me ajudaram a ter uma melhor compreensão do fluxo de dados no React e boas práticas de organização de código.

---

##  Tecnologias utilizadas

- React
- JavaScript
- Vite
- CSS
- localForage
- Netlify (deploy)

---

## Deploy

O projeto está hospedado no **Netlify** e pode ser acessado através do link abaixo:

 https://todolist-usereact.netlify.app/

---

##  Como rodar o projeto localmente

Para executar o projeto em sua máquina local, siga os passos abaixo:

```bash

# Clone o repositório
git clone https://github.com/thedevbrun0/to-do-react.git

# Acesse a pasta do projeto
cd to-do-react

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
