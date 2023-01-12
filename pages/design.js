import * as React from "react";
// import "./App.css";
import d from "../styles/design.module.css"
// import accountSection from "./assets/accountSection.svg";
// import fickleflightLogo from "./assets/fickleflightLogo.svg";
const Design = () => {
  return (
    <div className={d.top_container}>
   {/* <img className={d.search} />    */}Logo
   <span> Search</span>
      <span className={d.hotels}>Hotels</span>
      <span className={d.offers}>Offers</span>
      {/* <img className={d.account_section}  />
       */}logo
    </div>
  );
};
export default Design;
