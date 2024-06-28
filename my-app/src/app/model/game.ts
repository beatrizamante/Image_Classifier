export class Game {
    id: number;
    slug: string;
    name: string;
    release: string;
    background: string; 

    constructor(
        id: number,
        slug:string,
        name: string,
        release: string,
        background: string
    ){
        this.id = id; 
        this.slug = slug;
        this.name = name; 
        this.release = release;
        this.background = background;
    }

    public static clone(game: Game){
        let g: Game = new Game(game.id, game.slug, game.name, game.release, game.background); 

        g.id = game.id;
        g.slug = game.slug;
        g.name = game.name;
        g.release = game.release;
        g.background = game.background;
        return g; 
    }
}