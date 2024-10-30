import React from "react";

function ColorPicker({ colors, onColorSelect }) {
	return (
		<>
			<div>
				{colors.length > 0 && (
					<div className="grid grid-cols-3 gap-1 xl:pt-1 xl:grid xl:grid-cols-5">
						{colors.map((color) => (
							<div key={color.id}>
								<button
									style={{ backgroundColor: `#${color.hex_code}` }}
									onClick={() => onColorSelect(color)}
									className="w-full h-24 py-6 text-xs font-semibold uppercase hover:opacity-90"
								>
									<span className="colorInvert ">{color.color_code}</span>
									<h6 className="colorInvert">{color.name}</h6>
								</button>
							</div>
						))}
					</div>
				)}
			</div>
		</>
	);
}

export default ColorPicker;
