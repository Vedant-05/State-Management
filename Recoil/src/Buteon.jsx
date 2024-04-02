import { useRecoilState } from "recoil";
import { countAtom } from "./store/atoms/count";

export function Buteon() {
  // const [count, setCount] = useState(0)
  // const [count,setCount] = useRecoilState(countAtom);
  const [count, setCount] = useRecoilState(countAtom);

  return (
    <>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </>
  );
}
