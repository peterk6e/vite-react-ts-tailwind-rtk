import { LoginForm } from "./components/LoginForm";
import { UserInfo } from "./components/UserInfo";

function App() {
  return (
    <div className="text-center text-veryLightGray font-bold text-4xl md:text-5xl flex md:flex-col flex-row justify-center space-x-3 py-8 bg-lightBlue md:bg-darkGray md:py-16">
      <div>
        Hello
      </div>
      <div>
        World
      </div>
      <LoginForm />
      <UserInfo />
    </div>
  );
}

export default App;
