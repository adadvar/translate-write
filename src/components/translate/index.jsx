import React, { useContext, useState } from "react";
import Response from "./response";
import Button from "../button";
import Textarea from "./textarea";
import { PageContext } from "../../context/page-context";
import { myapi } from "../../lib/deepseek";

const Translate = () => {
	const [loading, setLoading] = useState(false);
	const [response, setResponse] = useState("");
	const [prompt, setPropmt] = useState("");
	const { language_from, language_to } = useContext(PageContext);

	const onClick = async () => {
		setLoading(true);
		setResponse("");
		try {
			const resp = await myapi({
				language_from: language_from,
				language_to: language_to,
				text: prompt,
				type: "translate",
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
		<div className="w-4/5	px-8 py-5 bg-slate-100">
			<div className="max-w-[700px] ml-auto">
				<h1 className="text-xl font-medium mb-6">Translate</h1>
				<Textarea onChange={onChange} />
				<Button onClick={onClick} loading={loading} />
				<Response response={response} />
			</div>
		</div>
	);
};

export default Translate;
