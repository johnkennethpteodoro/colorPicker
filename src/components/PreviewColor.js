import { FaCopy } from "react-icons/fa";
function PreviewColor({ selectedColor }) {
	return (
		<div
			className=" xl:h-screen h-[300px]"
			style={{
				backgroundColor: selectedColor ? `#${selectedColor.hex_code}` : "#FAFAFA",
			}}
		>
			<div className="flex items-center justify-center h-full">
				<div className="font-semibold text-center uppercase ">
					<h6
						className="text-2xl colorInvert"
						style={{
							backgroundColor: selectedColor
								? `#${selectedColor.hex_code}`
								: "#FAFAFA",
						}}
					>
						<span className="">
							{selectedColor
								? `${selectedColor.color_code} - ${selectedColor.name}`
								: "PREVIEW"}
						</span>
					</h6>
					<div className="flex items-center justify-center gap-2 text-sm">
						<h6
							className="colorInvert"
							style={{
								backgroundColor: selectedColor
									? `#${selectedColor.hex_code}`
									: "#FAFAFA",
							}}
						>
							{selectedColor ? ` #${selectedColor.hex_code} ` : null}
						</h6>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PreviewColor;
