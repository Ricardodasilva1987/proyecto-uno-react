import "./Home.css";
//import logo from "../../../assets/images/images.jpg";

const Home = () => {
  return (
    <div>
      <h1 className="container">Bienvenido, este es un componente home</h1>
      {/*<img src={logo} alt="no carga la foto" />*/}
      <img
        src="https://res.cloudinary.com/drids8rm1/image/upload/v1686609355/Perfil-ricardo_foto_cc_vvf1yk.jpg"
        alt=""
        style={{ width: "150px", height: "200px" }}
      />
    </div>
  );
};

export default Home;
