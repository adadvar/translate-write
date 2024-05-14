import { BsCopy, BsTrash, BsVolumeUp } from "react-icons/bs";
import { ENGLISH, PERSIAN, SPANISH } from "../../utils";
import LangItem from "./lang-item";

const Response = ({ response }) => {
	return (
		<div className="relative min-h-52 flex flex-col mb-3">
			<div className="inline-flex space-x-1 bg-slate-200 p-1 rounded-full mb-4 w-fit">
				<LangItem type={PERSIAN} to />
				<LangItem type={ENGLISH} to />
				<LangItem type={SPANISH} to />
			</div>
			<div className="flex-grow border rounded-lg outline-none bg-slate-200 w-full text-end p-4">
				{response}
			</div>
			<div className="flex absolute space-x-3 left-2 bottom-2">
				<button>
					<BsVolumeUp className="" />
				</button>
				<button>
					<BsCopy className="" />
				</button>
				<button>
					<BsTrash className="" />
				</button>
			</div>
		</div>
	);
};

export default Response;
