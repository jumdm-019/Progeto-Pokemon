import { createInterface } from "readline/promises";

import { CatalogoPokemon } from "../services/CatalogoPokemon";
import { PokeApiService } from "../services/PokeApiService";


export class TerminalController {

private api: PokeApiService;
private catalogo: CatalogoPokemon;

    constructor(api: PokeApiService, catalogo: CatalogoPokemon){
        this.api = api
        this.catalogo = catalogo
    }

    async iniciar(): Promise<void> {
        const rl = createInterface({
            input: process.stdin,
            output: process.stdout
        })

       let opcao = ""

        while (opcao !== "0") {
            opcao = await rl.question(`
           ===== POKÉDEX =====

           1 - Buscar Pokémon
           2 - Adicionar Pokémon ao catálogo
           3 - Listar catálogo
           4 - Remover Pokémon
           0 - Sair

           Escolha uma opção: `);

        console.log(`Você escolheu: ${opcao}`);

        if(opcao === "3"){
            this.catalogo.listar()
        }

        if(opcao === "1"){
            const busca = await rl.question("Digite o nome ou ID do Pokémon: ");

            const pokemon = await this.api.buscarPokemon(busca)

            if(pokemon === null){
                console.log("Pokemon não existe.")
            }else{
                console.log(`Pokemon encontrado: ${pokemon.nome}`)

                console.log(`#${pokemon.id} - Nome:${pokemon.nome} | Tipo:${pokemon.tipos} | Altura:${pokemon.altura} | Peso:${pokemon.peso}`)
            }
        }

        if(opcao === "2"){
            const busca = await rl.question("Digite o nome ou ID do Pokémon: ")

            const pokemon = await this.api.buscarPokemon(busca)

            if(pokemon === null){
                console.log("Pokemon não existe.")
            }else{
                this.catalogo.adicionar(pokemon)
            }
        }

        if(opcao === "4"){
            const id = await rl.question("Digite o ID do Pokémon: ")

            const numeroId = Number(id)

            this.catalogo.remover(numeroId)

        }

        if(opcao !== "0" && opcao !== "1" && opcao !== "2" && opcao !== "3" && opcao !== "4"){
            console.log("[AVISO] Opção inválida.")
        }

    }

        rl.close()
    }
}