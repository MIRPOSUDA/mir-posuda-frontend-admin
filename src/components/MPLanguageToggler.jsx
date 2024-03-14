import { Button } from "flowbite-react";
import { useTranslation } from "react-i18next";
export default function MPLanguageToggler() {
  const { i18n } = useTranslation();
  const languages = [
    { title: "O'zbekcha", code: "latin" },
    { title: "Ўзбекча", code: "cyrillic" },
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
