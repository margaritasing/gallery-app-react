import React from "react";

const Footer = () => {
  return (
    <div className="bg-dark ">
      <footer className="py-3">
        <div className="text-muted ms-5 text-center">
          LMFM - &copy; {new Date().getFullYear()} Company, Inc
        </div>
      </footer>
    </div>
  );
};

export default Footer;
