import {
  Button,
  Container,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
} from "semantic-ui-react";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import "./App.css";
import Feature from "./Feature";

function App() {
  const [sidebarOpened, setSidebarOpened] = useState(false);
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const handleSidebarHide = () => setSidebarOpened(false);
  const handleToggle = () => setSidebarOpened(true);
  return (
    <div>
      {isTabletOrMobile && (
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation="overlay"
            inverted
            onHide={handleSidebarHide}
            vertical
            visible={sidebarOpened}
          >
            <Menu.Item as="a" header>
              <Image
                size="mini"
                src="/logo192.png"
                style={{ marginRight: "1.5em" }}
              />
              Project Name
            </Menu.Item>
            <Menu.Item as="a" active>
              Home
            </Menu.Item>
            <Menu.Item as="a">Work</Menu.Item>
            <Menu.Item as="a">Company</Menu.Item>
            <Menu.Item as="a">Careers</Menu.Item>
            <Menu.Item as="a">Log in</Menu.Item>
            <Menu.Item as="a">Sign Up</Menu.Item>
          </Sidebar>

          <Sidebar.Pusher dimmed={sidebarOpened}>
            <Menu inverted>
              <Menu.Item onClick={handleToggle}>
                <Icon name="sidebar" />
              </Menu.Item>
              <Menu.Item position="right">
                <Button as="a" inverted>
                  Log in
                </Button>
                <Button as="a" inverted style={{ marginLeft: "0.5em" }}>
                  Sign Up
                </Button>
              </Menu.Item>
            </Menu>
            <Container text style={{ marginTop: "2em" }}>
              <Feature />
            </Container>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      )}
      {isDesktopOrLaptop && (
        <>
          <Menu fixed="top" inverted>
            <Container>
              <Menu.Item as="a" header>
                <Image
                  size="mini"
                  src="/logo192.png"
                  style={{ marginRight: "1.5em" }}
                />
                Project Name
              </Menu.Item>
              <Menu.Item as="a" active>
                Home
              </Menu.Item>
              <Menu.Item as="a">Work</Menu.Item>
              <Menu.Item as="a">Company</Menu.Item>
              <Menu.Item as="a">Careers</Menu.Item>
              <Menu.Item as="a">Log in</Menu.Item>
              <Menu.Item as="a">Sign Up</Menu.Item>
              <Menu.Item position="right">
                <Button as="a" inverted>
                  Log in
                </Button>
                <Button as="a" inverted style={{ marginLeft: "0.5em" }}>
                  Sign Up
                </Button>
              </Menu.Item>
            </Container>
          </Menu>
          <Container text style={{ marginTop: "6em" }}>
            <Feature />
          </Container>
        </>
      )}
    </div>
  );
}

export default App;
