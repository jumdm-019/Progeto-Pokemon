const mensagem: string = "Pokédex TypeScript Lite funcionando!"

console.log(mensagem)

import { PokeApiService } from "./services/PokeApiService";

async function main() {
    const api = new PokeApiService();

    const pokemon = await api.buscarPokemon("pikachu");

    console.log(pokemon);
}

main();