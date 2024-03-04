   /* $.get("https://webpt19b.cyclic.app/movies", function (data, status){
        console.log(data);
    }); */
    
    const contenedorImg = document.querySelector(".contenedorImg");

    const contenedorHtml = tempData.map(function(pelicula){
        const creadiv = document.createElement("div");
        creadiv.classList.add("imgPeliculas");

        creadiv.innerHTML = `
            <h4 class="contenedorTitulImg">${pelicula.title}</h4>
            <img src="${pelicula.poster}" alt="${pelicula.title}">
            <p class="contenedorPie">${pelicula.year}, Director: ${pelicula.director}</p>
        `;

        return creadiv;
    })

    contenedorImg.append(...contenedorHtml);
