import React from "react";
import "./ShareIssue.css";
import Logo from "../images/u4us/logo.png";
import { useHistory } from 'react-router-dom';

const ShareIssue = () => {
  const gotoMessage = () => {
    history.push('/send-message');
  };

  const history = useHistory();
  return (
    <div className="main">
      <img src={Logo} alt="logo" width={500} height={100}></img>
      <h1
        style={{ textAlign: "center", borderBottom: "1px solid white" }}
        className="font-fam text-h1"
      >
        Our Multi-Issue Coalition <br />
        United by a Common Goal
      </h1>

      <h2 className="text-h2 font-fam">SHARE YOUR ISSUE</h2>
      <h2 className="text-h2 font-fam">
        Your Followers and Theirs Take it Viral <br /> Track Your Influence &
        Receive Your Rewards
      </h2>
      <div style={{ display: "flex",  borderBottom: "1px solid white", }}>
        <button onClick={gotoMessage}
          className="font-fam"
          style={{
            margin: "0 auto",
            backgroundColor: "#90ed49",
            color: "#4802e2",
            fontWeight: "700",
            marginBottom:"10px",
            marginTop:"5px"
           
          }}
        >
          IT'S FREE & EASY
        </button>
      </div>

      <div>
        <h3 style={{textAlign:"center", marginBottom:"0px"}} className="text-h3 font-fam italic">Viral Messaging by <span style={{fontStyle:"Normal"}}>EXPONICS</span></h3>
        <h3 style={{textAlign:'center', marginTop:"0px", marginBottom:"0px"}} className="text-h3 font-fam">(c) 2024 StopHim.us</h3>
        <h3 style={{textAlign:'center', marginTop:"0px"}} className="text-h3 font-fam">All Rights Reserved</h3>
      </div>
    </div>
  );
};

export default ShareIssue;
