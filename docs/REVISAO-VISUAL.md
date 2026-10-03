# Revisão visual e estática — 03/10/2026

Foram revisadas a página inicial, a galeria, o voluntariado e a página 404. As alterações preservam a identidade em amarelo, preto, fundo claro e títulos em Kalam, além da inclusão de Propósito na Home e da margem de 4rem do manifesto que já estavam no workspace.

O envio foi separado por escopo: as correções da seção Propósito estão no PR #36 (`secao-por-que-existimos`); as melhorias gerais ficam em um follow-up draft baseado nessa branch. O levantamento das issues está em [ISSUES-REVISADAS.md](./ISSUES-REVISADAS.md).

## Problemas corrigidos e melhorias

| Achado | Alteração |
| --- | --- |
| A classe global `.card` de Propósito interferia nos cards de atividades. | Os estilos dos pilares passaram a usar `.proposito-pilar`, com seletores próprios. |
| Hero e Propósito repetiam o identificador `sobre`. | A âncora identifica somente Propósito, que também recebe foco na navegação. |
| A Home tinha dois `h1`. | O manifesto usa `h2`; cada página mantém um título principal. |
| Margens fixas de 7.5rem e padding duplicado no Hero comprimiam o conteúdo. | Margens fluidas compartilhadas, largura máxima consistente e tipografia responsiva. |
| A navegação ocupava várias linhas no celular. | Menu expansível com estado acessível, fechamento após navegação e suporte a Escape com retorno do foco. |
| O FAQ usava um botão dentro de outro elemento com papel de botão. | Cada pergunta tem um único botão nativo; respostas fechadas ficam ocultas. |
| O botão de ajuda mostrava um celular desligado e não tinha nome útil no mobile. | Ícone de telefone com “188”, nome acessível, borda e respeito às áreas seguras da tela. |
| Fontes dependiam de um CSS externo do Google. | Kalam e Open Sans são servidas localmente, com três arquivos WOFF2 e `font-display: swap`. |
| A foto de Propósito não tinha alternativa em caso de falha. | Dimensões reservadas, carregamento lazy e ilustração local quando a imagem externa falha. |
| Faltavam ações na apresentação e navegação ao final das páginas. | Links para participação e atividades no Hero e rodapé com links principais. |
| O documento declarava inglês e todas as rotas tinham o mesmo título. | Idioma `pt-BR`, descrição do site, tipo correto do favicon e títulos por página. |

## Validação

- `npm.cmd run build`: passou, incluindo TypeScript e compilação de produção.
- `npm.cmd run lint`: passou.
- `git diff --check`: passou.
- Chromium/Playwright: 36 combinações de quatro rotas e nove larguras — 320, 390, 600, 601, 768, 900, 901, 1024 e 1440 px — na versão de produção servida pelo Vite Preview. Nenhum erro de execução, identificador duplicado, imagem quebrada após carregamento, elemento de conteúdo fora da tela ou rolagem horizontal nessas combinações.
- Inspeção das capturas em mobile, tablet e desktop, incluindo início, galeria e voluntariado.
- Interações verificadas em desenvolvimento e produção: menu por teclado, Escape, foco nas âncoras, navegação entre páginas, chamada de participação, destino do formulário externo, FAQ por Enter/Espaço e link para pular ao conteúdo.
- axe-core com as tags `wcag2a`, `wcag2aa` e `wcag21aa`: nenhuma violação detectada nas quatro rotas, em 390 e 1440 px. Essa verificação automatizada não equivale a uma certificação completa de acessibilidade.

As capturas, métricas JSON e scripts do ensaio estão em `.visual-audit.local/`, ignorada pelo Git. Playwright e axe-core foram instalados somente nessa pasta de trabalho; não foram adicionados às dependências do site.

O antivírus do computador injetou um script externo que impediu a navegação direta do Chromium no primeiro ensaio. Na validação automatizada, a ferramenta de teste entregou ao navegador as respostas dos servidores locais via interceptação de requisições. As proteções do computador não foram alteradas. A foto externa foi bloqueada deliberadamente no ensaio para verificar a alternativa local; sua disponibilidade real não foi confirmada.

## Pendências de conteúdo e hospedagem

As atividades ainda usam ilustrações provisórias, e a galeria contém obras e autorias fictícias já identificadas como demonstrativas. A melhoria principal de conteúdo continua sendo substituir esses materiais por registros autorizados do projeto, conforme o README.

A hospedagem publicada ainda deve confirmar o fallback de rotas para `index.html`. As rotas foram verificadas localmente; esta revisão não publicou o site nem validou o serviço externo de inscrições.
