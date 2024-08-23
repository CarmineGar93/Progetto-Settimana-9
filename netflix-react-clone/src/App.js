import { Container } from "react-bootstrap";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Navbarflix from "./components/Navbarflix";
import Titleflix from "./components/Titleflix";
import Footerflix from "./components/Footerflix";
import Movieflix from "./components/Movieflix";
import NavbarflixProfile from "./components/NavbarflixProfile";
import ProfileFlix from "./components/Profileflix";
import { useState } from "react";

function App() {
  const [data, setData] = useState("");

  const childToParent = (childdata) => {
    setData(childdata);
  };
  console.log(data);
  return (
    <Container fluid data-bs-theme="dark" className="bg-dark-subtle p-0">
      <Container className="py-5" datadata-bs-theme="dark">
          <header>
              <NavbarflixProfile />
          </header>
          <main className="py-5">
            <ProfileFlix />
          </main>
      </Container>
      {/* <header>
        <Navbarflix childToParent={childToParent} />
      </header>
      <main className="py-3 px-2">
        <Container fluid className="mb-4">
          <Titleflix />
        </Container>
        {!data && (
          <>
            <Movieflix searched="Harry Potter" />
            <Movieflix searched="Star Wars" />
            <Movieflix searched="Avengers" />
          </>
        )}
        {
          data && <Movieflix searched={data} />
        }
      </main>
      <footer className="pt-5">
        <Footerflix />
      </footer> */}
    </Container>
  );
}

export default App;
