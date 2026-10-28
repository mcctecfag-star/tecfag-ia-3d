# Tecfag IA 3D

Sala 3D onde a equipe de agentes de IA da Tecfag aparece trabalhando.

## Como abrir

Dê dois cliques em `equipe-3d.html` (Chrome ou Edge). Precisa de internet, porque o motor 3D (Three.js) e as fontes são baixados na hora.

## Como funciona

- A equipe fica em `equipe.js`. A página relê esse arquivo a cada 15 segundos.
- Status de cada agente: `trabalhando`, `esperando`, `livre` ou `concluido`.
- `genero`: `"f"` para mulher, `"m"` para homem.
- Expediente de segunda a sexta. Às 08:00 os agentes entram pela porta e batem o ponto; às 18:00 batem o ponto de saída e vão embora. Fora desse horário a sala fica na meia-luz.

## Testar o ponto

Abra com um horário simulado no endereço:

- `equipe-3d.html?hora=07:59` mostra a chegada às 08:00
- `equipe-3d.html?hora=17:59` mostra a saída às 18:00
- `&dia=1` a `&dia=5` escolhe o dia da semana (1 = segunda)
