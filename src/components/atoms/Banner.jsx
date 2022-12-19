import { CheckCircleIcon } from "@heroicons/react/24/outline";
export default function Banner(props) {
	return (
		<div className="hidden mt-[100px]" id={props.id}>
			<div className="flex flex-row bg-[#228b22] text-white rounded-[15px] items-center w-fit">
				<div className="flex">
					<CheckCircleIcon className="h-8 w-8 mx-[10px]" />
				</div>
				<div className="flex py-[10px] font-poppins mr-[20px]">
					Messaggio inviato correttamente!
				</div>
			</div>
		</div>
	);
}
