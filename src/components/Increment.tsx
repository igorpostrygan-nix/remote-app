import sharedStore from "host/store";
import { observer } from "mobx-react-lite";

interface Props {
  globalStore?: any
}

const Increment = ({ globalStore }: Props) => {
  const store = globalStore || sharedStore;
  return (
    <div>
      <div>Value in remote: {store.count}</div>
      <button type='button' onClick={store.increment}>Increment</button>
    </div>
  );
};

export default observer(Increment);
