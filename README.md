# Tecfag IA 3D

Sala 3D onde a equipe de agentes de IA da Tecfag aparece trabalhando.

## Onde ver

- **Site ao vivo:** https://mcctecfag-star.github.io/tecfag-ia-3d/ (lê o Firebase; mostra só os status, sem o texto das tarefas).
- **No computador:** dois cliques em `equipe-3d.html` (lê `equipe.js` a cada 5 s, com as tarefas completas).

## A equipe

| Nome | Função | Entra em ação quando… |
|---|---|---|
| Rafa | Tráfego (Meta e Google Ads) | campanha, CPL, palavras-chave, gargalos; skills de tráfego; conector Meta Ads |
| Bia | Copy | copy, ganchos, roteiro, legenda; skill copy-tecfag |
| Nina | Curadoria de criativos | criativos, carrossel, estáticos; skill de curadoria |
| Léo | Comercial | CRM, propostas, funil de vendas; conector de CRM |
| Duda | Atendimento | RD Conversas, fila, tempo de resposta |
| Caio | Design | Canva, Figma, design system, layout, arte |
| Téo | Dados e relatórios | dashboard, relatório semanal/mensal, ROAS; Kondado |
| Ana | Automação de marketing | RD Station, e-mail, fluxos, segmentação |
| Beto | Rotina | tarefas agendadas e recorrentes |
| Vivi | E-commerce | e-commerce, VTEX, loja virtual, vendas do site |
| Joy | Revisão de design | sempre que o Caio produz algo (motion, estático, carrossel, edição de imagem) |
| Lê | Revisão de campanhas | sempre que o Rafa sobe ou altera campanha, conjunto, anúncio ou criativo |

**Revisão antes de entregar:** quando o Caio ou o Rafa fazem algo, o gancho de fim do Claude Code segura a entrega e pede a revisão da Joy ou da Lê, com a lista do que conferir (campos `revisa` e `confere` em `equipe.json`). A Lê só entra quando o Rafa sobe ou altera algo (`quandoFerramenta` e `quandoPedido`), não em análises. A revisão termina com um parágrafo "Revisão da Joy:" ou "Revisão da Lê:".

Cada um é chamado pelo nome ("Rafa, …"), pela função ("Tráfego, …"), pelo assunto da mensagem ou quando o Claude usa a skill ou o conector daquela função (campos `gatilhos`, `skills` e `ferramentas` em `equipe.json`). Vários na mesma tarefa ("Rafa e Bia, …", ou quando outro entra pela skill ou pelo conector) vão para a sala de reunião; quem trabalha sozinho fica na própria mesa.

## Como funciona

- Os ganchos do Claude Code chamam `agentes-hook.js`, que atualiza `equipe.json` e `equipe.js` quando uma mensagem fala com um agente ("Tráfego, revisa...", "@dados ...", "manda a Curadoria ...").
- `ponte.js` roda sem janela, pela tarefa "Tecfag IA - ponte" do Agendador do Windows, que liga ao entrar no computador (`instalar-ponte-oculta.ps1` cria a tarefa, `ponte-oculta.ps1` mantém a ponte ligada e a religa se cair; `ligar-ponte.bat` e `parar-ponte.bat` ligam e desligam; o registro fica em `ponte.log` e os erros de partida em `ponte-erros.log`). Ela:
  - publica a sala no Firebase a cada mudança;
  - recebe os pedidos feitos pela caixa "Pedir tarefa" do site e roda o Claude Code de terminal. Respostas completas ficam em `resultados/`.
- Só as contas `mcctecfag@gmail.com` e `tecfagfinanceiro3@gmail.com` podem mandar e ver pedidos (`regras-firebase.json`; aplique com `node ponte.js regras`).
- Pedidos da aba só podem ler, pesquisar e escrever em `resultados/` (lista `FERRAMENTAS_LIBERADAS` em `ponte.js`).
- Status: `trabalhando`, `esperando`, `reuniao`, `livre` ou `concluido`.
- Expediente de segunda a sexta, 08:00 às 18:03, com ponto na entrada.

## Arquivos que não vão para o GitHub

`firebase-chave.json` (senha do projeto), `resultados/`, `estado-sessoes.json`, `ponte.log`, `ponte-erros.log`, `node_modules/`.

## Testar

- `equipe-3d.html?hora=07:59` mostra a chegada; `?hora=17:59` a saída; `&dia=1` a `&dia=5` escolhe o dia.
- `?demo=1` mostra status de exemplo.
