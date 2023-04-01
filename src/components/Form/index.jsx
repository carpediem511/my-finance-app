import ButtonAdd from "components/Buttons/ButtonAdd"
import { useState } from "react"
import Select from 'react-select'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import uuid4 from "uuid4"


const categories = [
	{ value: 'health', label: 'Здоровье' },
	{ value: 'finance', label: 'Накопления' },
	{ value: 'education', label: 'Образование' },
	{ value: 'products', label: 'Продукты' },
	{ value: 'travel', label: 'Путешествия' },
	{ value: 'entertainment', label: 'Развлечения' }
]

const ExpensesForm = ({ addNewSpending }) => {
	const [enterAmount, setEnterAmount] = useState("")
	const [chooseCategory, setChooseCategory] = useState(categories[0])
	const [startDate, setStartDate] = useState();

	const AddPurchaseFunction = event => {

		event.preventDefault()

		const purchase = {
			chooseCategory,
			enterAmount,
			date: startDate,
			id: uuid4()
		}
		addNewSpending(purchase)
		setChooseCategory(categories[0])
		setEnterAmount("")
		setStartDate()
	}

	return (
		<>

			<form className="w-1/4 px-4 my-1">
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
								onChange={(category) =>
									setChooseCategory(category)
								}
								className="mt-3 py-3 focus:border-2 rounded-md"
							>

								{categories.map((category) => (
									<option key={category}>{category}</option>
								))}
							</Select>
						</div>
						<div className="flex flex-col text-lg font-medium">
							<label className="font-semibold mt-4 mb-1">Выбрать месяц покупки</label>
							<DatePicker
								selected={startDate}
								onChange={(date) => setStartDate(date)}
								isClearable
								placeholderText="	Пока здесь пусто"

							/>
						</div>


						<div className="mb-1 flex flex-col text-lg font-medium w-full">
							<label className="font-semibold mb-1 mt-4">Ввести потраченную сумму</label>
							<input
								name="enterAmount"
								value={enterAmount}
								onChange={(event) =>
									setEnterAmount(event.target.value)
								}
								type="text"
								className="border mt-1 mb-10 border-solid rounded-md outline-none border-gray-300 px-2 py-2 focus:border-2 w-1/2 focus:border-sky-500"
							/>
						</div>
					</div>
					<ButtonAdd
						title="Добавить"
						type="submit"
						AddPurchaseFunction={AddPurchaseFunction}


					/>

				</div>

			</form>

		</>
	)
}

export default ExpensesForm