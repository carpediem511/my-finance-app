import Header from 'components/Header';
import "./styles.css"
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
			price: "11 678 руб.",
		},
		{
			id: uuid4(),
			date: "июнь 2023",
			category: "Накопления",
			image: "icon-finance.png",
			price: "15 100 руб.",
		},
		{
			id: uuid4(),
			date: "июль 2023",
			category: "Образование",
			image: "icon-education.png",
			price: "29 600 руб.",
		},
		{
			id: uuid4(),
			date: "июль 2023",
			category: "Продукты",
			image: "icon-groceries.png",
			price: "23 456 руб.",
		},
		{
			id: uuid4(),
			date: "август 2023",
			category: "Путешествия",
			image: "icon-travel.png",
			price: "120 000 руб.",
		},
		{
			id: uuid4(),
			date: "сентябрь 2023",
			category: "Развлечения",
			image: "icon-entertainment.png",
			price: "3 700 руб.",
		}

	])

	return (
		<>
			<Header />
			<div>
				<div>
					{purchases.map((purchase) => {

						return (
							<OnePurchase purchase={purchase} />
						)
					})}
				</div>
				<ExpensesForm />
			</div>
			<Footer />
		</>
	);
}

export default App;
