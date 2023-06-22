import { useTranslation } from "next-export-i18n";
import { H1, H2 } from "../../components/typography";

export default function WellBeing() {
  const { t } = useTranslation();
  return <div className="bg-white py-24 sm:py-32">WellBeing</div>;
}
