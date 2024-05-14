export const myapi = async (params) => {
	const api_key = process.env.REACT_APP_API_KEY;
	const path = "https://api.deepseek.com/v1/chat/completions";
	const content =
		params.type === "translate"
			? `just translate double quotes text from {${params.language_from}} to {${params.language_to}}: "${params.text}"`
			: `Please rewrite below text in length ${params.length} format ${params.format} tone ${params.tone} in ${params.language_output}: ${params.text}`;
	console.log(content);
	const body = {
		messages: [
			{
				content: "You are a helpful assistant",
				role: "system",
			},
			{
				content,
				role: "user",
			},
		],
		model: "deepseek-chat",
		frequency_penalty: 0,
		max_tokens: 2048,
		presence_penalty: 0,
		stop: null,
		stream: false,
		temperature: 1,
		top_p: 1,
	};
	const config = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
			Authorization: `Bearer ${api_key}`,
		},
		body: JSON.stringify(body),
	};
	try {
		const res = await fetch(path, config);

		const data = await res.json();
		return data.choices[0].message.content;
	} catch (err) {
		console.error(err);
		throw err;
	}
};
