import react from "react";

function Jumbotron() {
    return (
        <div class="jumbotron" style={{ backgroundColor: "#eeeeee" }}>
            <h1 class="display-4 mx-5" style={{ fontSize: "3rem" }}>¡Bienvenido a Panamá!</h1>
            <p class="lead mx-5" style={{ textAlign: "justify" }}>Panamá es mucho más que un punto en el mapa, es un puente de culturas y sueños entre dos océanos. Su tierra vibra con la historia de pueblos indígenas, afroantillanos, y mestizos que han tejido con orgullo una identidad única.

                El Canal de Panamá no solo conecta mares, sino también corazones; es símbolo de ingenio, perseverancia y colaboración internacional. En cada rincón, desde las coloridas casas del Casco Antiguo hasta las islas paradisíacas de San Blas, Panamá regala magia, calidez humana y una naturaleza exuberante que parece susurrar cuentos ancestrales.

                Y sobre todo, Panamá es un latido constante que vive en quienes la llaman hogar: una patria que abraza, inspira y te impulsa a seguir creciendo, sin olvidar nunca de dónde vienes.</p>
            <hr class="my-1" />
            <a class="btn btn-primary btn-lg mx-5 mt-0 mb-2" href="https://es.wikipedia.org/wiki/Panam%C3%A1" role="button">Saber más</a>
        </div>
    )
};

export default Jumbotron;