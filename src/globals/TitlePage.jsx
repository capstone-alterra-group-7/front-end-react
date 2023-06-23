// ** Import Other
import { Helmet } from "react-helmet";

const TitlePage = ({ title }) => {
  return (
    <Helmet>
      <title>Tripease | {title}</title>
    </Helmet>
  );
};

export default TitlePage;
