import { useState, useContext, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun, faCog } from "@fortawesome/free-solid-svg-icons";
import { ThemeContext } from "../utile/SkinContext";

// type ThemeType = { dark: boolean; skin: number };

const ColorPicker = () => {
    const themeContext = useContext(ThemeContext);

    //checking if themecontext exist cuz it's type is either a dispatcher or undefined
    if (!themeContext) {
        throw new Error("ThemeContext is not provided.");
    }

    const { updateTheme } = themeContext;

    // const [theme, setTheme] = useState<ThemeType>();

    const storedTheme = JSON.parse(localStorage.getItem("theme") || "{dark : false, skin : 1}") || null;

    const [skin, setSkin] = useState(storedTheme?.skin || 1);
    const [dark, setDark] = useState(storedTheme?.dark || false);
    const [show, setShow] = useState(false);

    console.log(dark, skin);
    useEffect(() => {
        localStorage.setItem("theme", JSON.stringify({ dark, skin }));
        document.querySelector("#container")?.classList.remove("color-" + 1);
        document.querySelector("#container")?.classList.add("color-" + skin);
        updateTheme(colors[skin - 1]);

        document.querySelector("body")?.classList.add(dark ? "dark" : "light");
    }, [dark, skin]);

    const handleClick = (i: number, color: string) => {
        document.querySelector("#container")?.classList.remove("color-" + skin);
        setSkin(i + 1);
        document.querySelector("#container")?.classList.add("color-" + (i + 1));
        updateTheme(color);
        console.log("click at", i, color);
    };

    const colors = ["#ec1839", "#fa5b0f", "#37b182", "#1854b4", "#f021b2"];

    useEffect(() => {
        window.addEventListener("scroll", () => {
            show ? setShow(false) : "";
        });
    });

    return (
        <div
            id="theme"
            className={`flex justify-center items-center gap-4 fixed transition-translate-x ease-in-out duration-500 top-28 right-0 ${
                show ? "translate-x-0 open" : "translate-x-52"
            } `}
        >
            <div className="flex flex-col gap-5">
                <FontAwesomeIcon
                    icon={faCog}
                    spin
                    className="text-black-900 cursor-pointer h-5 w-5 p-2 rounded-3xl bg-bcg-black-50 flex justify-center items-center "
                    onClick={() => setShow(!show)}
                />
                <span
                    className="h-5 w-5 p-4 rounded-3xl bg-bcg-black-50 flex justify-center items-center cursor-pointer"
                    onClick={() => {
                        document
                            .querySelector("body")
                            ?.classList.toggle("dark");
                        setDark((predark: boolean) => !predark);
                    }}
                >
                    {dark ? (
                        <FontAwesomeIcon
                            icon={faSun}
                            className="text-black-900"
                        />
                    ) : (
                        <FontAwesomeIcon
                            icon={faMoon}
                            className="text-black-900"
                        />
                    )}
                </span>
            </div>
            <div className="text-center w-[200px] flex flex-col p-3 gap-3 bg-bcg-black-100 rounded-md">
                <h3 className="font-semibold">Theme Color</h3>
                <ul className="flex gap-3">
                    {colors.map((color, i) => (
                        <li
                            key={i}
                            style={{ backgroundColor: color }}
                            className="h-6 w-6 cursor-pointer rounded-3xl"
                            onClick={() => handleClick(i, color)}
                        ></li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ColorPicker;
