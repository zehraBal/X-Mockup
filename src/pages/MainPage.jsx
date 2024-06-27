import MainPageButtonsSection from "../components/MainPageButtonsSection";
import Footer from "../components/Footer";

export default function MainPage() {
  return (
    <>
      <div className="mainPage-container">
        <div className="logo-container">
          <img className="logo" src="/src/assets/logo-white.png" alt="x-logo" />
        </div>
        <div className="mainPageContents-container">
          <div className="title-section">
            <h1>What's happening right now</h1>
            <h3>Join now.</h3>
          </div>
          <MainPageButtonsSection />
        </div>
      </div>
      <Footer />
    </>
  );
}
