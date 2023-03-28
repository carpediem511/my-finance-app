const OnePurchase = (props) => {
	const { purchase } = props
	return (
		<>
			<div className="flex flex-col bg-indigo-100 mb-2 rounded-md font-['Source Sans Pro']">

				<div className="flex">

					<img src={`./images/${purchase.image}`} className="w-6 h-6 rounded-md mt-5 mx-1.5" alt="" />
					<div className="text-xl w-full mt-4 pt-1 font-semibold">{purchase.category}</div>
					<div className="w-full text-end py-2 pr-4 font-['Source Sans Pro']">
						<div className="font-bold">{purchase.date}</div>
						<div className="text-md text-2xl text-indigo-600 font-semibold">-{purchase.price} руб.</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default OnePurchase