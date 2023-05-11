const users : {
    name: string;
    village: string;
    postalCode: number;
    isMarried: boolean;
    company?: string;
}={
    name:"Ns",
    village:"JM",
    postalCode:1800,
    isMarried:true,
    company:"ns"
}


//Litaral Type
const users1 : {
    name: string;
    village: string;
    postalCode: number;
    isMarried: boolean;
    company?: "ns";
}={
    name:"Ns",
    village:"JM",
    postalCode:1800,
    isMarried:true,
    company:"ns"
}
