const Response = ({ response }) => {
	return (
		<div className="w-1/3 min-h-52 flex flex-col mb-3">
			<h1 className="text-lg">Preview</h1>
			<p className="text-xs mt-3 text-gray-500">
				Generated content will display here
			</p>
			<div className="w-full p-4">{response}</div>
		</div>
	);
};

export default Response;
