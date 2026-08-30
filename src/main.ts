import { PokeApiService } from "./services/PokeApiService";
import { CatalogoPokemon  } from "./services/CatalogoPokemon";
import { TerminalController } from "./controllers/TerminalController";



async function main() {
    const api = new PokeApiService();
    const catalogo = new CatalogoPokemon();
    const terminal = new TerminalController(api, catalogo);

      await catalogo.carregar();

      await terminal.iniciar();


}

main();