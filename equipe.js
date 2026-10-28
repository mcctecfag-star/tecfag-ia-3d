// Dados da equipe exibidos em equipe-3d.html.
// A página relê este arquivo a cada 15 segundos: edite e salve, os bonecos mudam sozinhos.
// status: "trabalhando" | "esperando" | "reuniao" | "livre" | "concluido"
// mesa: 0 a 7 (0-3 fileira de trás, 4-7 fileira da frente)
// aparencia:
//   pele: cor em hex
//   cabelo: "curto" | "longo" | "coque" | "rabo" | "afro" | "cacheado" | "trancas" | "careca"
//   corCabelo, calca: cor em hex
//   barba, oculos, tatuagem: true ou false
window.EQUIPE = {
  agentes: [
    {
      id: "trafego", nome: "Tráfego", cargo: "Analista de tráfego (Meta Ads)",
      status: "esperando", tarefa: "Quais campanhas do Meta eu reviso primeiro?",
      cor: "#e3b448", mesa: 0,
      aparencia: { pele: "#5c3a24", cabelo: "curto", corCabelo: "#151010", barba: true, oculos: false, tatuagem: true, calca: "#1f2a38" },
      atualizadoEm: "2026-10-28T12:00:00Z"
    },
    {
      id: "copy", nome: "Copy", cargo: "Copywriter Tecfag",
      status: "livre", tarefa: "Aguardando a primeira tarefa",
      cor: "#f08a6c", mesa: 1,
      aparencia: { pele: "#f3d3bd", cabelo: "longo", corCabelo: "#a4472a", barba: false, oculos: true, tatuagem: false, calca: "#2d3a52" },
      atualizadoEm: "2026-10-28T12:00:00Z"
    },
    {
      id: "curadoria", nome: "Curadoria", cargo: "Curadora de criativos (servidor Z:)",
      status: "livre", tarefa: "Aguardando a primeira tarefa",
      cor: "#6fb3cf", mesa: 2,
      aparencia: { pele: "#7a4a2e", cabelo: "afro", corCabelo: "#1a1210", barba: false, oculos: false, tatuagem: true, calca: "#3b2f4a" },
      atualizadoEm: "2026-10-28T12:00:00Z"
    },
    {
      id: "comercial", nome: "Comercial", cargo: "Analista comercial (CRM e funil)",
      status: "livre", tarefa: "Aguardando a primeira tarefa",
      cor: "#6fcf8e", mesa: 3,
      aparencia: { pele: "#f1c9a5", cabelo: "curto", corCabelo: "#d9b36c", barba: false, oculos: false, tatuagem: false, calca: "#25303f" },
      atualizadoEm: "2026-10-28T12:00:00Z"
    },
    {
      id: "atendimento", nome: "Atendimento", cargo: "Atendimento (RD Conversas)",
      status: "livre", tarefa: "Aguardando a primeira tarefa",
      cor: "#ff7eb6", mesa: 4,
      aparencia: { pele: "#c68c5e", cabelo: "coque", corCabelo: "#4a2c1c", barba: false, oculos: false, tatuagem: false, calca: "#1f2a38" },
      atualizadoEm: "2026-10-28T12:00:00Z"
    },
    {
      id: "designer", nome: "Designer", cargo: "Designer (Canva e Figma)",
      status: "livre", tarefa: "Aguardando a primeira tarefa",
      cor: "#b18cff", mesa: 5,
      aparencia: { pele: "#a86b45", cabelo: "cacheado", corCabelo: "#1c1410", barba: true, oculos: false, tatuagem: true, calca: "#2f2f2f" },
      atualizadoEm: "2026-10-28T12:00:00Z"
    },
    {
      id: "dados", nome: "Dados", cargo: "Analista de dados e BI (Kondado)",
      status: "livre", tarefa: "Aguardando a primeira tarefa",
      cor: "#54d6ff", mesa: 6,
      aparencia: { pele: "#eecba6", cabelo: "curto", corCabelo: "#101014", barba: false, oculos: true, tatuagem: false, calca: "#3a4656" },
      atualizadoEm: "2026-10-28T12:00:00Z"
    },
    {
      id: "automacao", nome: "Automação", cargo: "Automação de marketing (RD Station)",
      status: "livre", tarefa: "Aguardando a primeira tarefa",
      cor: "#ffd166", mesa: 7,
      aparencia: { pele: "#4a2c1c", cabelo: "trancas", corCabelo: "#120c0a", barba: false, oculos: true, tatuagem: false, calca: "#2b3546" },
      atualizadoEm: "2026-10-28T12:00:00Z"
    }
  ],
  mural: [
    { quem: "Equipe", texto: "Escritório aberto com 4 agentes contratados", quando: "2026-10-28T12:00:00Z" },
    { quem: "Equipe", texto: "Chegaram Atendimento, Designer, Dados e Automação", quando: "2026-10-28T13:00:00Z" }
  ]
};
