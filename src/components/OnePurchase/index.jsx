const OnePurchase = (props) => {
	const { purchase } = props
	return (
		<>
			<div className="flex flex-col">
				<div className="flex">
					<p>{purchase.date}</p>
					<img src={`./images/${purchase.image}`} className="w-22 rounded-md" alt="" />
					<p className="text-xl mt-2">{purchase.category}</p>
					<p className="text-md">-{purchase.price} руб.</p>
				</div>
			</div>
		</>
	)
}

export default OnePurchase