import "./Carrusel.scss";
import Carousel from "react-bootstrap/Carousel";

// FOTOS
import foto1 from "../../media/1.jpg";
import foto2 from "../../media/2.jpg";
import foto3 from "../../media/3.jpg";
import foto4 from "../../media/4.jpg";

export function Carrusel() {
  return (
    <div className="carruselcontainer">
      <Carousel className="carruselgrande">
        <Carousel.Item className="slide1">
          <img className="d-block w-100" src={foto1} alt="First slide" />
          <Carousel.Caption>
            <div className="container-slide">
              <p>Bienvenidos a</p>

              <h3>
                Chacra
                <div className="chacranoboldcarrusel">Deposito</div>
              </h3>

              <p>
                Recupera espacio en tu casa o negocio guardando tus pertenencias
                o mercaderia en un espacio protegido y con facil acceso.
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="slide2">
          <img className="d-block w-100" src={foto2} alt="Second slide" />

          <Carousel.Caption>
            <h3>Liberá espacio en oficinas y hogares</h3>
            <p>
              Funciona como una extensión de tu hogar o empresa donde podes
              guardar de forma segura y ordenada el exceso de pertenencias como
              muebles, ropa, archivos o incluso objetos de valor.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Carousel className="carruselchico">
        <Carousel.Item className="slide1">
          <img className="d-block w-100" src={foto3} alt="First slide" />
          <Carousel.Caption>
            <div className="container-slide">
              <p>Bienvenidos a</p>

              <h3>
                Chacra
                <div className="chacranoboldcarrusel">Deposito</div>
              </h3>

              <p>
                Recupera espacio en tu casa o negocio guardando tus pertenencias
                o mercaderia en un espacio protegido y con facil acceso.
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="slide2">
          <img className="d-block w-100" src={foto4} alt="Second slide" />

          <Carousel.Caption>
            <h3>Liberá espacio en oficinas y hogares</h3>
            <p>
              Funciona como una extensión de tu hogar o empresa donde podes
              guardar de forma segura y ordenada el exceso de pertenencias como
              muebles, ropa, archivos o incluso objetos de valor.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
