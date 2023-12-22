export const MyButton = () => {
  return <button>Super-bee BUTTON</button>;
};

export const Welcome = () => {
  return <h2>Welcome on board!</h2>;
};

export const MyList = () => {
  const products = [
    { title: "Cabbage", isFruit: false, id: 1 },
    { title: "Garlic", isFruit: false, id: 2 },
    { title: "Apple", isFruit: true, id: 3 },
  ];

  const listItems = products.map((product) => (
    <li 
      key={product.id}
      style={{
        color: product.isFruit ? 'green' : "orange"
      }}
    >
      {product.title}
    </li>
  ));

  return (
    <ul>{listItems}</ul>
  ); 
    
};

export function JustButton () {
  function handleClick () {
    alert('You clicked me!');
  }

  return (
    <button onClick={handleClick}>
    Click me
    </button>
  );
}