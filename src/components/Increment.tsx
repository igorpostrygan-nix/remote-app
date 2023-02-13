import store from "host/store";
import { observer } from "mobx-react-lite";

const Increment = () => {
  return (
    <div>
      <div>Value in remote: {store.count}</div>
      <button type='button' onClick={store.increment}>Increment</button>
    </div>
  );
};

export default observer(Increment);
