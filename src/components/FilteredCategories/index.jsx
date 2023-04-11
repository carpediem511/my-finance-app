import { useState, useEffect } from "react";
import { Tab } from "@headlessui/react";
import { PieChart, Pie, Cell } from "recharts";

function FilteredCategories() {
	const [selectedCategory, setSelectedCategory] = useState(null);
	const [items, setItems] = useState([]);

	useEffect(() => {
		if (selectedCategory) {
			fetch(
				`https://642ee23f2b883abc64198889.mockapi.io/purchases?category=${selectedCategory}`
			)
				.then((response) => response.json())
				.then((data) => setItems(data))
				.catch((error) => console.log(error));
		} else {
			setItems([]);
		}
	}, [selectedCategory]);

	const categories = [
		{
			name: "Здоровье",
			id: 0,
			color: {
				1: "#FF5733",
				2: "#FFC300",
				3: "#900C3F",
				4: "#138D75",
				5: "#00CC99",
				6: "#3D3C3A",
				7: "#FF5733",
				8: "#FFC300",
				9: "#900C3F",
				10: "#138D75",
				11: "#00CC99",
				12: "#3D3C3A",
			},
		},
		{
			name: "Накопления",
			id: 1,
			color: {
				1: "#FF5733",
				2: "#FFC300",
				3: "#900C3F",
				4: "#138D75",
				5: "#00CC99",
				6: "#3D3C3A",
				7: "#FF5733",
				8: "#FFC300",
				9: "#900C3F",
				10: "#138D75",
				11: "#00CC99",
				12: "#3D3C3A",
			},
		},
		{
			name: "Образование",
			id: 2,
			color: {
				1: "#FF5733",
				2: "#FFC300",
				3: "#900C3F",
				4: "#138D75",
				5: "#00CC99",
				6: "#3D3C3A",
				7: "#FF5733",
				8: "#FFC300",
				9: "#900C3F",
				10: "#138D75",
				11: "#00CC99",
				12: "#3D3C3A",
			},
		},
		{
			name: "Продукты",
			id: 3,
			color: {
				1: "#FF5733",
				2: "#FFC300",
				3: "#900C3F",
				4: "#138D75",
				5: "#00CC99",
				6: "#3D3C3A",
				7: "#FF5733",
				8: "#FFC300",
				9: "#900C3F",
				10: "#138D75",
				11: "#00CC99",
				12: "#3D3C3A",
			},
		},
		{
			name: "Путешествия",
			id: 4,
			color: {
				1: "#FF5733",
				2: "#FFC300",
				3: "#900C3F",
				4: "#138D75",
				5: "#00CC99",
				6: "#3D3C3A",
				7: "#FF5733",
				8: "#FFC300",
				9: "#900C3F",
				10: "#138D75",
				11: "#00CC99",
				12: "#3D3C3A",
			},
		},
		{
			name: "Развлечения",
			id: 5,
			color: {
				1: "#FF5733",
				2: "#FFC300",
				3: "#900C3F",
				4: "#138D75",
				5: "#00CC99",
				6: "#3D3C3A",
				7: "#FF5733",
				8: "#FFC300",
				9: "#900C3F",
				10: "#138D75",
				11: "#00CC99",
				12: "#3D3C3A",
			},
		},
	];

	return (
		<Tab.Group>
			<Tab.List className="flex w-1/2 mt-10 justify-evenly flex-wrap mx-auto mb-5 border-b-2">
				{categories.map((category) => (
					<Tab
						key={category.id}
						onClick={() => setSelectedCategory(category.name)}
						className={({ selected }) => (

							selected ? "bg-indigo-700 bg-opacity-75 text-white" : "bg-white"
						)}
					>
						<div className="text-lg font-['Source Sans Pro'] py-2 px-2 focus:bg-slate-200">
							{category.name}
						</div>
					</Tab>
				))}
			</Tab.List>
			<Tab.Panels>
				{categories.map((category) => (
					<Tab.Panel key={category.id} className="mt-8 px-2">
						{selectedCategory === category.name && (
							<div>
								<h2 className="text-xl text-center text-indigo-600 font-bold">
									Вы выбрали: "{selectedCategory}"
								</h2>
								<div className="w-1/3 mx-auto">
									<PieChart width={300} height={300}>
										<Pie
											data={items}
											dataKey="price"
											nameKey="category"
											cx="50%"
											cy="50%"
											outerRadius={100}
											fill="#8884d8"
											label
										>
											{items.map((item, index) => {
												const selectedMonth =
													new Date(item.date).getMonth() + 1; // +1, так как номер месяца начинается с 0
												const categoryColor =
													category.color[selectedMonth.toString()];
												return <Cell key={index} fill={categoryColor} />;
											})}
										</Pie>
									</PieChart>
								</div>
								<div className="mt-4 w-1/3 mx-auto bg-white rounded-md font-['Source Sans Pro']">
									<div className="flex justify-between border-b-2 py-3 px-4 font-semibold">
										<div className="text-red-600 text-xl font-bold">Итого:</div>
										<div className="text-red-600 text-xl font-bold">
											{items.reduce((total, item) => total + item.price, 0)}{" "}
											руб.
										</div>
									</div>
								</div>
							</div>
						)}
					</Tab.Panel>
				))}
			</Tab.Panels>
		</Tab.Group>
	);
}
export default FilteredCategories;
