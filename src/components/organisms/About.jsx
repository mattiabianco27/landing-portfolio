import Button from "../atoms/Button";
import Heading from "../atoms/Heading";
import AboutAnimation from "../molecules/AboutAnimation/AboutAnimation";

export default function About(props) {
	return (
		<div className="">
			<Heading section={"About"} />
			<div className="flex flex-row">
				<div className="flex flex-col text-[16px] text-gray font-fira w-1/2 justify-center">
					<p className="mb-[25px]">Ciao, sono {props.name}!</p>
					<p className="mb-[25px]">{props.firstParagraph}</p>
					<p className="mb-[50px]">{props.secondParagraph}</p>
					<div>
						<Button title={"Contattami"} type="toSection" section="contatti" />
					</div>
				</div>
				<div className="flex w-1/2 justify-end">
					<AboutAnimation name={props.name} surname={props.surname} />
				</div>
			</div>
		</div>
	);
}
