import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import uuid4 from 'uuid4'
//шаблон для отображения месяцев
const months = [
	{ name: "Январь", id: uuid4() },
	{ name: "Февраль", id: uuid4() },
	{ name: "Март", id: uuid4() },
	{ name: "Апрель", id: uuid4() },
	{ name: "Май", id: uuid4() },
	{ name: "Июнь", id: uuid4() },
	{ name: "Июль", id: uuid4() },
	{ name: "Август", id: uuid4() },
	{ name: "Сентябрь", id: uuid4() },
	{ name: "Октябрь", id: uuid4() },
	{ name: "Ноябрь", id: uuid4() },
	{ name: "Декабрь", id: uuid4() },
]

const FilterByMonthsTemplate = () => {

	const [chooseMonth, setChooseMonth] = useState(months[0])



	return (
		<div className="w-full px-4 py-16">
			<div>
				<RadioGroup value={chooseMonth} onChange={setChooseMonth}>
					<RadioGroup.Label className="sr-only">Выбрать месяц</RadioGroup.Label>
					<div className="flex w-1/3 justify-evenly flex-wrap mx-auto">
						{months.map((month) => (
							<RadioGroup.Option
								key={month.id}
								value={month}
								className={({ active, checked }) =>
									`${active
										? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300'
										: ''
									}
                  ${checked ? 'bg-indigo-700 bg-opacity-75 text-white' : 'bg-white'
									}
                    relative flex w-32 mb-5 cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
								}
							>
								{({ active, checked }) => (
									<>
										<div className="flex w-full items-center justify-between">
											<div className="flex items-center">
												<div className="text-lg font-['Source Sans Pro']">
													<RadioGroup.Label
														as="p"
														className={`font-medium  ${checked ? 'text-white' : 'text-gray-900'
															}`}
													>
														{month.name}
													</RadioGroup.Label>

												</div>
											</div>
											{checked && (
												<div className="shrink-0 text-white">
													<CheckIcon className="h-6 w-6" />
												</div>
											)}
										</div>
									</>
								)}
							</RadioGroup.Option>
						))}
					</div>
				</RadioGroup>
			</div>


		</div>
	)
};


function CheckIcon(props) {
	return (
		<svg viewBox="0 0 24 24" fill="none" {...props}>
			<circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
			<path
				d="M7 13l3 3 7-7"
				stroke="#fff"
				strokeWidth={1.5}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	)
}

export default FilterByMonthsTemplate