import { useEffect, useState } from 'react';

const MultipleReturnsBasics = () => {
	const [isLoading, setIsLoading] = useState(true);

  // simulating fetching data with setTimeout
	useEffect(() => {
		setTimeout(() => {
      // Done fetching data.
			setIsLoading(false);
		}, 3000);
	}, []);

	//  if isLoading is true the second return will't display because the code after the return should not display if the condition is true

	// in this case the isLoading is true then, the second should't display.

	if (isLoading) {
		return <h1>Loading...</h1>;
	}
	// not display.
	return <h1>Multiple returns basics</h1>;
};

export default MultipleReturnsBasics;
