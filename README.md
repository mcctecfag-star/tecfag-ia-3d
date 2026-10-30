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

Cada um é chamado pelo nome ("Rafa, …"), pela função ("Tráfego, …"), pelo assunto da mensagem ou quando o Claude usa a skill ou o conector daquela função (campos `gatilhos`, `skills` e `ferramentas` em `equipe.json`). Vários na mesma tarefa: "Rafa e Bia, …"; com a palavra "reunião" eles vão para a sala de reunião.

## Como funciona

- Os ganchos do Claude Code chamam `agentes-hook.js`, que atualiza `equipe.json` e `equipe.js` quando uma mensagem fala com um agente ("Tráfego, revisa...", "@dados ...", "manda a Curadoria ...").
- `ponte.js` roda sem janela, pela tarefa "Tecfag IA - ponte" do Agendador do Windows, que liga ao entrar no computador (`instalar-ponte-oculta.ps1` cria a tarefa; `ligar-ponte.bat` e `parar-ponte.bat` ligam e desligam; o registro fica em `ponte.log`). Ela:
  - publica a sala no Firebase a cada mudança;
  - recebe os pedidos feitos pela caixa "Pedir tarefa" do site e roda o Claude Code de terminal. Respostas completas ficam em `resultados/`.
- Só as contas `mcctecfag@gmail.com` e `tecfagfinanceiro3@gmail.com` podem mandar e ver pedidos (`regras-firebase.json`; aplique com `node ponte.js regras`).
- Pedidos da aba só podem ler, pesquisar e escrever em `resultados/` (lista `FERRAMENTAS_LIBERADAS` em `ponte.js`).
- Status: `trabalhando`, `esperando`, `reuniao`, `livre` ou `concluido`.
- Expediente de segunda a sexta, 08:00 às 18:00, com ponto na entrada.

## Arquivos que não vão para o GitHub

`firebase-chave.json` (senha do projeto), `resultados/`, `estado-sessoes.json`, `ponte.log`, `node_modules/`.

## Testar

- `equipe-3d.html?hora=07:59` mostra a chegada; `?hora=17:59` a saída; `&dia=1` a `&dia=5` escolhe o dia.
- `?demo=1` mostra status de exemplo.
