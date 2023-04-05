import Header from "components/Header";
import "./styles.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import RecentPurchases from "components/RecentPurchases";
import Footer from "components/Footer";
import ExpensesForm from "components/Form";
import FilterByMonths from "components/FilterMonth";


function App() {
	const [purchases, setPurchases] = useState([
		{
			id: uuidv4(),
			date: new Date(2023, 4, 10),
			category: "Здоровье",
			image: "icon-helth.png",
			price: 11678,
		},
		{
			id: uuidv4(),
			date: new Date(2023, 5, 22),
			category: "Накопления",
			image: "icon-finance.png",
			price: 15100,
		},
		{
			id: uuidv4(),
			date: new Date(2023, 6, 3),
			category: "Образование",
			image: "icon-education.png",
			price: 29600,
		},
		{
			id: uuidv4(),
			date: new Date(2023, 7, 1),
			category: "Продукты",
			image: "icon-groceries.png",
			price: 23456,
		},
		{
			id: uuidv4(),
			date: new Date(2023, 9, 15),
			category: "Путешествия",
			image: "icon-travel.png",
			price: 120000,
		},
		{
			id: uuidv4(),
			date: new Date(2023, 10, 10),
			category: "Развлечения",
			image: "icon-entertainment.png",
			price: 3700,
		},
	]);

	const addNewSpending = (purchase) => {
		setPurchases([...purchases, purchase]);
	};

	return (
		<>
			<Header />
			<div className="flex mt-20">
				<h1 className="w-1/2 pl-28 pt-48 font-['Caveat'] text-8xl text-indigo-700 justify-center">
					Деньги работают на Вас вместе с нами!
				</h1>
				<img src="./images/hero.png" className="w-1/2" alt="" />
			</div>
			<div className="flex justify-evenly px-28 mt-20 bg-amber-100">
				<ExpensesForm addNewSpending={addNewSpending} />

				<div className="w-1/3 bg-indigo-200 rounded-xl px-4 my-10 pb-8 overflow-auto scroll-style shadow-md">
					<h2 className='text-center font-["Caveat"] text-4xl pt-8 pb-8 '>
						Последние операции:
					</h2>
					{purchases.map((purchase) => {
						return <RecentPurchases purchase={purchase} key={purchase.id} />;
					})}
				</div>
			</div>
			<FilterByMonths />
			<Footer />
		</>
	);
}

export default App;
