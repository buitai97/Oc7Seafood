import landingImage from "../assets/landing.png";
import appDownload from "../assets/appDownload.png";
const HomePage = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
        <h1 className="text-orange-600 tracking-tight text-5xl font-bold">
          Tuck into a takeaway today
        </h1>
        <p>food is just a click away!</p>
        <div className="grid md:gid-cols-2 gap-5"></div>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <img src={landingImage} alt="landing" />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-3xl tracking-tighter">
            Order takeaway even faster!
          </span>
          <span>
            Download the App for faster ordering and personalized
            recommendations
          </span>
          <img src={appDownload} alt="app download" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
