/* async y await */
const esMayor = edad => {
    return new Promise((resolve, rejected) => {
        setTimeout(() => {
            if (edad >= 18) {
                resolve("Es mayor de edad");
            } else {
                rejected("No es mayor de edad");
            }
        }, 1000)
    })
}


//
//console.log(result.catch((error) => console.log(error)));
//console.log("Terminando");

//async function consultarEsMayor(){}
const consultarEsMayor = async () => {
    try {
        let result = await esMayor(19);
        console.log(result);
    } catch (error) {
        console.log(error);
    } finally {
        console.log("Terminando");
    }
}

consultarEsMayor();

esMayor(16)
    .then((success) => console.log(success))
    .catch((fail) => console.log(fail));

let promise = new Promesa((resolve, rejected) => {
    let merryMe = false;
    if(merryMe){
        resolve("Accept");
    } else {
        rejected("No Accept");
    }
});


let promise2 = new Promise((resolve, rejected) => { // pending, fulfilled, rejected
    resolve(); // se ejecuta cuando todo esta bien
    rejected(); // se ejecuta cuando hay algun error
})


