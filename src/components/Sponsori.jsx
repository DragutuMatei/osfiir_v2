import React from 'react'
import Slider from 'react-infinite-logo-slider'
import "./sp.scss";

const Sponsori = () => {
    
    return (
        <section className='sponsors'>
<h1>Mulțumim <span>sponsorilor</span> noștri!</h1>

        <Slider
            width="350px"
            
            duration={40}
            pauseOnHover={true}
            blurBorders={false}
            blurBorderColor={'#2f2f2f'}
        >
            <Slider.Slide>
                <a href="" target="_blank"className="link_sp">
                <img src={require("../assets/img/logos/onshape-KO-gr.png")} alt="any" className='sponsori' />
                </a>
            </Slider.Slide>
            <Slider.Slide>
                <a href="" target="_blank"className="link_sp">
                <img src={require("../assets/img/logos/ECDL_Romania_Logo-01.jpg")} alt="any" className='sponsori' />
                </a>
            </Slider.Slide>
            <Slider.Slide>
                <a href="" target="_blank"className="link_sp">
                <img src={require("../assets/img/logos/ICDL logo with strap STACKED.png")} alt="any" className='sponsori' />
                </a>
            </Slider.Slide>
            <Slider.Slide>
                <a href="http://rentech.ro" target="_blank"className="link_sp">
                <img src={require("../assets/img/logos/RENTech-alb-PNG.png")} alt="any" className='sponsori' />
                </a>
            </Slider.Slide>
            <Slider.Slide>
                <a href="" target="_blank"className="link_sp">
                <img src={require("../assets/img/logos/burn logo - transparent.png")} alt="any" className='sponsori' />
                </a>
            </Slider.Slide>

            
            <Slider.Slide>
                <a href="" target="_blank"className="link_sp">
                <img src={require("../assets/img/logos/fav-icon-frisco-shop.png.webp")} alt="any" className='sponsori' />
                </a>
            </Slider.Slide>
        </Slider>
        </section>
    )
}              
                     
export default Sponsori;