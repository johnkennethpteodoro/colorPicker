import React, { useState, useEffect } from "react";
import ColorPicker from "../src/components/ColorPicker";
import PreviewColor from "./components/PreviewColor";

function App() {
	const [colors, setColors] = useState([]);
	const [selectedColor, setSelectedColor] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	const fetchColorData = async () => {
		try {
			const response = await fetch("https://api.prolook.com/api/colors/prolook");
			const data = await response.json();
			setColors(data.colors);
		} catch (error) {
			console.error("Error fetching color data:", error);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchColorData();
	}, []);

	const colorHandle = (color) => {
		setSelectedColor(color);
	};

	return (
		<div className="w-full h-screen gap-0 xl:grid xl:grid-cols-12">
			<div className="col-span-4">
				<PreviewColor selectedColor={selectedColor} />
			</div>
			<div className="col-span-8 overflow-y-auto bg-black custom-scrollbar">
				{isLoading ? (
					<div className="flex items-center justify-center h-screen text-center">
						<h1 className="text-red-300">loading...</h1>
					</div>
				) : (
					<ColorPicker colors={colors} onColorSelect={colorHandle} />
				)}
			</div>
		</div>
	);
}

export default App;
