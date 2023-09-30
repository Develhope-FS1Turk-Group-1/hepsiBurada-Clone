import React from "react";
import hbLogoFooter from "../images/footer/Hepsiburada_logo_official.webp"
import yarinKapinda from "../images/footer/mobil-yarin-kapinda-1.webp"
import tekTikla from "../images/footer/mobil-tek-tikla-alisveris.webp"
import mobilCebinizde from "../images/footer/mobil-cebinizde.webp"
import kapindaIade from "../images/footer/kapindaiade.webp"
import '../style/FooterStyle.css'
const Footer = () => {
    return(
        <div>
            <div className="FooterMainContainer">
                <div className="upperFooterContainer">
                    <div className="FooterUPUP">
                        <div className="FooterUPelement">
                            <img src={hbLogoFooter} alt="HepsiBurada Logo" />
                        </div>
                        <div className="FooterUPelement">
                            <span>Siparişlerim</span>
                            <hr />
                            <span>Müşteri Hizmetleri</span>
                        </div>
                    </div>
                    <div className="FooterUPLOW">
                        <div className="FooterLOWelement">
                            <h1>Yarın Kapında</h1>
                            <img src={yarinKapinda} alt="" />
                            <h3>Yarın Kapında ile ihtiyaçlarına ertesi<br /> gün sahip ol!</h3>
                        </div>
                        <hr />
                        <div className="FooterLOWelement">
                            <h1>Tek Tıkla Güvenli Alışveriş</h1>
                            <img src={tekTikla} alt="" />
                            <h3>Ödeme ve adres bilgilerinizi<br />kaydedin, güvenli alışveriş yapın.</h3>
                        </div>
                        <hr />
                        <div className="FooterLOWelement">
                            <h1>Mobil Cebinizde</h1>
                            <img src={mobilCebinizde} alt="" />
                            <h3>Dilediğiniz her yerden güvenli<br />alışverin keyfini çıkarın.</h3>
                        </div>
                        <hr />
                        <div className="FooterLOWelement">
                            <h1>Kapında İade</h1>
                            <img src={kapindaIade} alt="" />
                            <h3>Aldığınız ürünü iade etmek hiç bu<br />kadar kolay olmamıştı.</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer