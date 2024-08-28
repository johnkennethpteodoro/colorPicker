import { FaCopy } from "react-icons/fa";
function PreviewColor({ selectedColor }) {
	const handleCopyColorCode = (hexCode) => {
		navigator.clipboard
			.writeText(hexCode)
			.then(() => {
				console.log("Color code copied to clipboard:", hexCode);
			})
			.catch(() => {
				console.log("No Color Code");
			});
	};
	return (
		<div
			className="border-b border-gray-500 shadow-lg xl:border-gray-500 xl:h-screen h-72 xl:border-r shadow-gray-600"
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
						<span>
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
						{selectedColor && (
							<button onClick={() => handleCopyColorCode(selectedColor.hex_code)}>
								<FaCopy color="white" />
							</button>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default PreviewColor;
