import "./App.css";
import AppRouter from "./routes";
import ToastProvider from "./components/global/ToastContainer";
import Provider from "./Provider";

function App() {
  return (
    <Provider>
      <AppRouter />
      <ToastProvider />
    </Provider>
  );
}

export default App;
