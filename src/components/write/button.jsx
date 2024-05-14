import Loader from "../loader";

const Button = ({ onClick, loading }) => {
	return (
		<>
			{loading ? (
				<div className="absolute bottom-20 w-56">
					<Loader className="" />
				</div>
			) : (
				<button
					className="rounded-full bg-purple-400 mt-auto absolute bottom-20 w-56 text-white py-1"
					onClick={onClick}
				>
					Regerate
				</button>
			)}
		</>
	);
};

export default Button;
