import { CgMail } from "react-icons/cg";
import { LuFacebook } from "react-icons/lu";
import { BsTwitterX } from "react-icons/bs";
import { SiInstagram } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="w-full bg-secondary p-4">
      <ul className="flex gap-4 items-center justify-center mb-4">
        <li>
          <BrandContainer>
            <CgMail className="w-6 h-6" />
          </BrandContainer>
        </li>
        <li>
          <BrandContainer>
            <LuFacebook className="w-6 h-6" />
          </BrandContainer>
        </li>
        <li>
          <BrandContainer>
            <BsTwitterX className="w-6 h-6" />
          </BrandContainer>
        </li>
        <li>
          <BrandContainer>
            <SiInstagram className="w-6 h-6" />
          </BrandContainer>
        </li>
      </ul>
      <p className="text-sm text-white text-center">
        Copyright 2025 © LEO ALEX THOMAS, All Right Reserved
      </p>
    </footer>
  );
};

const BrandContainer = ({ children }) => {
  return (
    <div className="w-10 h-10 bg-accent rounded-full content-center justify-items-center">
      {children}
    </div>
  );
};

export default Footer;
