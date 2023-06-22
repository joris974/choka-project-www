import { LanguageSwitcher, useLanguageQuery } from "next-export-i18n";

export default function LocaleSwitcher() {
  const [query] = useLanguageQuery();
  return (
    <div>
      <LanguageSwitcher lang="en">en</LanguageSwitcher> |{" "}
      <LanguageSwitcher lang="es">es</LanguageSwitcher>
    </div>
  );
}
