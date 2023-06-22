import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { H1, H2 } from "../../components/typography";

export default function WellBeing() {
  const { t } = useTranslation("wellbeing");
  return <div className="bg-white py-24 sm:py-32">WellBeing</div>;
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["wellbeing"])),
    },
  };
}
