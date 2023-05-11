//Normal union
/**
type Noob = {
    name: string,
    id: number
}
type Pro = {
    name: string,
    id: number,
    collaction: string,
    skill: boolean
}
type Legend = {
    name: string,
    id: number,
    collaction: string,
    skill: boolean,
    youtuber: boolean,
    channelName: string
}

const player: Noob | Pro | Legend = {
    name: "kamal",
    id: 4551665,
    collaction: "good",
    skill: true,
    youtuber: true,
    channelName: 'ff legend'
}
**/
// union intersection
type Noob = {
    name: string,
    id:number
}
type Pro = Noob & {
    collaction: string,
    skill:boolean,
}
type Legend = Pro & {
    level: number,
    channelName:string
}

const player: Legend = {
    name: "kalam",
    id: 5515515,
    collaction: "good",
    skill: true,
    level: 55,
    channelName: "ff legend"

}
