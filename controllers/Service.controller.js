import axios from "axios";
import configs from "../app.config.json";
const endpoints = configs.endpoints;
let endpoint = endpoints.producao;

switch (process.env.NODE_ENV) {
  case "development":
    endpoint = endpoints.homologacao;
    break;
  case "production":
    endpoint = endpoints.producao;
    break;
  case "preproduction":
    endpoint = endpoints.preproducao;
    break;
}
// if ("ambiente" in sessionStorage) {
//   switch (sessionStorage.getItem("ambiente")) {
//     case "development":
//       endpoint = endpoints.homologacao;
//       break;
//     case "production":
//       endpoint = endpoints.producao;
//       break;
//     case "preproduction":
//       endpoint = endpoints.preproducao;
//       break;
//   }
// }
export default class Service {
  constructor(BASE_URL) {
    this.axios = axios.create({ baseURL: BASE_URL ? BASE_URL : endpoint });
    this.BASE_URL = endpoint || BASE_URL;
    const ID_LOGIN_SI = ""; // vai ser dinamico
    const ORIGEM = "";
    this.ENDPOINTS = {
      GETLOGINS: "logins?url=" + ORIGEM,
      LOGIN: "login/" + ID_LOGIN_SI, // ID do login do SI Dinamico
      ACEITETERMO: "CustomUserApps/aceiteTermo",
      // GETTERMOCOMPRA            : 'pessoa/cadastro/termo?tipo=2',
      ATUALIZASESSAO: "CustomUserApps/atualizaSessao",

      DADOSCADASTRAIS: "pessoa/cadastro/dados",
      TROCARSENHA: "pessoa/cadastro/trocar/senha",
      RECUPERARSENHA: "pessoa/cadastro/recuperar/senha",
      RECUPERARSENHANOVASENHA: "pessoa/cadastro/recuperar/nova",
      CONFIRMAREMAIL: "pessoa/cadastro/confirmar/email",

      GETCONTEUDOS: "cms/conteudos/",
      GETCONTEUDO: "cms/conteudo/",

      GETSACPERGUNTAS: "SAC/perguntas-frequentes",
      CADASTROPESSOA: "cadastro/" + ID_LOGIN_SI, // ID do login do SI Dinamico

      CONFIGS: "CustomUserApps/Configs",
      SETCONTATO: "CustomUserApps/Contato",
      NEWSLETTER: "CustomUserApps/Newsletter",
      VALIDAREMAIL: "CustomUserApps/ValidaEmail",
      VALIDARDOC: "CustomUserApps/ValidaDoc",
      RECEBERDOC: "CustomUserApps/receberDoc",
      GETDOCS: "CustomUserApps/getDocs",
      SETDOCS: "CustomUserApps/setDocs",
      REMOVEDOCS: "CustomUserApps/removeDocs",
      ESCUDOS: "CustomUserApps/Escudos",
      GETROLDANAS: "CustomUserApps/getSubcategorias",
      VALIDARCARTOES: "CustomUserApps/consultaCartaoSocio",
      BOTOESPLANOS: "CustomUserApps/getAcoesDisponiveis",
      GETCOMPRASCUSTOM: "CustomUserApps/PedidosPaginado",
      GETJOGOSQUEFUI: "CustomUserApps/jogosQueFui",
      GETACESSOLIBERADO: "customUserApps/AcessoLiberado",
      GETCONTRATOSVINCULOCADEIRA:
        "CustomUserApps/consultaContratosVinculoCadeira",
      GETCUPOMDESCONTO: "CustomUserApps/getCuponsDesconto",
      CADASTROESTRANGEIRO: "CustomUserApps/cadastroEstrangeiro",

      // SUPERINGRESSO

      GETEVENTOS: "getEventos",
      GETAPRESENTACOES: "getApresentacoes",
      GETAPRESENTACAO: "getApresentacao",
      GETPRODUTOS: "getProdutos",
      SETCARRINHO: "iniciarReserva",
      GETCARRINHOPAGE: "getCarrinhoPage",
      GETCARRINHOPAGEITENS: "getCarrinhoPageItens",
      CANCELARRESERVA: "cancelarReserva",
      CANCELACOMPRA: "cancelaCompra",
      GETIMPRESSAO: "getImpressao",
      SETPORTADORITEM: "portadorSetItem",
      INICIARTROCAVOUCHER: "iniciarTrocaVoucher",
      GETGATEWAYPAGAMENTO: "getGatewayPagamento",
      VALIDARENDERECO: "TransportadoraValidaEnderecoEntrega/",
      VALIDARPORTADORVARIAVEIS: "portadorGetVariaveisTemplate",

      //ENVIO CONSULADO

      QUANTIDADECONSUL: "solicitacaoConsulado",
      GETQUANTCONSUL: "ingressosConsulado",

      // GESTÃO SÓCIO
      FORMAPAGCONTRATO: "CustomUserApps/getFormaPagamento",
      FORMAPAGALTERAR: "CustomUserApps/getFormasAlterar",

      // OTT
      LOGINOTT: "CustomUserApps/OTT/login",
      GETRECOMENDACOES: "CustomUserApps/OTT/getVideos",
      CRIARUSUARIOOTT: "CustomUserApps/OTT/createUser",
      ALTERARPLANOOTT: "CustomUserApps/OTT/changeSubscription",

      //CHECK-IC
      SETORECHECKIN: "CustomUserApps/getSetoresCheckin",
      REALIZARCHECKIN: "CustomUserApps/realizarCheckin",

      // GAMEFICAÇÃO
      CADASTROGAMEFICACAO: "gamification/registerPerson",
      CONSULTARITEMRESGATADO: "gamification/getRescuedItem",
      CONSULTARRESGATES: "gamification/getRescueds",
      RESGATARITEM: "gamification/redeemItem",
      CONSULTARITEMCATALOGO: "gamification/getCatalogItem",
      CONSULTARCATALOGO: "gamification/getCatalog",
      CONSULTARNIVEIS: "gamification/getLevels",
      CONSULTARNIVEL: "gamification/getPersonLevel",
      CONSULTARPESSOA: "gamification/getPerson",
      CONSULTARPONTOS: "gamification/getPointsExtract",
      CONSULTAREVENTOSFIXOS: "gamification/fixedChallenges",
      CONSULTAREVENTOSMENSAIS: "gamification/monthlyChallenges	",

      // FILA
      GETFILA: "queue/position",

      //ADMIN CONTEÚDOS
      CRIARCONTEUDO: "cms/criarConteudo",
      EDITARCONTEUDO: "cms/editarConteudo",
    };
  }
}
