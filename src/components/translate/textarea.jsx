import { ENGLISH, SPANISH } from "../../utils";
import LangItem from "./lang-item";
import { BsVolumeUp, BsCopy, BsTrash } from "react-icons/bs";

const Textarea = ({ onChange }) => {
	return (
		<div className="relative min-h-52 flex flex-col mb-3">
			<div className="inline-flex space-x-1 bg-slate-200 p-1 rounded-full mb-4 w-fit">
				<LangItem type={ENGLISH} from />
				<LangItem type={SPANISH} from />
			</div>
			<textarea
				rows={4}
				name="textarea"
				className="flex-grow border rounded-lg outline-none shadow-sm focus:border-red-300 bg-slate-200 w-full p-4"
				onChange={onChange}
			></textarea>
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

export default Textarea;
