import "./feature.css";
import { featureData } from "./featureData";

export const Feature = () => {
  return (
    <>
      <div className="feature-container">
        <div className="feature-wrapper">
          {featureData.map((feature) => {
            return (
              <div key={feature.id} className="feature">
                <div className="feature-logo mb-36">
                  <img src={feature.featureLogo} alt="feature-image" />
                </div>
                <h5 className="feature-heading mb-8">{feature.featureName}</h5>
                <p className="feature-subheading">{feature.featureAbt}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
