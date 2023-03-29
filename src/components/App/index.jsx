import Header from 'components/Header';
/*import "./styles.css"*/
import { useState } from 'react';
import uuid4 from 'uuid4';
import OnePurchase from 'components/OnePurchase';
import Footer from 'components/Footer';
import ExpensesForm from 'components/Form';



function App() {

	const [purchases, setPurchases] = useState([
		{
			id: uuid4(),
			date: "май 2023",
			category: "Здоровье",
			image: "icon-helth.png",
			price: 11678
		},
		{
			id: uuid4(),
			date: "июнь 2023",
			category: "Накопления",
			image: "icon-finance.png",
			price: 15100
		},
		{
			id: uuid4(),
			date: "июль 2023",
			category: "Образование",
			image: "icon-education.png",
			price: 29600
		},
		{
			id: uuid4(),
			date: "июль 2023",
			category: "Продукты",
			image: "icon-groceries.png",
			price: 23456
		},
		{
			id: uuid4(),
			date: "август 2023",
			category: "Путешествия",
			image: "icon-travel.png",
			price: 120000
		},
		{
			id: uuid4(),
			date: "сентябрь 2023",
			category: "Развлечения",
			image: "icon-entertainment.png",
			price: 3700
		}

	])

	return (
		<>
			<Header />
			<div className="flex mt-20">
				<h1 className="w-1/2 pl-28 pt-48 font-['Caveat'] text-8xl text-indigo-700 justify-center">
					Деньги работают на Вас вместе с нами!
				</h1>
				<img src="./images/hero.png" className="w-1/2" />

			</div>
			<div className='flex justify-evenly px-28 mt-20 bg-amber-100'>

				<ExpensesForm />

				<div className='w-1/3 bg-indigo-200 rounded-xl px-4 my-10 pb-8 overflow-auto shadow-md'>
					<h2 className='text-center font-["Caveat"] text-4xl pt-8 pb-8 '>Последние операции:</h2>
					{purchases.map((purchase) => {

						return (
							<OnePurchase purchase={purchase} key={purchase.id} />
						)
					})}
				</div>
			</div>
			<Footer />
		</>
	);
}

export default App;
