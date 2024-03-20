import { Button } from "flowbite-react";
import { useTranslation } from "react-i18next";
export default function MPLanguageToggler() {
  const { i18n, t } = useTranslation();
  document.title = t("siteTitle");
  const languages = [
    { title: "O'zbekcha", code: "uz" },
    { title: "Ўзбекча", code: "cr" },
    { title: "Русский", code: "ru" },
  ];

  function handleLanguage(code) {
    i18n.changeLanguage(code);
    localStorage.setItem("language", code);
  }

  return (
    <Button.Group>
      {languages.map(({ title, code }) => {
        return (
          <Button
            onClick={() => {
              handleLanguage(code);
            }}
            key={title}
            color="gray"
          >
            {title}
          </Button>
        );
      })}
    </Button.Group>
  );
}
