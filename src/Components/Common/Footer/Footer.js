import React from "react";
import ButtonImp from "../ButtonImp/ButtonImp";
import "./Footer.css";
import { FiTwitter, FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";
import visa from "./svg-export/visa.svg";
import mastercard from "./svg-export/mastercard.svg";
import amex from "./svg-export/amex.svg";
import paypal from "./svg-export/paypal.svg";
import transfer from "./svg-export/bankTransfer.svg";
import visaSecure from "./svg-export/visaSecure.svg";
import mastercardCheck from "./svg-export/mastercardCheck.svg";
import secureSsl from "./svg-export/secureSsl.svg";
import {
  leftLinks,
  product,
  resources,
  rightLinks,
  useCases,
  company,
  sweetBottom,
} from "./FooterLinks";

function Footer() {
  console.log(visa);
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-heading">
          Join hundreds of satisfied clients
        </div>
        <ButtonImp text="Get Started" />
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <p className="footer-bottom-left-link">{leftLinks.email}</p>
          <p className="footer-bottom-left-link">{leftLinks.phoneUS}</p>
          <p className="footer-bottom-left-link">{leftLinks.phoneUK}</p>
          <p className="footer-bottom-left-link">{leftLinks.contact}</p>
          <div className="footer-bottom-left-links">
            <FiTwitter />
            <FiInstagram />
            <FiFacebook />
            <FiLinkedin />
          </div>
        </div>
        <div className="footer-bottom-right">
          <div className="footer-bottom-right-group">
            <p className="footer-bottom-right-link-group">
              {rightLinks.product}
            </p>
            {product.map((x) => {
              return <p className="footer-bottom-right-link">{x.Overview}</p>;
            })}
          </div>
          <div className="footer-bottom-right-group">
            <p className="footer-bottom-right-link-group">
              {rightLinks.useCases}
            </p>
            {useCases.map((x) => {
              return <p className="footer-bottom-right-link">{x.Overview}</p>;
            })}
          </div>
          <div className="footer-bottom-right-group">
            <p className="footer-bottom-right-link-group">
              {rightLinks.resources}
            </p>
            {resources.map((x) => {
              return <p className="footer-bottom-right-link">{x.Overview}</p>;
            })}
          </div>
          <div className="footer-bottom-right-group">
            <p className="footer-bottom-right-link-group">
              {rightLinks.company}
            </p>
            {company.map((x) => {
              return <p className="footer-bottom-right-link">{x.Overview}</p>;
            })}
          </div>
        </div>
      </div>
      <div className="sweet-bottom">
        <div className="sweet-bottom-top">
          <div className="sweet-bottom-top-left">
            <img src={visa} alt="payment-icons" />
            <img src={paypal} alt="payment-icons" />
            <img src={mastercard} alt="payment-icons" />
            <img src={amex} alt="payment-icons" />
            <img src={transfer} alt="payment-icons" />
          </div>
          <div className="sweet-bottom-top-right">
            <img src={visaSecure} alt="payment-icons" />
            <img src={mastercardCheck} alt="payment-icons" />
            <img src={secureSsl} alt="payment-icons" />
          </div>
        </div>
        <div className="sweet-bottom-bottom">
          <div className="sweet-bottom-bottom-left">
            {sweetBottom.map((x) => {
              return <p className="sweet-bottom-links">{x.Overview}</p>;
            })}
          </div>
          <div className="sweet-bottom-bottom-right">
            <p className="sweet-bottom-links">
              © 2021 DataCamp Limited, 207 Regent Street, London, United
              Kingdom. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
