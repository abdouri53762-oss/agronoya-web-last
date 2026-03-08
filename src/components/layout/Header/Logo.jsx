import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import logo from "../../../assets/agronoya_logo.png";

const Logo = ({ className = "" }) => {
  return (
    <Link
      to="/"
      className={`group flex items-center gap-3 ${className}`}
      aria-label="Retour à l'accueil AgroNoya"
    >
      <div className="relative flex items-center">
        <div className="absolute inset-0 rounded-full bg-emerald-400/20 blur-xl transition-opacity duration-300 group-hover:opacity-100 opacity-70" />
        <img
          src={logo}
          alt="AgroNoya Logo"
          className="relative h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03] md:h-16"
        />
      </div>

      <div className="hidden sm:flex flex-col leading-none">
        

        <span className="mt-1 inline-flex w-fit rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-300">
          Smart Farming
        </span>
      </div>
    </Link>
  );
};

Logo.propTypes = {
  className: PropTypes.string,
};

export default Logo;