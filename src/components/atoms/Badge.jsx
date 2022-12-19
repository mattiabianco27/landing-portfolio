export default function Badge(props) {
	return (
		<div>
			<div className="my-2 border-2 rounded-[15px] border-green py-[15px] text-[18px] text-white font-medium text-center bg-gradient-to-r from-green to-gray ">
				{props.badgeTitle}
			</div>
			<div className="my-2 border-2 rounded-[15px] border-green py-[15px] text-[18px] text-white font-medium text-center bg-black hover:bg-transparent transition duration-500 ease-in-out mt-[-70px]">
				{props.badgeTitle}
			</div>
		</div>
	);
}
