import { useStore } from 'easy-peasy';

function MyOtherComponent() {
  const inputValue = useStore((state) => state.inputValue);

  return (
    <div>
      <p>The stored value is: {inputValue}</p>
    </div>
  );
}