import Footer from "../component/footer";
import '../App.css';
import imagen from '../img/logoEntero.png'
import ProductCard from "../component/publicación";
function Inicio() {
  return (
    <>
    {/* Componente de bienvenida */}
      <div className="bienvenida"> <h1>🌊 Bienvenid@s a la Comunidad Costa de Oro 🏖️</h1>

        <p className="subtitulo">Este es un espacio creado por y para l@s vecin@s, emprendimientos y visitantes de nuestra zona.
          Aquí podés:</p>

        <p>* Publicar y encontrar productos o servicios locales.<br></br>

          * Compartir eventos culturales, sociales y deportivos.<br></br>

          * Difundir actividades comunitarias y proyectos solidarios.<br></br>

          * Conectar con negocios, centros culturales y vecinos de toda la Costa.<br></br>

          * Ayudar a las mascotas a encontrar su hogar o encontrar a tu mascota perdida<br></br>
          * Compartir viajes y experiencias turísticas.<br></br>
        </p>
        <p className="idea">La idea es simple: unirnos, colaborar y fortalecer nuestra identidad local,<br></br>
          apoyando el crecimiento de la región y promoviendo el encuentro entre tod@s.</p>
        <p className="finMensaje">💛 ¡Tu aporte hace que esta comunidad crezca! 💛 </p>
        <p>PD: ¡No olvides invitar a más vecin@s a unirse!</p>
        <p>PD2: ¡LEE LOS TERMINOS Y CONDICIONES AQUI!<br></br><small>la ignorancia de la ley no es excusa</small></p></div>
      <ProductCard
        title="Ejemplo de Producto"
        image={imagen}
        description="Esta es una descripción del producto."
        buttonText="Comprar Ahora"
      /><ProductCard
              title="Ejemplo de Producto"
              image={imagen}
              description="Esta es una descripción del producto."
              buttonText="Comprar Ahora"
            /><ProductCard
                    title="Ejemplo de Producto"
                    image={imagen}
                    description="Esta es una descripción del producto."
                    buttonText="Comprar Ahora"
                  /><br></br><Footer></Footer>
    </>

  )
}

export default Inicio;