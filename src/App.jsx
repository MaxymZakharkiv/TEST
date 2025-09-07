import { useTranslation } from "react-i18next";

export const App = () => {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <h1>{t("welcome")}</h1>
      <button onClick={() => i18n.changeLanguage("uk")}>UA</button>
      <button onClick={() => i18n.changeLanguage("en")}>EN</button>
    </div>
  );
};
