import { NavigationBar } from "../../components/NavigationBar/NavigationBar";
import { Page } from "../../components/Page/Page";
import "./landingPage.css";

export const LandingPage = () => {
  return (
    <Page>
      <NavigationBar />

      {/* Splash content  */}
      <div className="splash">
        <img
          src="/20250516_1202_Woman's Office Coffee Break_simple_compose_01jvd0qezwfyb9m22y02x5x22t.png"
          alt="woman enjoying coffee at desk"
        />
        <div className="splash-phrase">
          <p>Because your identity needs</p>
          <p className="emphasized-word">flavour</p>

          <div className="catalog-link">
            <a>Find your flavour</a>
          </div>
        </div>
      </div>
    </Page>
  );
};
