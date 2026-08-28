import {PokemonResumo} from "../models/Pokemon"

export class CatalogoPokemon {
    private pokemons : PokemonResumo[] = []

    adicionar(pokemon: PokemonResumo): void{
        
       const jaExiste = this.pokemons.some((item) => item.id === pokemon.id); 

       if(jaExiste === true){
        console.log(`[AVISO] ${pokemon.nome} ja está no catálogo.`)
        return;
       }


       this.pokemons.push(pokemon)

       console.log(`Pokemon ${pokemon.nome} adicionado com sucesso`)
    }

    listar(): void {
        if(this.pokemons.length === 0){
            console.log("[Aviso] Catálogo vazio.")
            return;
        }

         this.pokemons.forEach((pokemon) => {
            console.log(pokemon.nome)
        })
    }

}