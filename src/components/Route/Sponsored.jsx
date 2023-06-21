import React from "react";
import styles from "../../styles/styles";

const Sponsored = () => {
  return (
    <div
      className={`${styles.section} hidden sm:block bg-white py-10 px-5 mb-12 cursor-pointer rounded-xl`}
    >
      <div className="flex justify-between w-full">
        <div className="flex items-start">
          <a href="https://www.calgary.ca/">
          <img
            src="https://www.calgary.ca/etc/clientlibs/www/main/images/coc-logo.svg" 
            style={{width:"150px", objectFit:"contain"}}
          />
          </a>
        </div>
        <div className="flex items-start">
          <a href="https://www.centrefornewcomers.ca/">
          <img
            src="https://static.wixstatic.com/media/3d9164_00609be358ae41f380677f1dbb63020e~mv2.png/v1/fill/w_285,h_88,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Screen%20Shot%202020-12-18%20at%203_40_25%20PM.png"
            style={{width:"150px", objectFit:"contain"}}
            alt=""
          />
          </a>
        </div>
        <div className="flex items-start">
        <a href="https://www.rentfaster.ca/">
          <img
            src="https://80fb29193e49ee2fd504-d0f6d041df1ee747e1fc6df6df0d002b.ssl.cf1.rackcdn.com/timg-rf-logo-a.png"
            style={{width:"150px", objectFit:"contain"}}
            alt=""
          />
          </a>
        </div>
        <div className="flex items-start">
        <a href="https://www.realtor.ca/">
          <img
            src="https://www.realtor.ca/images/logo.svg"
            style={{width:"150px", objectFit:"contain"}}
            alt=""
          />
          </a>
        </div>
        <div className="flex items-start">
        
        <a href="https://www.realcanadiansuperstore.ca/">
          <img
            src="https://dis-prod.assetful.loblaw.ca/content/dam/loblaw-companies-limited/creative-assets/logos/pcx-banner-logos-/superstore_v2.svg"
            style={{width:"150px", objectFit:"contain"}}
            alt=""
          />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sponsored;
