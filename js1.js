 // Array Of Object
 let school = [
    {
        schoolname: "SD Yasalam malang",
        yearin: 2016,
        yeearout: 2019
    },
    {
        schoolname: "SMP Malang",
        yearin: 2013,
        yeearout: 2016
    },
    {
        schoolname: "SMK 4 malang",
        yearin: 2016,
        yeearout: 2019
    },
    
];

// Push Object
let newschool = {
    schoolname : "ITS",
    yearin: 2019,
    yeearout: 2024
};


//show all
function ShowAll(){
    //Show data awal
    console.log("Data Asli school");
    console.log(school);
}

//Proses Push / tambah
function PushData(){

    //Show New Data
    console.log("Data newschool");
    console.log(newschool);

    //Push newschool ke school
    console.log("Proses push----");
    school.push(newschool);

     //Show Data Setelah di push
     console.log("Data school setelah di push");
     console.log(school);
}

//Proses delete
function DeleteData(schname){
    
    // PushData();
    ShowAll();

    console.log("Delete Data Berhasil");
    school.splice(school.findIndex(e => e.schoolname === schname),1);
    console.log(school);

}

//proses Edit
function EditData(oldname, newname){
    PushData();
    const SchoolMap = school.map(e => {
        if (e.schoolname === oldname) {
          e = { ...e, schoolname: newname };
        }
        return e;
      });
    console.log("Proses Mengganti nama");
    console.log(SchoolMap);
}

//ShowAll();
// PushData();
// DeleteData('SMP Malang');
EditData('SD Yasalam malang', 'SD Margo Basuki');

