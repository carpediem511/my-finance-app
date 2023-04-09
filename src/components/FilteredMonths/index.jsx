import { RadioGroup } from '@headlessui/react';
import { useState, useEffect } from 'react';

//  компонент для отображения списка месяцев и фильтрации по выбранному месяцу
const months = [
	{ name: "Январь", id: 1 },
	{ name: "Февраль", id: 2 },
	{ name: "Март", id: 3 },
	{ name: "Апрель", id: 4 },
	{ name: "Май", id: 5 },
	{ name: "Июнь", id: 6 },
	{ name: "Июль", id: 7 },
	{ name: "Август", id: 8 },
	{ name: "Сентябрь", id: 9 },
	{ name: "Октябрь", id: 10 },
	{ name: "Ноябрь", id: 11 },
	{ name: "Декабрь", id: 12 },

];

const FilteredMonths = () => {
	//для хранения выбранного месяца и статуса фильтрации
	const [selectedMonth, setSelectedMonth] = useState(null);
	const [items, setItems] = useState([])


	useEffect(() => {
		if (selectedMonth) {
			fetch(`https://642ee23f2b883abc64198889.mockapi.io/purchases?month=${selectedMonth.id}`)
				.then(response => response.json())
				.then(data => setItems(data))
				.catch(error => console.log(error));
		} else {
			setItems([]);
		}
	}, [selectedMonth]);

	return (
		<div className="w-full px-4 py-16">
			{/* компонент для отображения списка месяцев */}
			<RadioGroup value={selectedMonth} onChange={setSelectedMonth}>
				<RadioGroup.Label className="sr-only">Выбрать месяц</RadioGroup.Label>
				<div className="flex w-1/3 justify-evenly flex-wrap mx-auto">

					{/* отображаем каждый месяц*/}
					{months.map((month) => (
						<RadioGroup.Option
							key={month.id}
							value={month.name}
							className={({ active, checked }) =>
								`${active ? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300' : ''}
              					 ${checked ? 'bg-indigo-700 bg-opacity-75 text-white' : 'bg-white'}
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

			{selectedMonth && items.length > 0 && (
				<div className="mt-8">
					<h2 className="text-xl font-bold">{selectedMonth}</h2>
					{items.map((item) => (
						<div key={item.id} className="mt-4">
							<p>{item.date}</p>
							<p>{item.image}</p>
							<p>{item.category}</p>
							<p>{item.name}</p>
							<p>{item.price}</p>
						</div>
					))}
				</div>
			)}
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

export default FilteredMonths;
