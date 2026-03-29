import buttons from "../assets/Frame 11.png";

const subscribtion = () => {
  return (
    <section className="container mx-auto relative">
      <div className="relative top-36 rounded-xl bg-white/15 p-6 border border-white">
        <div className=" bg-white bg-[url('./assets/bg-shadow.png')] bg-cover bg-center p-10 rounded-xl shadow">
          <div className="flex flex-col items-center gap-6 text-center">
            <h1 className="text-3xl font-bold">Subscribe to our Newsletter</h1>
            <p className="text-black/60">
              Get the latest updates and news right in your inbox!
            </p>
            <div className="flex gap-4 mt-4">
              <input type="text" placeholder="Enter your email" />
              <button className="">
                <img src={buttons} alt="Subscribe" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default subscribtion;
