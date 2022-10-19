 const frases = [
    'Porque seus olhos são lindos',
    'Porque seu sorriso é maravilhoso',
    'Proque você é a mulher mais inteligente que conheci',
    'Porque não existe ninguém mais linda do que você',
    'Porque você cuida de mim',
    'Porque antes de você eu não existia',
    'Porque sem você minha vida é vazia',
    'Porque você é um anjo em minha vida',
    'Porque eu penso em você todo santo dia',
    'Porque eu amo o som da sua risada',
    'Porque eu acho fofo como você fala',
    'Porque eu acho fofo suas onomatopeias enquanto fala',
    'Porque eu adoro ouvir você falando',
    'Porque eu adoro conversar com você',
    'Porque eu adoro ouvir suas histórias',
    'Porque eu amo como você é independente',
    'Porque eu amo como você tem suas convicções tão fortes',
    'Porque espero que nossa filha seja como você',
    'Porque amo como você me olha',
]

export const geraFrase = () =>{
    const randomIndex = Math.floor(Math.random() * frases.length);
    const listadefrases = frases[randomIndex];
    console.log(listadefrases);
    return listadefrases;
}

//aaaaaaaaaaaaaaaaaaaaa


// Soli Deo Gloria
