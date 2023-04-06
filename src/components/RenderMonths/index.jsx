import { RadioGroup } from '@headlessui/react';
import uuid4 from 'uuid4';
import FilteredByMonths from 'components/Data';
import { useState } from 'react';

//  компонент для отображения списка месяцев и фильтрации по выбранному месяцу
const months = [
	{ name: "Январь", id: uuid4(), status: false },
	{ name: "Февраль", id: uuid4(), status: false },
	{ name: "Март", id: uuid4(), status: false },
	{ name: "Апрель", id: uuid4(), status: false },
	{ name: "Май", id: uuid4(), status: false },
	{ name: "Июнь", id: uuid4(), status: false },
	{ name: "Июль", id: uuid4(), status: false },
	{ name: "Август", id: uuid4(), status: false },
	{ name: "Сентябрь", id: uuid4(), status: false },
	{ name: "Октябрь", id: uuid4(), status: false },
	{ name: "Ноябрь", id: uuid4(), status: false },
	{ name: "Декабрь", id: uuid4(), status: false },

];

const RenderMonths = () => {
	//для хранения выбранного месяца и статуса фильтрации
	const [selectedMonth, setSelectedMonth] = useState(null);
	const [status, setStatus] = useState(false);

	// функция обработки выбора месяца
	const handleMonthSelect = (month) => {
		if (month === selectedMonth) {  // если месяц уже выбран, то устанавливаем значение null и состояние false
			setSelectedMonth(null);
			setStatus(false);
		} else {
			setSelectedMonth(month);
			setStatus(true);
		}
	};

	return (
		<div className="w-full px-4 py-16">
			{/* компонент для отображения списка месяцев */}
			<RadioGroup value={selectedMonth} onChange={handleMonthSelect}>
				<RadioGroup.Label className="sr-only">Выбрать месяц</RadioGroup.Label>
				<div className="flex w-1/3 justify-evenly flex-wrap mx-auto">

					{/* отображаем каждый месяц*/}
					{months.map((month) => (
						<RadioGroup.Option
							key={month.id}
							value={month.name}
							className={({ active, checked }) =>
								`${active
									? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300'
									: ''
								}
                ${checked
									? 'bg-indigo-700 bg-opacity-75 text-white'
									: 'bg-white'
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

			{status && selectedMonth && <FilteredByMonths selectedMonth={selectedMonth} />}
		</div>
	);
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
	);
}

export default RenderMonths;
