import { readFile, writeFile } from "node:fs/promises";
import { PokemonResumo } from "../models/Pokemon";

export class BoxService {

async ler(): Promise<PokemonResumo[]> {
    const conteudo = await readFile("pc_box.json", "utf-8");
    const pokemons: PokemonResumo[] = JSON.parse(conteudo);

    return pokemons;
}

async salvar(pokemons: PokemonResumo[]): Promise<void> {
    const conteudo = JSON.stringify(pokemons, null, 2);

    await writeFile("pc_box.json", conteudo, "utf-8");
}

}