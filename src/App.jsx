import React, { useState, useEffect } from "react";

function App() {
	const [colors, setColors] = useState([]);
	const [selectedColor, setSelectedColor] = useState(null);

	const fetchColorData = () => {
		fetch("https://api.prolook.com/api/colors/prolook")
			.then((response) => response.json())
			.then((data) => {
				setColors(data.colors);
			});
	};

	useEffect(() => {
		fetchColorData();
	}, []);

	const colorHandle = (color) => {
		setSelectedColor(color);
	};

	function getContrastingTextColor(hexColor) {
		const r = parseInt(hexColor.slice(0, 2), 16);
		const g = parseInt(hexColor.slice(2, 4), 16);
		const b = parseInt(hexColor.slice(4, 6), 16);
		const relativeLuminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
		return relativeLuminance > 128 ? "black" : "white";
	}

	return (
		<>
			<div className="container">
				<div className="row d-flex justify-content-between mt-5 ">
					<div className="col-sm-6 colorPicker">
						{colors.length > 0 && (
							<div className="row">
								{colors.map((color) => (
									<div className="col-sm-3 text-center mb-4" key={color.id}>
										<button className="btn btn-primary" onClick={() => colorHandle(color)}>
											{color.color_code}
										</button>
										<h6 className="mt-1 colorName">{color.name}</h6>
									</div>
								))}
							</div>
						)}
					</div>
					<div className="col-sm-5 mt-5 me-4">
						<div className="boxColor position-relative" style={{ backgroundColor: selectedColor ? `#${selectedColor.hex_code}` : "white" }}>
							<div className="position-absolute top-50 start-50 translate-middle">
								<h6 className="colorName" style={{ color: selectedColor ? getContrastingTextColor(selectedColor.hex_code) : "black" }}>
									<span>{selectedColor ? selectedColor.color_code : null}</span> - {selectedColor ? selectedColor.name : null}
								</h6>
								<h6 style={{ color: selectedColor ? getContrastingTextColor(selectedColor.hex_code) : "black" }}>{selectedColor ? selectedColor.hex_code : null}</h6>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
