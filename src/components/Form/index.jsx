import ButtonAdd from "components/Buttons/ButtonAdd";
import { useState } from "react";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { v4 as uuidv4 } from "uuid";
import Error from "components/Error";
import ru from 'date-fns/locale/ru';

const categories = [
	{ value: "health", label: "Здоровье", image: "icon-helth.png" },
	{ value: "finance", label: "Накопления", image: "icon-finance.png" },
	{ value: "education", label: "Образование", image: "icon-education.png" },
	{ value: "products", label: "Продукты", image: "icon-groceries.png" },
	{ value: "travel", label: "Путешествия", image: "icon-travel.png" },
	{ value: "entertainment", label: "Развлечения", image: "icon-entertainment.png", },
];

const ExpensesForm = ({ addNewSpending }) => {
	const [enterAmount, setEnterAmount] = useState("");
	const [chooseCategory, setChooseCategory] = useState(categories[0]);
	const [startDate, setStartDate] = useState();
	let [isOpen, setIsOpen] = useState(false);

	const AddPurchaseFunction = (event) => {
		event.preventDefault();

		// проверка на обязательное заполнение всех полей
		if (chooseCategory && startDate && enterAmount) {
			const purchase = {
				category: chooseCategory.label,
				price: enterAmount,
				date: startDate,
				id: uuidv4(),
				image: chooseCategory.image,
			};

			addNewSpending(purchase);
			setChooseCategory(categories[0]);
			setEnterAmount("");
			setStartDate(null);
			setIsOpen(false);
		} else {
			setIsOpen(true);
			return;
		}
	};

	return (
		<>
			<form onSubmit={AddPurchaseFunction} className="w-1/4 px-4 my-1">
				<div className="my-8 flex flex-col gap-y-4 w-full bg-slate-200 rounded-lg shadow-md">
					<h2 className="text-4xl pt-8 pb-8 text-center font-['Caveat']">
						Добавить новую покупку
					</h2>

					<div className="px-4">
						<div className="flex flex-col text-lg font-medium">
							<label className="font-semibold">Выбрать категорию</label>
							<Select
								options={categories}
								value={chooseCategory}
								onChange={(category) => setChooseCategory(category)}
								className="mt-3 py-3 focus:border-2 rounded-md"
							>
								{categories.map((category) => (
									<option key={category}>{category}</option>
								))}
							</Select>
						</div>
						<div className="flex flex-col text-lg font-medium">
							<label className="font-semibold mt-4 mb-1">
								Выбрать месяц покупки
							</label>
							<DatePicker
								selected={startDate}
								onChange={(date) => setStartDate(date)}
								locale={ru}
								dateFormat="dd.MM.yyyy"
								isClearable
								placeholderText="	Пока здесь пусто"
								className="border mt-1 border-solid rounded-md outline-none border-gray-300 px-2 py-2 focus:border-2 focus:border-sky-500"
							/>
						</div>

						<div className="mb-1 flex flex-col text-lg font-medium w-full">
							<label className="font-semibold mb-1 mt-4">
								Ввести потраченную сумму
							</label>
							<input
								name="enterAmount"
								value={enterAmount}
								onChange={(event) => {
									const value = event.target.value;
									// ограничение ввода только цифрами
									const pattern = /^[0-9]{1,9}$/;
									if (pattern.test(value)) {
										setEnterAmount(value);
									}
								}}
								type="text"
								className="border mt-1 border-solid rounded-md outline-none border-gray-300 px-2 py-2 focus:border-2 w-1/2 focus:border-sky-500"
							/>
						</div>
					</div>
					<ButtonAdd
						title="Добавить"
						type="submit"
						AddPurchaseFunction={AddPurchaseFunction}
					/>
					<Error isOpen={isOpen} setIsOpen={setIsOpen} />
				</div>
			</form>
		</>
	);
};

export default ExpensesForm;
