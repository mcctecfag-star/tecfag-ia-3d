// Dados da equipe exibidos em equipe-3d.html.
// A página relê este arquivo a cada 15 segundos: edite e salve, os bonecos mudam sozinhos.
// status: "trabalhando" | "esperando" | "livre" | "concluido"
// mesa: 0 a 5 (0-2 fileira de trás, 3-5 fileira da frente)
// genero: "f" (mulher) ou "m" (homem)
window.EQUIPE = {
  agentes: [
    {
      id: "trafego",
      nome: "Tráfego",
      cargo: "Analista de tráfego (Meta Ads)",
      status: "esperando",
      tarefa: "Quais campanhas do Meta eu reviso primeiro?",
      cor: "#e3b448",
      mesa: 0,
      genero: "m",
      atualizadoEm: "2026-10-28T12:00:00Z"
    },
    {
      id: "copy",
      nome: "Copy",
      cargo: "Copywriter Tecfag",
      status: "livre",
      tarefa: "Aguardando a primeira tarefa",
      cor: "#f08a6c",
      mesa: 1,
      genero: "f",
      atualizadoEm: "2026-10-28T12:00:00Z"
    },
    {
      id: "curadoria",
      nome: "Curadoria",
      cargo: "Curador de criativos (servidor Z:)",
      status: "livre",
      tarefa: "Aguardando a primeira tarefa",
      cor: "#6fb3cf",
      mesa: 2,
      genero: "f",
      atualizadoEm: "2026-10-28T12:00:00Z"
    },
    {
      id: "comercial",
      nome: "Comercial",
      cargo: "Analista comercial (CRM e funil)",
      status: "livre",
      tarefa: "Aguardando a primeira tarefa",
      cor: "#6fcf8e",
      mesa: 3,
      genero: "m",
      atualizadoEm: "2026-10-28T12:00:00Z"
    }
  ],
  mural: [
    { quem: "Equipe", texto: "Escritório aberto com 4 agentes contratados", quando: "2026-10-28T12:00:00Z" }
  ]
};
