import { Service } from "@/data/services/service-types";
import InteriorDesignPage from "../custom/interior-design-page";
import HomeRenovationPage from "../custom/home-renovation-page";

type Props = {
  service: Service;
};

export default function CustomServicePage({ service }: Props) {
  switch (service.slug) {
    case "interior-design":
      return <InteriorDesignPage service={service} />;

    case "home-renovation":
      return <HomeRenovationPage />;

    default:
      return null;
  }
}
