import React, { useContext, useState } from "react";
import { myapi } from "../../lib/deepseek";
import Response from "./response";
import Button from "./button";
import Textarea from "./textarea";
import { PageContext } from "../../context/page-context";
import Filters from "./filter";

const Write = () => {
	const [loading, setLoading] = useState(false);
	const [response, setResponse] = useState("");
	const [prompt, setPropmt] = useState("");
	const { length, format, tone, language_output } = useContext(PageContext);

	const onClick = async () => {
		setLoading(true);
		setResponse("");
		try {
			const resp = await myapi({
				length,
				format,
				tone,
				language_output,
				text: prompt,
				type: "write",
			});
			setResponse(resp);
			setLoading(false);
		} catch (error) {
			setResponse(error);
			setLoading(false);
		}
	};

	const onChange = (event) => {
		setPropmt(event.target.value);
	};
	return (
		<div className="w-4/5 h-screen px-8 py-5 bg-slate-100">
			<h1 className="text-xl font-medium mb-6">Write</h1>
			<div className="flex space-x-4 h-full">
				<div className="relative w-2/3">
					<Textarea onChange={onChange} />
					<Filters />
					<Button
						className="rounded-full bg-purple-400 mt-auto absolute bottom-20 w-56 text-white py-1"
						onClick={onClick}
						loading={loading}
					>
						Regerate
					</Button>
				</div>
				<div className="border-l border-gray-200 min-h-full"></div>
				<Response response={response} />
			</div>
		</div>
	);
};

export default Write;
