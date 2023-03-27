import ButtonAdd from "components/Buttons/ButtonAdd"
import { useState } from "react"
import Select from 'react-select'

const months = [
	{ value: 'january', label: 'Январь' },
	{ value: 'february', label: 'Февраль' },
	{ value: 'march', label: 'Март' },
	{ value: 'april', label: 'Апрель' },
	{ value: 'may', label: 'Май' },
	{ value: 'june', label: 'Июнь' },
	{ value: 'july', label: 'Июль' },
	{ value: 'august', label: 'Август' },
	{ value: 'september', label: 'Сентябрь' },
	{ value: 'october', label: 'Октябрь' },
	{ value: 'november', label: 'Ноябрь' },
	{ value: 'december', label: 'Декабрь' }
]

const categories = [
	{ value: 'health', label: 'Здоровье' },
	{ value: 'finance', label: 'Накопления' },
	{ value: 'education', label: 'Образование' },
	{ value: 'products', label: 'Продукты' },
	{ value: 'travel', label: 'Путешествия' },
	{ value: 'entertainment', label: 'Развлечения' }
]

const ExpensesForm = () => {
	const [enterAmount, setEnterAmount] = useState("")

	const [chooseCategory, setChooseCategory] = useState(categories[0])
	const [chooseMonth, setChooseMonth] = useState(months[0])
	/*
		const addNewSpending = (event) => {
			event.preventDefault()
	
			const newSpending = [chooseCategory, chooseMonth, enterAmount]
		}*/

	return (
		<>

			<form>
				<div className="w-1/3 my-10 flex flex-col gap-y-4 mx-auto">
					<h2 className="font-bold text-2xl text-teal-500 mt-10">
						Ваши траты по категориям
					</h2>
					<div className="flex flex-col text-lg font-medium">
						<label>Категория</label>
						<Select
							options={categories}
							onChange={(event) =>
								setChooseCategory(event.target.value)
							}
							className="mt-1 py-2 focus:border-2"
						>
							<option disabled>Выбрать категорию</option>
							{categories.map((category) => (
								<option key={category}>{category}</option>
							))}
						</Select>
					</div>
					<div className="flex flex-col text-lg font-medium">
						<label>Месяц покупки</label>
						<Select
							options={months}
							onChange={(event) =>
								setChooseMonth(event.target.value)
							}
							className="mt-1 py-2 focus:border-2"
						>
							{months.map((month) => (
								<option key={month}>{month}</option>
							))}
						</Select>
					</div>
					<div className=" mb-1 flex flex-col text-lg font-medium">
						<label>Ввести сумму</label>
						<input
							name="enterAmount"
							value={enterAmount}
							onChange={(event) =>
								setEnterAmount(event.target.value)
							}
							type="text"
							className="border border-solid rounded outline-none border-gray-300 px-2 py-2 focus:border-2 w-5/12 focus:border-sky-500"
						/>
					</div>

					<ButtonAdd
						title="Добавить"
						type="submit"
					//addNewSpending={addNewSpending}
					/>
				</div>


			</form>

		</>
	)
}

export default ExpensesForm