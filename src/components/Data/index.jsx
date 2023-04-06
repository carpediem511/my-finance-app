import { useEffect } from "react";

const FilteredByMonths = ({ selectedMonth }) => {


	useEffect(() => {
		console.log("render", selectedMonth);
	}, [selectedMonth]);

	return (
		<>
			<div>продолжить смотреть видео с 5 минуты</div>
		</>
	)
}

export default FilteredByMonths