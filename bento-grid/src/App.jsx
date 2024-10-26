import { BottomFrame } from "./components/Aside/BottomFrame/BottomFrame";
import { UpperFrame } from "./components/Aside/UpperFrame/UpperFrame";

function App() {
  return (
    <>
      <main>
        <aside>
          <UpperFrame />
          <BottomFrame />
        </aside>

        <section className="main-content">
          <p>Main</p>
        </section>

        <section className="section_content">
          <p>Section</p>
        </section>
      </main>
    </>
  );
}

export default App;
