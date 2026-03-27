import HeroImage from "../assets/banner-main.png";

const Hero = () => {
  return (
    <section className="container mx-auto rounded-2xl py-20 bg-[url('./assets/bg-shadow.png')] bg-cover bg-center bg-black">
      <div className="container mx-auto flex flex-col items-center gap-6">
        <div className="">
          <img src={HeroImage} alt="Hero Image" />
        </div>
        <h1 className="text-4xl text-white font-bold mb-3">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>
        <p className="text-lg text-white/75 mb-3">
          Beyond Boundaries Beyond Limits
        </p>
        <button className="px-6 py-3 bg-[#E7FE29] font-semibold rounded-lg">
          Claim Free Credit
        </button>
      </div>
    </section>
  );
};

export default Hero;
