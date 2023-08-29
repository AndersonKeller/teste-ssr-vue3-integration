import GestaoSocio from "../../controllers/GestaoSocio.controller";
const gestaoSocio = new GestaoSocio();
export async function getMatches() {
  const res = await gestaoSocio.getProximosJogos();
  return res.data.result.splice(0, 2);
}
export const partidas = await getMatches();
