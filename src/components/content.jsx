import { useContext } from "react";
import { PageContext } from "../context/page-context";
import Translate from "./translate";
import Write from "./write";

const Content = () => {
	const { page } = useContext(PageContext);

	const pages = {
		translate: <Translate />,
		write: <Write />,
	};
	return <>{[pages[page]]}</>;
};

export default Content;
