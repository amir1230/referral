import React from "react";
import Logo from "../images/u4us/logo.png";
import Rewards from "../images/rewards/u4_rewards3.png";
import "./ShareIssue.css";
import { useHistory } from 'react-router-dom';


const SendMessage = () => {
  const gotoRegister = () => {
    history.push('/register');
  };

  const history = useHistory();
  return (
    <div className="main">
      <img src={Logo} alt="logo" width={500} height={100}></img>
      <h1
        style={{ textAlign: "center", borderBottom: "1px solid white" }}
        className="font-fam text-h1"
      >
        Send Your Message
      </h1>

      <h1
        style={{ textAlign: "center", marginTop: "10px" }}
        className="font-fam text-h2"
      >
        WATCH YOUR INFLUENCE GO VIRAL <br /> RECEIVE DONATED REWARDS
      </h1>
      <div style={{ display: "flex" }}>
        <img style={{ margin: "10px auto" }} src={Rewards} alt="Rewards"></img>
      </div>
      <div style={{ display: "flex", borderBottom: "2px solid black" }}>
        <button
          className="font-fam"
          onClick={gotoRegister}
          style={{
            margin: "0 auto",
            backgroundColor: "#90ed49",
            color: "#4802e2",
            fontWeight: "700",
            marginBottom: "10px",
            marginTop: "5px",
          }}
        >
          START HERE NOW
        </button>
      </div>

      <div>
        <h3 style={{ textAlign: "center" }} className="text-h3 font-fam italic">
          if you can
        </h3>
        <h2 className="text-h2 font-fam">Make a Donation</h2>
        <h3 style={{ textAlign: "center" }} className="text-h3 font-fam italic">
          directly to one or more
        </h3>
      </div>

      <div>
        <div className="main-container">
          <h2 className="text-h2 font-fam">
            <a className="text-h2 no-underline" target="blank" href="https://secure.actblue.com/donate/ads-gs-dd-kdhsearchweekly-july2024?recurring=1&refcode=om2024_ads_gs_240721_hvfexmdonate_dd_us_all_donate&gad_source=1&gclid=EAIaIQobChMIiMevx_PMhwMV8DfUAR1LqwiEEAAYASAAEgI2kfD_BwE">
              DEMOCRATIC FREEDOM
            </a>
          </h2>
          <h2 className="text-h2 font-fam">
            <a className="text-h2  no-underline" target="blank" href="https://www.weareplannedparenthoodaction.org/onlineactions/6iOI0_HnUUmPu_6_SRgayg2?sourceid=1017126&ms=4NALzzz00z1N1A&utm_campaign=4NIAU24XA_0000000107_0E1NAC&utm_source=Google&utm_medium=cpm&gclid=EAIaIQobChMI5_2t8_TMhwMVSEZ_AB0mXyMbEAAYASAAEgKYHPD_BwE&gclsrc=aw.ds">
              REPRODUCTIVE RIGHTS
            </a>

          </h2>
        </div>
        <div className="main-container">
          <h2 className="text-h2 font-fam">
            <a className="text-h2  no-underline" target="blank" href="https://action.aarp.org/ADV_Donation_Support">
              MEDICAL & SOCIAL SECURITY
            </a>

          </h2>
          <h2 className="text-h2 font-fam">
            <a className="text-h2  no-underline" target="blank" href="https://ctj.org/donate/">
              FAIR SHARE TAXATION
            </a>
          </h2>
        </div>
        <div className="main-container">
          <h2 className="text-h2 font-fam">
            <a className="text-h2  no-underline" target="blank" href="https://act.sierraclub.org/donate/rc_connect__campaign_designform?id=7013q000002IMZKAA4&formcampaignid=7013q000002IK4lAAG&ddi=N24ZSEGO02&gclid=EAIaIQobChMInbf5lPnMhwMVh3J_AB0higDIEAAYASAAEgIhMvD_BwE&gclsrc=aw.ds">
              CLIMATE CONTROL
            </a>
          </h2>
          <h2 className="text-h2 font-fam">
            <a className="text-h2  no-underline" target="blank" href="https://petitions.signforgood.com/et-2023-end-gun-violence-interstitial-v2?refcode=ggnp_everg-d2d-0324-branded-interstitial&gclid=EAIaIQobChMItfCcnvvMhwMVHCzUAR2Y0DtDEAAYASAAEgIZxfD_BwE">
              GUN REGULATION
            </a>

          </h2>
        </div>
        <div className="main-container">
          <h2 className="text-h2 font-fam">
            <a className="text-h2  no-underline" target="blank" href="https://action.aclu.org/give/now">
              CIVIL RIGHTS
            </a>

          </h2>
          <h2 className="text-h2 font-fam">
            <a className="text-h2  no-underline" target="blank" href="https://engage.welcome.us/a/donate?_gl=1&gad_source=1&gclid=EAIaIQobChMI6LLVsv7MhwMVISCtBh04MDWFEAAYASAAEgJ2__D_BwE">
              HUMANE IMMIGTATION
            </a>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default SendMessage;
