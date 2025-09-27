import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import img1 from "../../img/img1.png";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-white text-gray-600 py-8 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section with Logo and Tagline */}
        <div className="flex flex-col md:flex-row md:justify-between gap-8 md:gap-10 mb-8 md:mb-12">
          <div className="w-full md:w-1/4">
            <img
              src={img1}
              alt="The Best ELD"
              className="w-[250px] h-[250px] md:w-[300px] md:h-[300px] mb-4"
            />
            <p className="text-[#475467] text-sm md:text-base ml-0 md:ml-2">
              {t("footerSection.tagline")}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-8 w-full md:w-3/4">
            {/* Company */}
            <div className="ml-0 md:ml-4">
              <h3 className="text-[#1D2939] font-medium text-lg mb-3 md:mb-4">
                {t("footerSection.columns.company.title")}
              </h3>
              <ul className="space-y-2 md:space-y-3">
                <li>
                  <Link
                    to="/"
                    className="text-sm md:text-base text-[#475467] hover:text-blue-600"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/store"
                    className="text-sm md:text-base text-[#475467] hover:text-blue-600"
                  >
                    Store
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-sm md:text-base text-[#475467] hover:text-blue-600"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resource */}
            <div className="ml-0 md:ml-4">
              <h3 className="text-[#1D2939] font-medium text-lg mb-3 md:mb-4">
                {t("footerSection.columns.resource.title")}
              </h3>
              <ul className="space-y-2 md:space-y-3">
                <li>
                  <Link
                    to="/downloads"
                    className="text-sm md:text-base text-[#475467] hover:text-blue-600"
                  >
                    Download
                  </Link>
                </li>
                <li>
                  <Link
                    to="/manuals"
                    className="text-sm md:text-base text-[#475467] hover:text-blue-600"
                  >
                    {t("footerSection.columns.resource.links.manuals")}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div className="ml-0 md:ml-4">
              <h3 className="text-[#1D2939] font-medium text-lg mb-3 md:mb-4">
                {t("footerSection.columns.legal.title")}
              </h3>
              <ul className="space-y-2 md:space-y-3">
                <li>
                  <Link
                    to="/terms"
                    className="text-sm md:text-base text-[#475467] hover:text-blue-600"
                  >
                    {t("footerSection.columns.legal.links.terms")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacy"
                    className="text-sm md:text-base text-[#475467] hover:text-blue-600"
                  >
                    {t("footerSection.columns.legal.links.privacy")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/returns"
                    className="text-sm md:text-base text-[#475467] hover:text-blue-600"
                  >
                    {t("footerSection.columns.legal.links.returns")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/warranty"
                    className="text-sm md:text-base text-[#475467] hover:text-blue-600"
                  >
                    {t("footerSection.columns.legal.links.warranty")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
