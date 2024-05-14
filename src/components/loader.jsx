import { ImSpinner2 } from "react-icons/im";

const Loader = () => {
	return (
		<div className="flex justify-center w-full">
			<ImSpinner2 className="animate-spin h-8 w-8" />
		</div>
	);
};

export default Loader;
