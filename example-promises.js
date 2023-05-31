let parrafo = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere doloribus ipsum quisquam beatae alias nostrum molestiae," +
    "ad velit, tempore reiciendis cumque similique mollitia numquam suscipit, reprehenderit consequuntur. Suscipit, nesciunt voluptatem. " +
    "Deserunt dolor incidunt, laborum iste nemo voluptatibus, esse omnis ab eveniet officiis odio debitis, ea rerum saepe cum impedit aliquid" +
    "consequatur harum iusto vero sequi consectetur id porro consequuntur. Repellendus. Odio sapiente nemo reiciendis eveniet. Dignissimos " +
    "totam suscipit officia ut. Tempore dolor, et dolorum nemo, possimus repellendus vel excepturi modi dolores commodi, neque exercitationem" +
    " eveniet voluptatem consequuntur aliquam eaque inventore.";


function contarLetras(texto) {
    texto = texto.toLowerCase();
    let pass = [',', '.', ' ']
    let obj = {}

    for (let i = 0; i < texto.length; i++) {
        if (pass.includes(texto[i])) continue;
        if (obj.hasOwnProperty(texto[i])) {
            obj[texto[i]] = obj[texto[i]] + 1
        } else {
            obj[texto[i]] = 1
        }
    }

    return obj
}

console.log(contarLetras(parrafo));


/* let promise = new Promise((resolve, rejected) => {
    //resolve("Hola Mundo");
    rejected("Ha fallado");
})

promise.then((respuesta) => {
    console.log(respuesta);
})
.catch((error) => {
    console.log(error);
}) */


function contarLetrasPromise(texto) {
    return new Promise((resolve, rejected) => {
        if (texto.length === 0) rejected({ message: 'Empty paragraph!' });
        texto = texto.toLowerCase();
        let pass = [',', '.', ' ']
        let obj = {}

        for (let i = 0; i < texto.length; i++) {
            if (pass.includes(texto[i])) continue;
            if (obj.hasOwnProperty(texto[i])) {
                obj[texto[i]] = obj[texto[i]] + 1
            } else {
                obj[texto[i]] = 1
            }
        }

        resolve(obj)
    })
}

function mayorRepPromise(data) {
    return new Promise((resolve, rejected) => {
        if (typeof (data) !== 'object') rejected({ message: 'Type of data is not an object' });
    })
}




contarLetrasPromise(parrafo)
    .then((response) => {
        console.log(response)
        mayorRepPromise(response)
            .then(() => { })
            .catch(() => { })
    })
    .catch((error) => {
        console.log(error.message)
    });


const esMayor = edad => {
    return new Promise((resolve, rejected) => {
        setTimeout(() => {
            if (edad >= 18) {
                resolve("es mayor de edad");
            } else {
                rejected("No es mayor de edad");
            }
        }, Math.floor(Math.random() * 2000) + 1)
    })
}

esMayor(16)
    .then((success) => console.log(success))
    .catch((fail) => console.log(fail));

esMayor(18)
    .then((success) => console.log(success))
    .catch((fail) => console.log(fail));

esMayor(22)
    .then((success) => console.log(success))
    .catch((fail) => console.log(fail));