import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/layout";
import Button from "./components/button";

function App() {
  return (
    <div className="App">
      <Layout headerTitle="Đây là header !!!" footerTitle="Đây là footer !!!">
        <main
          style={{ width: "100%", height: "500px", backgroundColor: "red" }}
        >
          <Button
            name="Continue with Apple"
            icon={<i class="fa-brands fa-apple fa-xl"></i>}
            classes="bg-black"
          />
          <Button
            name="Continue with Google"
            icon={<i class="fa-brands fa-google fa-xl" />}
            classes="bg-white"
          />
          <Button
            name="Continue with Facebook"
            icon={<i class="fa-brands fa-facebook fa-xl" />}
            classes="bg-white"
            class_ic="fb-ic"
          />
        </main>
      </Layout>
    </div>
  );
}

export default App;
