import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-text-container">
                <p className="footer__text">Коммерческая тайна ООО «Яндекс», 119021, Россия, г. Москва, ул. Льва
                    Толстого, д. 16</p>
                <p className="footer__text">2022.11.1 / 2023.1.68</p>
            </div>
            <p className="footer__text">&#169; 2003–2023 ООО «Яндекс»</p>
        </footer>
    )
}

export default Footer;
