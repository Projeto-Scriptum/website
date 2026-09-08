# 🌻 Projeto Scriptum - Website Oficial

Bem-vindo(a) ao repositório público do **Projeto Scriptum**! 

Este projeto foi construído colaborativamente por uma equipe de voluntários, muitos dos quais estão aprendendo a programar do zero. Nosso objetivo é mobilizar pessoas para criarem espaços de expressão, pertencimento e cuidado com a saúde mental através da arte e da escrita, com foco principal em jovens e adolescentes.

---

## 🛠️ Guia para Iniciantes: Como rodar o projeto no seu computador

Se você é novo(a) na programação ou faz parte da nossa equipe de voluntários, não se preocupe! Siga este passo a passo detalhado para configurar tudo no seu computador.

### Passo 1: Instalar as ferramentas necessárias

Antes de mexer no código, você precisa de três programas básicos instalados:
1. **Node.js**: É o "motor" que vai rodar o nosso site enquanto estamos desenvolvendo. Baixe a versão "LTS" (Recomendada) no site oficial e instale normalmente (só dar *Next*, *Next*, *Install*): [nodejs.org](https://nodejs.org/)
2. **Git**: É o que faz a ponte entre o seu computador e este repositório no GitHub. Baixe aqui: [git-scm.com](https://git-scm.com/)
3. **VS Code (Visual Studio Code)**: É o bloco de notas especial onde vamos escrever nosso código. Baixe aqui: [code.visualstudio.com](https://code.visualstudio.com/)

### Passo 2: Configurar o seu Git

Para o seu computador ter permissão de mandar código para cá, precisamos dizer ao Git quem é você. 
Abra o programa **"Git Bash"** (que veio junto quando você instalou o Git) ou o próprio terminal do VS Code e digite estes dois comandos (apertando *Enter* após cada um). Lembre-se de colocar seus dados reais dentro das aspas:

```bash
git config --global user.name "Seu Nome Completo"
git config --global user.email "seu_email_usado_no_github@exemplo.com"
```

### Passo 3: Clonar o Repositório (Baixar o código)

Agora vamos puxar todo o código atual do site para a sua máquina. No terminal, escolha a pasta onde quer guardar o projeto e rode o comando abaixo:

```bash
git clone https://github.com/Projeto-Scriptum/website.git
```

Isso vai criar uma pasta chamada `website`. Para entrar nela pelo terminal, digite:

```bash
cd website
```

### Passo 4: Instalar as dependências

O nosso projeto usa o **React** e o **Vite**. Eles são como "peças de lego" pré-fabricadas. Para baixar todas essas peças, estando dentro da pasta `website`, rode:

```bash
npm install
```
*(Ele vai carregar uma barrinha e baixar muita coisa. É normal demorar um pouquinho!)*

### Passo 5: Rodar o projeto! 🚀

Tudo instalado! Para ver o site vivo no seu navegador e começar a trabalhar, digite:

```bash
npm run dev
```

O terminal vai te mostrar um link local (geralmente `http://localhost:5173/`). Segure a tecla `Ctrl` no teclado e clique no link (ou copie e cole no seu Chrome). 

Pronto! Agora é só abrir a pasta do projeto no VS Code. Toda vez que você alterar um arquivo (`.tsx` ou `.css`) e salvar (`Ctrl + S`), a tela do navegador vai atualizar sozinha como mágica.

---

## 💻 Sobre a Tecnologia

Este site é construído com tecnologias modernas voltadas para o ecossistema Web:
- **React**: Biblioteca para criação de interfaces dividida em Componentes.
- **TypeScript**: Para ajudar iniciantes (e experts) a evitar erros bobos no JavaScript.
- **Vite**: Uma ferramenta super rápida que constrói o projeto em segundos.
- **CSS**: Estilização purinha usando Flexbox e Grid!

*Acreditamos que, por meio da arte e da escrita, podemos descobrir novas formas de expressão, convivência e cuidado.*
