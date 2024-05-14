import React from "react";
import { useContext } from "react";
import { PageContext } from "../../context/page-context";

const Item = ({ icon, title, p }) => {
	const { page, setPage } = useContext(PageContext);
	return (
		<button
			className={`${
				page === p ? "bg-slate-500" : "bg-white"
			} rounded-xl p-2 flex items-center`}
			onClick={() => setPage(p)}
		>
			<div className="text-indigo-800 mr-3">{icon}</div>
			<h1 className="text-lg">{title}</h1>
		</button>
	);
};

export default Item;
