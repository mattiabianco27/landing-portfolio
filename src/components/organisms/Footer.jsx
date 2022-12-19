import logo from "../../assets/img/jetop.png";
import { ReactComponent as Github } from "../../assets/svg/Github.svg";
import { ReactComponent as Figma } from "../../assets/svg/Figma.svg";
import { ReactComponent as Linkedin } from "../../assets/svg/Linkedin.svg";

export default function Footer(props) {
	return (
		<div className="flex flex-col text-white font-fira border-t-[1px] border-gray px-40">
			<div className="flex justify-between mt-10 align-center">
				<div className="flex flex-col ">
					<div className="flex text-left text-white">
						<div>
							<img
								src={logo}
								alt="personal portfolio logo"
								className="w-[35px] mr-[10px]"
							/>
						</div>
						<div className="text-[24px] font-bold">{props.name}</div>
						<div className="text-[16px] text-center ml-10 mt-2 text-gray">
							<a href={"mailto:" + props.mail}>{props.mail}</a>
						</div>
					</div>
					<div className="text-[16px] mt-3">Sviluppatore frontend</div>
				</div>
				<div className="flex flex-col">
					<div className="flex text-[24px] mb-3 font-bold justify-center">
						Social
					</div>
					<div className="flex flex-row justify-between">
						<a target="_blank" rel="noreferrer" href={props.github}>
							<Github className="transition duration-500 w-[22px] h-[22px] ease-in-out fill-gray hover:fill-green" />
						</a>
						<a target="_blank" rel="noreferrer" href={props.figma}>
							<Figma className="transition duration-500 w-[22px] h-[22px] ease-in-out fill-gray hover:fill-green" />
						</a>
						<a target="_blank" rel="noreferrer" href={props.linkedin}>
							<Linkedin className="fill-gray hover:fill-green w-[22px] h-[22px] transition duration-500 ease-in-out" />
						</a>
					</div>
				</div>
			</div>

			<div className="text-center text-[16px] mt-10 mb-8 text-gray">
				Designed with ❤️ by{" "}
				<a target={"_blank"} href="https://jetop.com">
					JEToP
				</a>
			</div>
		</div>
	);
}
