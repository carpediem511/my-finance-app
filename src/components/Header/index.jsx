import { Link } from "react-router-dom";

const Header = () => {
	return <>

		<div className="flex justify-around py-6 bg-indigo-700">
			<Link to="/" className="text-xl text-indigo-50 font-bold hover:text-amber-500">Главная страница</Link>
			<Link to="/recentExpenses" className="text-xl text-indigo-50 font-bold hover:text-amber-500">Последние операции/добавить новую покупку</Link>
			<Link to="/expensesByMonth" className="text-xl text-indigo-50 font-bold hover:text-amber-500">Все расходы по категориям</Link>

		</div>

	</>;
};

export default Header;
