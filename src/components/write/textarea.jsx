const Textarea = ({ onChange }) => {
	return (
		<div className="border rounded-3xl w-full min-h-36 flex flex-col mb-3 focus:border-red-300 bg-slate-200">
			<span className="text-sm text-gray-600 p-4 pb-0">
				Tell me what to write for you.Hit Ctrl+Enter to generate
			</span>
			<textarea
				rows={4}
				name="textarea"
				className="flex-grow rounded-3xl outline-none shadow-sm bg-slate-200 w-full p-4"
				onChange={onChange}
			></textarea>
		</div>
	);
};

export default Textarea;
