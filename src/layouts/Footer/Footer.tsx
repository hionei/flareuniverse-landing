import IconButton from "@mui/material/IconButton";
import XIcon from "@mui/icons-material/X";
import EmailIcon from "@mui/icons-material/Email";
import SvgIcon from "@mui/material/SvgIcon";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import "./Footer.scss";

const Footer = () => {
  const [showXToolTip, setShowXToolTip] = useState(false);
  const [showEmailToolTip, setShowEmailToolTip] = useState(false);
  const [showDiscordToolTip, setDiscordToolTip] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: "756px" });

  const handleMouseOver = (value: any) => {
    if (value == 1) setShowXToolTip(true);
    if (value == 2) setShowEmailToolTip(true);
    if (value == 3) setDiscordToolTip(true);
  };

  const handleMouseOut = (value: any) => {
    if (value == 1) setShowXToolTip(false);
    if (value == 2) setShowEmailToolTip(false);
    if (value == 3) setDiscordToolTip(false);
  };

  return (
    <footer className="bottom-0 w-[98%] mt-10 px-10" id="footer">
      <div className={`flex justify-around gap-10 ${isMobile ? "flex-col items-center" : "flex-row"}`}>
        <div className={`${isMobile ? "max-w-[60%]" : "max-w-[30%]"} flex flex-col gap-4`}>
          <div className="logo flex items-center gap-2">
            <img src="logo.png" alt="logo" />
            <span>Flare Universe</span>
          </div>
          <p className="text-[#aaa] text-start">
            Join our discord channel or follow us on Twitter to keep up to date with our latest work and announcements
          </p>
          <div className="text-start">
            <IconButton
              onMouseOver={() => handleMouseOver(1)}
              onMouseOut={() => handleMouseOut(1)}
              title="@FlareuniverseX"
              aria-label="delete"
              size="medium"
              sx={{ color: "white" }}
              onClick={() => {
                window.open("https://twitter.com/FlareuniverseX/", "_blank");
              }}
            >
              <XIcon fontSize="inherit" />
            </IconButton>
            <IconButton
              onMouseOver={() => handleMouseOver(2)}
              onMouseOut={() => handleMouseOut(2)}
              title="admin@flareuniverse.xyz"
              aria-label="delete"
              size="medium"
              sx={{ color: "white" }}
              onClick={() => {
                window.open("mailto: admin@flareuniverse.xyz", "_blank");
              }}
            >
              <EmailIcon fontSize="inherit" />
            </IconButton>
            <IconButton
              onMouseOver={() => handleMouseOver(3)}
              onMouseOut={() => handleMouseOut(3)}
              title="discord"
              aria-label="discord"
              size="medium"
              sx={{ color: "white" }}
              onClick={() => {
                window.open("https://discord.gg/DjmkPShKZ3", "_blank");
              }}
            >
              <SvgIcon fontSize="inherit" sx={{ color: "white" }}>
                <svg width="31" height="27" viewBox="0 0 31 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M25.3633 3.4248C28.457 8.01855 30.0039 13.1748 29.4414 19.1279C29.4414 19.1279 29.4414 19.1748 29.3945 19.1748C27.332 20.7217 24.9883 21.8936 22.5039 22.6436C22.457 22.6436 22.4102 22.6436 22.4102 22.6436C21.8945 21.8936 21.4258 21.1436 21.0039 20.3467V20.2998C21.0039 20.2529 21.0039 20.2529 21.0508 20.2061C21.8008 19.9248 22.5039 19.5967 23.207 19.1748C23.2539 19.1748 23.2539 19.1748 23.2539 19.1279C23.2539 19.0811 23.2539 19.0811 23.207 19.0342C23.0664 18.9404 22.9258 18.8467 22.7852 18.7061H22.7383H22.6914C18.2383 20.7686 13.3633 20.7686 8.86328 18.7061C8.81641 18.7061 8.81641 18.7061 8.81641 18.7061C8.76953 18.7061 8.76953 18.7061 8.76953 18.7061C8.62891 18.8467 8.48828 18.9404 8.34766 19.0342C8.30078 19.0811 8.30078 19.0811 8.30078 19.1279C8.30078 19.1748 8.30078 19.1748 8.34766 19.1748C9.00391 19.5967 9.75391 19.9248 10.5039 20.2061C10.5039 20.2529 10.5508 20.2529 10.5508 20.2998V20.3467C10.1289 21.1436 9.66016 21.8936 9.14453 22.6436C9.09766 22.6436 9.09766 22.6436 9.05078 22.6436C6.51953 21.8936 4.17578 20.7217 2.16016 19.1748C2.11328 19.1748 2.11328 19.1279 2.11328 19.1279C1.64453 13.9717 2.62891 8.76855 6.19141 3.4248C6.19141 3.4248 6.19141 3.4248 6.23828 3.4248C7.97266 2.62793 9.89453 2.01855 11.8164 1.69043C11.8164 1.69043 11.8164 1.69043 11.8633 1.69043H11.9102C12.1914 2.15918 12.4258 2.6748 12.6133 3.14355C13.6445 3.00293 14.6758 2.90918 15.7539 2.90918C16.832 2.90918 17.9102 3.00293 18.9414 3.14355C19.1289 2.6748 19.3633 2.15918 19.6445 1.69043L19.6914 1.64355C19.6914 1.64355 19.6914 1.69043 19.7383 1.69043C21.6602 2.01855 23.582 2.62793 25.3164 3.4248C25.3633 3.4248 25.3633 3.4248 25.3633 3.4248ZM11.207 15.9873C12.5664 15.9873 13.6914 14.7217 13.6914 13.2217C13.6914 11.6748 12.6133 10.4561 11.207 10.4561C9.84766 10.4561 8.72266 11.6748 8.72266 13.2217C8.72266 14.7217 9.84766 15.9873 11.207 15.9873ZM20.3477 15.9873C21.7539 15.9873 22.832 14.7217 22.832 13.2217C22.8789 11.6748 21.7539 10.4561 20.3477 10.4561C18.9883 10.4561 17.9102 11.6748 17.9102 13.2217C17.9102 14.7217 18.9883 15.9873 20.3477 15.9873Z"
                    fill="white"
                  />
                </svg>
              </SvgIcon>
            </IconButton>
            {showDiscordToolTip && (
              <div className="fixed bottom-1 left-1 bg-gray-700 text-white text-xs p-1 rounded">
                https://discord.gg/DjmkPShKZ3
              </div>
            )}
            {showXToolTip && (
              <div className="fixed bottom-1 left-1 bg-gray-700 text-white text-xs p-1 rounded">
                https://twitter.com/FlareuniverseX/
              </div>
            )}
            {showEmailToolTip && (
              <div className="fixed bottom-1 left-1 bg-gray-700 text-white text-xs p-1 rounded">admin@flareuniverse.xyz</div>
            )}
          </div>
          <span className="text-[#aaa] text-start text-[0.7em] mt-8">Copyright © 2024 Flare Universe.</span>
        </div>
        <div>
          <h5 className="text-[1.1em] mb-3 text-start">Quick Link</h5>
          <nav className="flex flex-col gap-2 items-start text-[0.9em] text-[#aaa]">
            <a href="#home">Home</a>
            <a href="#whychooseus">Why Choose Us</a>
            <a href="#howitworks">How It Works</a>
            <a href="#roadmap">Roadmap</a>
          </nav>
          <div className="text-[#aaa] flex gap-2 mt-5 text-[0.7em]">
            <span>Privacy policy</span>
            <span>Terms of Use</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
