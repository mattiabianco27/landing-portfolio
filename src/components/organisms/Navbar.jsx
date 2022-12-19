import Section from "../atoms/Section";
import logo from "../../assets/img/jetop.png";

export default function Navbar(props) {
	return (
		<div className="flex flex-row sticky top-0 z-20 justify-between w-full py-[20px] px-[120px] bg-black/50 backdrop-blur-sm">
			<div className="flex align-middle">
				<div>
					<img src={logo} alt="personal portfolio logo" className="w-[35px] " />
				</div>
				<div className="font-bold text-white text-[22px] mx-[10px]">
					{props.name}
				</div>
			</div>
			<div className="flex">
				{props.sections.map((section) => {
					return <Section title={section} />;
				})}
			</div>
		</div>
	);
}
