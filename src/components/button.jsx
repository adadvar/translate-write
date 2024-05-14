import { BiSync } from "react-icons/bi";
import Loader from "./loader";
const Button = ({ onClick, loading }) => {
	return (
		<>
			{loading ? (
				<Loader />
			) : (
				<button className="flex justify-center w-full" onClick={onClick}>
					<BiSync size={32} />
				</button>
			)}
		</>
	);
};

export default Button;
