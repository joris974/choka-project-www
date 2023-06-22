import { useTranslation } from "next-export-i18n";
import { H1, H2 } from "../../components/typography";

export default function Restaurant() {
  const { t } = useTranslation("restaurant");
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-8 lg:px-8">
        <div className="max-w-2xl">
          <H1>{t("main_title")}</H1>

          <H2>{t("section_restaurant_title")}</H2>
          <div className="mt-6 mb-6 text-lg leading-8 text-gray-600">
            {t("section_restaurant_paragraph")}
          </div>

          <H2>{t("section_scene_title")}</H2>
          <div className="mt-6 mb-6 text-lg leading-8 text-gray-600">
            {t("section_scene_paragraph")}
          </div>

          <H2>{t("section_workspace_title")}</H2>
          <div className="mt-6 mb-6 text-lg leading-8 text-gray-600">
            {t("section_workspace_paragraph")}
          </div>
        </div>
      </div>
    </div>
  );
}
