import { CgMail } from "react-icons/cg";
import { LuFacebook } from "react-icons/lu";
import { BsTwitterX } from "react-icons/bs";
import { SiInstagram } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="w-full bg-secondary py-8 px-4">
      <div className="flex gap-4 items-center justify-center mb-4">
        <BrandContainer>
          <CgMail className="w-6 h-6" />
        </BrandContainer>
        <BrandContainer>
          <LuFacebook className="w-5 h-5" />
        </BrandContainer>
        <BrandContainer>
          <BsTwitterX className="w-5 h-5" />
        </BrandContainer>
        <BrandContainer>
          <SiInstagram className="w-5 h-5" />
        </BrandContainer>
      </div>
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
