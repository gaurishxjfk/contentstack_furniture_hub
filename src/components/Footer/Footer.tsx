import React from "react";

const Footer = ({ footerRes }: { footerRes: any }) => {
  const { logo, copyright, navigation } = footerRes;

  const findText = (obj: any): string | null => {
    if (typeof obj === "object") {
      if (obj.hasOwnProperty("text")) {
        return obj["text"];
      } else {
        for (let key in obj) {
          const res = findText(obj[key]);
          if (res) return res;
        }
      }
    }
    return null;
  };

  return (
    <footer className=" bg-white  w-full">
      {" "}
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo Section */}
          <div className="mb-4 md:mb-0">
            <a href="/" className="flex items-center">
              <img
                src={logo.url}
                alt="Logo"
                className="!object-contain h-[15vh]"
              />
            </a>
          </div>

          {/* Links Section */}
          <div className="flex space-x-6">
            {navigation.link.length > 0 &&
              navigation.link.map((i: {title: string, href: string}) => (
                <a
                  key={i.title}
                  href={i.href}
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  {i.title}
                </a>
              ))}
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-8 text-gray-400">
          {findText(copyright) !== null && findText(copyright)}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
