import React from 'react';
import { useNavigate } from "react-router-dom"
import Banner from './pics/contact.jpg';

const Home = () => {
    const navigate = useNavigate();

    return (
        <>
        
            <div className='p1'>
                <div id="contact">
                    <div class="layer2">
                        <section class="cta ">
                            <img src={Banner} alt="this is 1" />

                            <h3 style={{ color: "white", textAlign: "center" , fontSize:"40px"}}>
                                For Any Query Contact Us
                            </h3>
                            <div class="a ">

                                <label className="hero-botton " style={{ color: "white"}} onClick={() => navigate("/contact/info")}>CONTACT US</label>

                            </div>

                        </section>
                    </div>
                </div>

            </div>

        </>
    )
};
export default Home;

