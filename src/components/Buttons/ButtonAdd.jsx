function ButtonAdd({ title, addNewSpending, type }) {
	return (
		<button
			onClick={(event) => addNewSpending(event)}
			type={type}
			className="w-5/12 px-2 py-2 duration-300 cursor-pointer text-lg font-medium grow-0 border border-sky-700 rounded-lg text-slate-50 bg-emerald-500 hover:bg-emerald-600"
		>
			{title}
		</button>
	)
}

export default ButtonAdd