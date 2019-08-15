let perpus = [
    {
        title : "Perahu Kertas",
        author : "Alif",
        status : "empty"
    },
    {
        title : "Si Lufi",
        author : "Avian",
        status : "available"
    },
    {
        title : "Petualangan Raja Rimba",
        author : "Yayan",
        status : "available"
    }
];

//show status book by title
function ShowBook(search){
    perpus.map(e => {
        if(e.title === search){
            console.log(e.status);
        }
    });
}

//Show Available Book on library
function ShowStatus(search){
    perpus.map(e => {
        if(e.status === search){
            console.log(e.title);
        }
    });
}

console.log("Buku Yang anda Cari..");
ShowBook('Perahu Kertas');
console.log("Buku Yang Tersedia..");
ShowStatus('available');

