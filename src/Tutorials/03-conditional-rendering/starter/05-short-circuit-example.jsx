import { useState } from 'react';

const ShortCircuitExamples = () => {
	// falsy value
	const [text, setText] = useState('');
	// truthy values

	const [name, setName] = useState('William');
	const [user, setUser] = useState({ name: 'John' });
	const [isEditing, setIsEditing] = useState(false);

	return (
		<>
			<h1>Short circuit Examples</h1>
			{/* 
      OR operator ===> ||
      the result will be the default value because text ==> falsy value */}
			<h2>{text || 'Default value there'}</h2>
			{/*
      AND operator ===> &&
      the second should't return because the and operator check first time the falsy value.
      
      in this case text is an empty string ('')*/}
			{text && (
				<div>
					<h2>Whatever return </h2>
					<h2>{name}</h2>
				</div>
			)}
			{/* The second value will be displaying because the not operator cover the in the opposite.
      if is falsy value it should cover in truthy value
      Example : console.log(!true) // false.
                console.log(!false) // true.
                const text = ""
                console.log(!text) ==> true.
                etc...

      */}
			{/* {!text && (
				<div>
					<h2>Whatever return </h2>
					<h2>{name}</h2>
				</div>
			)} */}

			{user && <SomeComponent name={user.name} />}

			{/* ternary operator  condition ? expression 1 : expression 2 
      

      The ternary operator return expression 1 if condition is true otherwise, if it's false the second expression 2
      */}
			<button type='button' className='btn'>
				{isEditing ? 'Edit' : 'Add'}
			</button>
			{user ? (
				<div>
					<h2>Hello there {user.name}</h2>
				</div>
			) : (
				<h2>Please login</h2>
			)}
		</>
	);
};

const SomeComponent = ({ name }) => {
	return (
		<div>
			<h2>Whatever return </h2>
			<h2>{name}</h2>
		</div>
	);
};

export default ShortCircuitExamples;
