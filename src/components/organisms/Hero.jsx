import Button from "../atoms/Button";
import { ReactComponent as Github } from "../../assets/svg/Github.svg";
import { ReactComponent as Figma } from "../../assets/svg/Figma.svg";
import { ReactComponent as Linkedin } from "../../assets/svg/Linkedin.svg";
import Lottie from "lottie-react";
import Animation from "../../assets/img/animation.json";

export default function Hero(props) {
	return (
		<div className="flex flex-col w-full mb-24">
			<div className="flex flex-row items-center">
				<div className="flex flex-col flex-1 py-5">
					<div className="py-5 text-[45px] font-semibold text-white font-poppins mr-[-100px]">
						Sono uno{" "}
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-green to-gray">
							sviluppatore full-stack
						</span>
					</div>
					<div className="text-[23px] text-gray font-poppins">
						{props.subtitle}
					</div>
					<div className="py-[50px]">
						<Button title={"Contattami"} type="toSection" section="contatti" />
					</div>
				</div>

				<div className="flex flex-col flex-1 pl-[220px]">
					<Lottie animationData={Animation} style={{ height: 650 }} />

					<div className="flex text-[16px] text-gray font-fira mt-[-50px] justify-center">
						&lt; Currently working on
						<span className="ml-2 text-white">{props.workingOn}</span> /&gt;
					</div>
				</div>
			</div>
			<div className="flex flex-row mt-[-50px]">
				<a target={"_blank"} href={props.github}>
					<Github className="mr-6 transition duration-500 ease-in-out fill-gray hover:fill-green" />
				</a>
				<a target={"_blank"} href={props.linkedin}>
					<Figma className="mr-6 transition duration-500 ease-in-out fill-gray hover:fill-green" />
				</a>
				<a target={"_blank"} href={props.figma}>
					<Linkedin className="fill-gray hover:fill-green h-[32px] transition duration-500 ease-in-out" />
				</a>
			</div>
		</div>
	);
}
