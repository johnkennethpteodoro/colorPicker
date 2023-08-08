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

	return (
		<>
			<div className="container">
				<div className="row d-flex justify-content-between mt-5 ">
					<div className="col-sm-6 colorPicker">
						{colors.length > 0 && (
							<div className="row">
								{colors.map((color) => (
									<div className="col-sm-3 text-center mb-4" key={color.id}>
										<button className="btn btn-primary" style={{ backgroundColor: `#${color.hex_code}` }} onClick={() => colorHandle(color)}>
											<span className="colorInvert">{color.color_code}</span>
										</button>
										<h6 className="mt-1 colorName">{color.name}</h6>
									</div>
								))}
							</div>
						)}
					</div>
					<div className="col-sm-5 mt-5 me-4">
						<div className="boxColor position-relative" style={{ backgroundColor: selectedColor ? `#${selectedColor.hex_code}` : "#FAFAFA", border: selectedColor ? "none" : "dashed 3px #EEEEEE" }}>
							<div className="position-absolute top-50 start-50 translate-middle">
								<h6 className="colorName colorInvert">
									<span>{selectedColor ? `${selectedColor.color_code} - ${selectedColor.name}` : "PREVIEW"}</span>
								</h6>
								<h6 className="colorInvert">{selectedColor ? `( #${selectedColor.hex_code} )` : null}</h6>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
