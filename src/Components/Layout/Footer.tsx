import geminiLogo from "../../Media/Icons/Gemini_CompanyLogo.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  const socialLinks = [
    {
      label: "Facebook",
      href: "#",
      icon: (
        <svg
          width="20px"
          height="20px"
          viewBox="-5 0 20 20"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          fill="#ffffff"
          stroke="#ffffff"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0" />

          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          />

          <g id="SVGRepo_iconCarrier">
            <g
              id="Page-1"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              <g
                id="Dribbble-Light-Preview"
                transform="translate(-385.000000, -7399.000000)"
                fill="#ffffff"
              >
                <g id="icons" transform="translate(56.000000, 160.000000)">
                  {" "}
                  <path
                    d="M335.821282,7259 L335.821282,7250 L338.553693,7250 L339,7246 L335.821282,7246 L335.821282,7244.052 C335.821282,7243.022 335.847593,7242 337.286884,7242 L338.744689,7242 L338.744689,7239.14 C338.744689,7239.097 337.492497,7239 336.225687,7239 C333.580004,7239 331.923407,7240.657 331.923407,7243.7 L331.923407,7246 L329,7246 L329,7250 L331.923407,7250 L331.923407,7259 L335.821282,7259 Z"
                    id="facebook-[#ffffff]"
                  >
                    {" "}
                  </path>{" "}
                </g>{" "}
              </g>{" "}
            </g>{" "}
          </g>
        </svg>
      ),
    },
    {
      label: "Instagram",
      href: "#",
      icon: (
        <svg
          width="20px"
          height="20px"
          viewBox="0 0 20 20"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          fill="#ffffff"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0" />

          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          />

          <g id="SVGRepo_iconCarrier">
            <g
              id="Page-1"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              <g
                id="Dribbble-Light-Preview"
                transform="translate(-340.000000, -7439.000000)"
                fill="#ffffff"
              >
                {" "}
                <g id="icons" transform="translate(56.000000, 160.000000)">
                  {" "}
                  <path
                    d="M289.869652,7279.12273 C288.241769,7279.19618 286.830805,7279.5942 285.691486,7280.72871 C284.548187,7281.86918 284.155147,7283.28558 284.081514,7284.89653 C284.035742,7285.90201 283.768077,7293.49818 284.544207,7295.49028 C285.067597,7296.83422 286.098457,7297.86749 287.454694,7298.39256 C288.087538,7298.63872 288.809936,7298.80547 289.869652,7298.85411 C298.730467,7299.25511 302.015089,7299.03674 303.400182,7295.49028 C303.645956,7294.859 303.815113,7294.1374 303.86188,7293.08031 C304.26686,7284.19677 303.796207,7282.27117 302.251908,7280.72871 C301.027016,7279.50685 299.5862,7278.67508 289.869652,7279.12273 M289.951245,7297.06748 C288.981083,7297.0238 288.454707,7296.86201 288.103459,7296.72603 C287.219865,7296.3826 286.556174,7295.72155 286.214876,7294.84312 C285.623823,7293.32944 285.819846,7286.14023 285.872583,7284.97693 C285.924325,7283.83745 286.155174,7282.79624 286.959165,7281.99226 C287.954203,7280.99968 289.239792,7280.51332 297.993144,7280.90837 C299.135448,7280.95998 300.179243,7281.19026 300.985224,7281.99226 C301.980262,7282.98483 302.473801,7284.28014 302.071806,7292.99991 C302.028024,7293.96767 301.865833,7294.49274 301.729513,7294.84312 C300.829003,7297.15085 298.757333,7297.47145 289.951245,7297.06748 M298.089663,7283.68956 C298.089663,7284.34665 298.623998,7284.88065 299.283709,7284.88065 C299.943419,7284.88065 300.47875,7284.34665 300.47875,7283.68956 C300.47875,7283.03248 299.943419,7282.49847 299.283709,7282.49847 C298.623998,7282.49847 298.089663,7283.03248 298.089663,7283.68956 M288.862673,7288.98792 C288.862673,7291.80286 291.150266,7294.08479 293.972194,7294.08479 C296.794123,7294.08479 299.081716,7291.80286 299.081716,7288.98792 C299.081716,7286.17298 296.794123,7283.89205 293.972194,7283.89205 C291.150266,7283.89205 288.862673,7286.17298 288.862673,7288.98792 M290.655732,7288.98792 C290.655732,7287.16159 292.140329,7285.67967 293.972194,7285.67967 C295.80406,7285.67967 297.288657,7287.16159 297.288657,7288.98792 C297.288657,7290.81525 295.80406,7292.29716 293.972194,7292.29716 C292.140329,7292.29716 290.655732,7290.81525 290.655732,7288.98792"
                    id="instagram-[#167]"
                  >
                    {" "}
                  </path>{" "}
                </g>{" "}
              </g>{" "}
            </g>{" "}
          </g>
        </svg>
      ),
    },
    {
      label: "X",
      href: "#",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
          <path
            fill="currentColor"
            d="M18.9 3H21l-6.7 7.7L22 21h-6.3l-4.2-5.4L6.7 21H4.5l7.2-8.2L2 3h6.5l3.8 5L18.9 3z"
          />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto max-w-[1480px]  px-4 py-6 sm:px-6 md:px-8 md:py-10 lg:px-10 lg:py-12">
        <div className="flex flex-col gap-4 md:hidden">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Link className="" to="/">
                <img
                  src={geminiLogo}
                  alt="Gemini logo"
                  width={38}
                  height={38}
                />
              </Link>
              <span className="font-secondary text-lg font-bold">
                CleanLife
              </span>
            </div>
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  aria-label={link.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:border-white hover:bg-white/10"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
          <p className="text-sm text-white/70">© 2026 Kirill Zuravlev</p>
        </div>

        <div className="hidden md:grid md:grid-cols-4 md:gap-8 lg:gap-14">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Link className="" to="/">
                <img
                  src={geminiLogo}
                  alt="Gemini logo"
                  width={38}
                  height={38}
                />
              </Link>
              <span className="font-secondary text-xl font-bold">
                CleanLife
              </span>
            </div>
            <p className="text-sm text-white/70">© 2026 Kirill Zuravlev</p>
          </div>

          <div className="space-y-3">
            <p className="font-semibold">Yritys</p>
            <div className="flex flex-col gap-2 text-sm text-white/80">
              <Link
                to="#price-calculator"
                className="transition-colors hover:text-white"
              >
                Hinnasto
              </Link>
              <Link
                to="#contacts"
                className="transition-colors hover:text-white"
              >
                Ota yhteyttä
              </Link>
            </div>
          </div>

          <div className="space-y-3">
            <p className="font-semibold">Palvelut</p>
            <div className="flex flex-col gap-2 text-sm text-white/80">
              <Link
                to="/Kotisiivous"
                className="transition-colors hover:text-white"
              >
                Kotisiivous
              </Link>
              <Link
                to="/Toimistosiivous"
                className="transition-colors hover:text-white"
              >
                Toimistosiivous
              </Link>
              <Link
                to="/Muuttosiivous"
                className="transition-colors hover:text-white"
              >
                Muuttosiivous
              </Link>
            </div>
          </div>

          <div className="space-y-3">
            <p className="font-semibold">Seuraa Meitä</p>
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  aria-label={link.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:border-white hover:bg-white/10"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
