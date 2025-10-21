import GradientText from "../components/Inicio/GradientText/GradientText";
import TiltedCard from "../components/TiltedCard/TiltedCard";
import profilePicture from "../assets/imgs/LorenaPicture.jpg";

const Nosotros = () => {
  return (
    <div className="min-h-[75vh] flex flex-col items-center justify-center">
      <div className="container m-auto my-2 text-center">
        <GradientText animationSpeed={3} showBorder={false} className="custom-class text-4xl">
          Nosotros
        </GradientText>
      </div>
      <div className="flex justify-center w-full">
        <div className="container m-auto flex justify-center items-center my-6 rounded-3xl max-sm:my-3 md:mx-10 max-sm:flex-col sm:gap-5">
          <TiltedCard
            imageSrc={profilePicture}
            altText="Lorena Nivia - Ceo Yum! Yum!"
            captionText="Lorena Nivia - Ceo Yum! Yum!"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="250px"
            imageWidth="250px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={<p className="text-white bg-clip-text text-lg">Lorena Nivia - Yum! Yum!</p>}
          />
          <div className="flex justify-center items-center mx-5">
            <p className="indent-8 italic text-lg max-sm:text-sm max-md:text-sm lg:text-2xl">
              Este emprendimiento de bisutería nació de la visión de una emprendedora apasionada, Lorena. Con una habilidad innata para combinar colores y
              texturas, Lorena comenzó a crear piezas únicas que rápidamente capturaron la atención de amigos y familiares. Motivada por el entusiasmo de
              quienes admiraban su talento, decidió llevar su pasión al siguiente nivel y transformarla en un negocio próspero.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nosotros;
