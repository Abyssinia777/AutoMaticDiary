import PrimaryButton from "./Common/components/atoms/PrimaryButton";
import "./styles.css";

const onClickHandler = (e) => {
  alert("test");
};

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <PrimaryButton text="test" onClickHandler={onClickHandler} />
    </div>
  );
}
