import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { H1, H2 } from "../../components/typography";

export default function Escalada() {
  const { t } = useTranslation("climbing");
  return <div className="bg-white py-24 sm:py-32">Escalada</div>;
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["climbing"])),
    },
  };
}
