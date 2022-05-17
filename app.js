//VARIABLES
const formBusqueda=document.querySelector('#form-busqueda');
const inputName=document.querySelector('#inputNombre');
const inputModel=document.querySelector('#inputModelo');
const inputMovie=document.querySelector('#inputPelicula');
const boxTransformers=document.querySelector('#box-transformers')


const datosBusqueda={
    nombre:'',
    modelo:'',
    peliculaId:'',

}


document.addEventListener('DOMContentLoaded', ()=>{
    mostrarHTML(transformers);

})

formBusqueda.addEventListener('submit', (e) => { 
    e.preventDefault();

    datosBusqueda.nombre=inputName.value.toLowerCase();
    datosBusqueda.modelo=inputModel.value;
    datosBusqueda.peliculaId=inputMovie.value;

    console.log(datosBusqueda);
    filtrarTransformers();
    formBusqueda.reset();

});

function mostrarHTML(transformers){

    transformers.forEach(transformer => {
        const{nombre , modelo, peliculaName, descripcion, image}=transformer;

        const cardTransformer=document.createElement('div');        //CAJA PADRE
        cardTransformer.classList.add('col', 'mb-3', 'd-flex');     //ASIGNACIÓN DE LAS CLASES   //ABAJO ES LO QUE SE LE INYECTA
        cardTransformer.innerHTML=`
            <div class="card bg-secondary flex-row rounded-3">
            <div class="w-50">
            <img src="${image}" class="img-fluid object-fit" alt="">
            </div>
            <div class="card-body w-50">
            <h2 class="card-text mb-0 text-capitalize">${nombre}</h2>
            <p class="card-text mb-3 text-capitalize">${modelo}</p>
            <p class="card-text mb-3 text-capitalize">${peliculaName}</p>
            <p class="card-text mb-0 ">${descripcion}</p>
            </div>
        </div>
        `
        boxTransformers.appendChild(cardTransformer);
    });
}
function filtrarTransformers(){
    limpiarHTML();

    const resultado=transformers.filter(filtrarName).filter(filtrarModelo).filter(filtrarPelicula);
    if(resultado.length){
        mostrarHTML(resultado) ('aaaaa'); // ------------------> EL AAAAAAAAAA ES PARA QUE SE VEA SOLO UNA VEZ
    }else{
        sinResultado('Tu búsqueda no tiene concidencias con la base de datos');
    }

    const hayContenido=Object.values(datosBusqueda).filter( (e)=>e);
    if(hayContenido.length){
        mostrarHTML(resultado)
    }else{
        sinResultado('Tienes que especificar tu búsqueda');
    }
    // console.log(resultado);
}
    function sinResultado(mensaje){
        limpiarHTML();
        const sinResultado=document.createElement('div');
        sinResultado.classList.add('bg-danger', 'text-white', 'border-danger','p-4','text-center');
        sinResultado.textContent=mensaje;
        boxTransformers.parentElement.appendChild(sinResultado);

    }


function limpiarHTML(){
    while(boxTransformers.firstChild){
        boxTransformers.firstChild.remove();
    }
}

function filtrarName(transformer){
    const{nombre} = datosBusqueda;

    if(nombre){
        return transformer.nombre==nombre;
    }
    return transformer;

}

function filtrarModelo(transformer){
    const{modelo}=datosBusqueda;

    if(modelo){
        return transformer.modelo==modelo;
    }
    return transformer;

}
function filtrarPelicula(transformer){
    const{peliculaId}=datosBusqueda;

    if(peliculaId){
        return transformer.peliculaId==peliculaId;
    }
    return transformer;

}