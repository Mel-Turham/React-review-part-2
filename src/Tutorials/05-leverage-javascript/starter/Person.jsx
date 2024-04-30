import avatar from '../../../assets/singe.png';

export default function Person({
	name,
	nickName = 'Nickname not there',
	images,
}) {
	// const img = images && images[0] && images[0].small && images[0].small.url;
	// optional chaining check if the value is null or undefined 
	// const img = images?.[0]?.small?.url || avatar;

	const img = images?.[0].small?.url ?? avatar;

	//  images[0].small.url;
	return (
		<div>
			<img
				src={img}
				alt={name}
				style={{
					width: '70px',
					height: '70px',
					borderRadius: '50%',
					objectFit: 'cover',
					margin: '1rem auto',
				}}
			/>
			<h2>{name}</h2>
			{/* first option with OR operator */}
			{/* <p>Nickname:{nickName || 'Not nickname provided'}</p> */}
			<p>{nickName}</p>
		</div>
	);
}
