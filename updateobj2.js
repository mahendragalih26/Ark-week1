let list = [
    {
        name: 'Tatas',
        company: 'Arkademy',
        job: 'Trainer',
        status: 'single',
        city: 'Jogja'
    },
    {
        name: 'Pratama',
        company: 'Emago',
        job: 'Trainer',
        status: 'single',
        city: 'Jakarta'
    }
]

function UpdateData(oldname, newname){
    // let new = list.replace(oldname);
    const listmap = list.map(e => {
        if (e.name === oldname) {
          e = { ...e, city : newname }
        }
        return e;
      });
    console.log("Proses Mengganti nama");
    console.log(listmap);
}

//Update data berdasarkan nama
console.log(list);
UpdateData('Pratama', 'Yogyakarta');

