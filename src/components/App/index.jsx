import Header from "components/Header";
import "./styles.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import RecentPurchases from "components/RecentPurchases";
import Footer from "components/Footer";
import ExpensesForm from "components/Form";
import RenderMonths from "components/RenderMonths";
/*import Test from "components/Data";
import { ErrorBoundary } from 'react-error-boundary';*/


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
		{
			id: uuidv4(),
			date: new Date(2023, 10, 11),
			category: "Здоровье",
			image: "icon-helth.png",
			price: 22678,
		},
		{
			id: uuidv4(),
			date: new Date(2023, 11, 25),
			category: "Накопления",
			image: "icon-finance.png",
			price: 50000,
		},
		{
			id: uuidv4(),
			date: new Date(2023, 8, 10),
			category: "Образование",
			image: "icon-education.png",
			price: 21234,
		},
		{
			id: uuidv4(),
			date: new Date(2023, 9, 5),
			category: "Продукты",
			image: "icon-groceries.png",
			price: 21609,
		},
		{
			id: uuidv4(),
			date: new Date(2023, 10, 5),
			category: "Продукты",
			image: "icon-groceries.png",
			price: 17458,
		},
		{
			id: uuidv4(),
			date: new Date(2023, 11, 11),
			category: "Развлечения",
			image: "icon-entertainment.png",
			price: 7700,
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
						return <RecentPurchases purchase={purchase} purchases={purchases} key={purchase.id} />;
					})}
				</div>
			</div>
			<RenderMonths />
			{/*<ErrorBoundary>
				{purchases.map((purchase) => {
					<Test purchases={purchases} purchase={purchase} />
				})}
			</ErrorBoundary>*/}
			<Footer />
		</>
	);
}

export default App;


/*import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { useState, useEffect } from "react";

async function getData() {
	const response = await fetch("https://642ee23f2b883abc64198889.mockapi.io/purchases");
	const data = await response.json();
	return data;
}

const Test = ({ purchase }) => {
	const [data, setData] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const result = await getData();
				setData(result);
			} catch (error) {
				console.error(error);
			}
		};
		fetchData();
	}, []);

	if (!data) {
		return <div>Loading...</div>;
	}

	return (
		<div className="flex flex-col bg-indigo-100 mb-2 rounded-md font-'Source Sans Pro'">
			<div className="flex">
				<img
					src={`./images/${purchase.image}`}
					className="w-6 h-6 rounded-md mt-5 mx-1.5"
					alt=""
				/>
				<div className="text-xl w-full mt-4 pt-1 font-semibold">
					{purchase.category}
				</div>
				<div className="w-full text-end py-2 pr-4 font-'Source Sans Pro'">
					<div className="font-bold">
						{format(new Date(purchase.date), "dd MMMM y", { locale: ru })}
					</div>
					<div className="text-md text-2xl text-indigo-600 font-semibold">
						-{purchase.price} руб.
					</div>
				</div>
			</div>
		</div>
	);
};

export default Test;
*/

