
    let nombre = document.querySelector("#search");
    let formulario = document.querySelector("form");
    let boton = document.querySelector("#buscador");
    
    

    boton.addEventListener("click", function(event){
        //event.preventDefault();

          //ENCONTRANDO EL GENERO
    fetch(`https://api.genderize.io?name=${nombre.value}`)
    .then (function(response){
        return response.json();
    })
    .then(function(genero){
        document.querySelector("#genero").innerHTML = genero.gender;
    })
    .catch(function(err){
        console.error(err);
    })

    //ENCONTRANDO LA NACIONALIDAD
    fetch(`https://api.nationalize.io?name=${nombre.value}`)
    .then (function(response){
        return response.json();
    })
    .then(function(nat){
        document.querySelector("#nacionalidad").innerHTML = nat.country[0].country_id;
    })
    .catch(function(err){
        console.error(err);
    })
    })
    


  



