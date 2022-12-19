import { scrollToElement } from "../scrollAnimations";
import { sendMail } from "../sdconfig";

export default function Button(props) {
	const onClick = () => {
		props.type === "toSection"
			? scrollToElement(props.section)
			: sendMail(props.mail, props.subject, props.message);
	};

	return (
		<div onClick={onClick} className="flex absolute">
			<div className="border border-green rounded-lg px-[12px] py-[4px] font-fira font-medium text-[16px] text-white transition duration-300 ease-in bg-black hover:bg-transparent hover:cursor-pointer">
				{props.title}
			</div>
			<div className="bg-gradient-to-r from-green to-gray border border-green rounded-lg px-[12px] py-[4px] font-fira font-medium text-[16px] text-white absolute left-0 -z-10">
				{props.title}
			</div>
		</div>
	);
}
