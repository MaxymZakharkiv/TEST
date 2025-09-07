import { useTranslation } from "react-i18next";

export const App = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("welcome")}</h1>
    </div>
  );
};
