let abet = ['satu', 'dua', 'tiga', 'empat'];
let comd = [false, true, true, false];

function mapFunct(){
    for (i = 0; i<comd.length;i++){
        if(comd[i] === true){
            console.log(abet[i]);
        }
    }
}

mapFunct();