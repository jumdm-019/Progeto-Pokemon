import {PokemonResumo} from "../models/Pokemon"
import { BoxService } from "./BoxService";

export class CatalogoPokemon {
    private pokemons : PokemonResumo[] = []
    private boxService: BoxService

    constructor() {
        this.boxService = new BoxService();
    }

    async carregar(): Promise<void> {
        const pokemons = await this.boxService.ler();
        this.pokemons = pokemons;
    }

   async adicionar(pokemon: PokemonResumo): Promise<void>{
        
       const jaExiste = this.pokemons.some((item) => item.id === pokemon.id); 

       if(jaExiste === true){
        console.log(`[AVISO] ${pokemon.nome} já está no catálogo.`)
        return;
       }


       this.pokemons.push(pokemon)

      await this.boxService.salvar(this.pokemons)

       console.log(`Pokemon ${pokemon.nome} adicionado com sucesso`)
    };

    listar(): void {
        if(this.pokemons.length === 0){
            console.log("[AVISO] Catálogo vazio.")
            return;
        }

         this.pokemons.forEach((pokemon) => {
            console.log(`#${pokemon.id} - ${pokemon.nome} | Tipos: ${pokemon.tipos} | Altura: ${pokemon.altura} | Peso: ${pokemon.peso}`)
        })
    };


   async remover(id: number): Promise<void>{
        const existe = this.pokemons.some((pokemon) => pokemon.id === id);

        if(existe === false){
            console.log("[AVISO] Nenhum Pokémon encontrado com esse ID.")
            return;
        }

        this.pokemons = this.pokemons.filter((pokemon) => pokemon.id !== id )

        await this.boxService.salvar(this.pokemons);
        
        console.log("[OK] Pokémon removido do catálogo.")
        
    }

}