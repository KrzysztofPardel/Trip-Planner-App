import { useState } from 'react';
import { useStore } from 'easy-peasy';

function MyComponent() {
  const [value, setValue] = useState('');
  const store = useStore((state) => state);

  function handleChange(event) {
    const newValue = event.target.value;
    setValue(newValue);
    store.dispatch((state) => {
      state.inputValue = newValue;
    });
  }

  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
    </div>
  );
}

//In the code above, we create a local state value for the input and use the onChange event to update it. 
//We also use the useStore hook to access the store from easy-peasy and dispatch an action to update the inputValue store.