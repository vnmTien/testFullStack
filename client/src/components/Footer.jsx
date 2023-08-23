const Footer = ({ handleLanguageChange, language }) => {
  const languageTexts = {
    en: {
      madeBy: "Made by MindX 🔥",
      availableOn: "Available on:"
    },
    vn: {
      madeBy: "Được tạo bởi MindX 🔥",
      availableOn: "Được phát hành trên:"
    }
  };

  const texts = languageTexts[language];

  return (
    <div>
      <h3>{texts.madeBy}</h3>
      <div>
        <span>{texts.availableOn}</span>
        <span
          className={`language-picker ${language === "vn" ? "selected" : ""}`}
          onClick={() => handleLanguageChange("vn")}
        >
          🇻🇳
        </span>
        <span
          className={`language-picker ${language === "en" ? "selected" : ""}`}
          onClick={() => handleLanguageChange("en")}
        >
          🇺🇸
        </span>
      </div>
    </div>
  );
};

export default Footer;
