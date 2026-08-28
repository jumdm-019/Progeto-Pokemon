import { PokeApiService } from "./services/PokeApiService";
import { CatalogoPokemon  } from "./services/CatalogoPokemon";


const mensagem: string = "Pokédex TypeScript Lite funcionando!"

console.log(mensagem)


async function main() {
    const api = new PokeApiService();
    const catalogo = new CatalogoPokemon()

    const pokemon = await api.buscarPokemon("pikachu");

    if(pokemon !== null){
        catalogo.adicionar(pokemon)

        catalogo.adicionar(pokemon)
    }


    catalogo.listar()

    if(pokemon !== null){
        catalogo.remover(pokemon.id)
    }

    catalogo.listar()


    const pokemonInexistente = await api.buscarPokemon("pokemon456")

      if(pokemonInexistente === null){
        console.log("[AVISO] Pokémon não encontrado.")
      }


}

main();