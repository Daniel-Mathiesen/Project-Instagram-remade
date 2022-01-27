/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";

// Pages
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import People from "../pages/SeeMore";

// Templates
import NavbarMain from './NavbarMain';

// Components
import ThinText from "../components/ThinText";
import GDPR from "../components/GDPR";
import DropdownProfile from "../components/DropdownProfile"
import HoverDropdown from "../components/HoverDropdown"


function App() {

    // This is only af test theme, it will be updated later...
    const main = {
        backgroundColor: "lightblue",
    };

    // Style (resets)
    const styles = css`
        .Main {
            background-color: #fafafa;
        };

        * {
            box-sizing: border-box;
            font-family: -apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif;
        };

        h1, h2, h3, h4, h5, h6, p {
            margin: 0;
        };

        p {
            margin: 0;
        };

        a {
            text-decoration: none;
            color: black
        };

        address {
            font-style: normal;
        };

        button {
            padding: 0;
            border: none;
            background: white;
        };

        button:hover {
            cursor: pointer;
        };

        img, video {
            display: block;
        };

        figure, input {
            margin: 0;
        };

        input, textarea {
            padding: 0;
            border: none;
            outline: none;
        };

        ul {
            padding: 0;
            margin: 0;
        };

        li {
            list-style-type: none;
        };
    `;

    return (
        <ThemeProvider theme={main}>
            <div className="App" css={styles}>
                <GDPR />
                <NavbarMain />
                <main className="Main">
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/user" element={<Profile />}>
                            <Route exact path="/user/saved" element={<Profile />} />
                            <Route exact path="/user/tagged" element={<Profile />} />
                        </Route>
                        <Route exact path="/people" element={<People />} />
                        <Route path="*" element={<ThinText text="Nothing found..." />} />
                    </Routes>
                </main>
            </div>
        </ThemeProvider>
    );
}

export default App;