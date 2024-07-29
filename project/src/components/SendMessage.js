import React from 'react'
import Logo from "../images/u4us/logo.png";
import Rewards from "../images/rewards/u4_rewards3.png";
import "./ShareIssue.css"

const SendMessage = () => {
    return (
        <div  className='main'>
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
                <img style={{ margin: "10px auto" }} src={Rewards} alt='Rewards'></img>
            </div>
            <div style={{ display: "flex", borderBottom: "2px solid black", }}>
                <button
                    className="font-fam"
                    style={{
                        margin: "0 auto",
                        backgroundColor: "#90ed49",
                        color: "#4802e2",
                        fontWeight: "700",
                        marginBottom: "10px",
                        marginTop: "5px"

                    }}
                >
                    START HERE NOW
                </button>
            </div>

            <div>
                <h3 style={{textAlign:'center'}} className='text-h3 font-fam italic'>if you can</h3>
                <h2 className='text-h2 font-fam'>Make a Donation</h2>
                <h3 style={{textAlign:'center'}} className='text-h3 font-fam italic'>directly to one or more</h3>
            </div>

            <div className='main-container'>
                <h2 className='text-h2 font-fam'>DEMOCRATIC FREEDOM</h2>
                <h2 className='text-h2 font-fam'>REPRODUCTIVE RIGHTS</h2>

            </div>
            <div className='main-container'>
                <h2 className='text-h2 font-fam'>MEDICAL & SOCIAL SECURITY</h2>
                <h2 className='text-h2 font-fam'>FAIR SHARE TAXATION</h2>

            </div>
            <div className='main-container'>
                <h2 className='text-h2 font-fam'>DEMOCRATIC FREEDOM</h2>
                <h2 className='text-h2 font-fam'>REPRODUCTIVE RIGHTS</h2>

            </div>
            <div className='main-container'>
                <h2 className='text-h2 font-fam'>DEMOCRATIC FREEDOM</h2>
                <h2 className='text-h2 font-fam'>REPRODUCTIVE RIGHTS</h2>

            </div>
        </div>
    )
}

export default SendMessage
