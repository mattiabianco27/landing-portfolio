import { scrollToElement } from "../scrollAnimations";

export default function Section(props) {
	return (
		<div className="flex">
			<button
				className="text-[18px] font-fira text-gray focus:text-white focus:font-bold ml-[60px]"
				onClick={(event) => {
					scrollToElement(props.title);
				}}
			>
				<span className="text-green">#</span>
				{props.title}
			</button>
		</div>
	);
}
