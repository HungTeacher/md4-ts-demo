import {useContext} from "react";
import {ThemeContext} from "../App";
export const Theme = () => {
    const theme = useContext(ThemeContext)
    console.log(theme)
        return <p className={theme}>The current theme is {theme}</p>
}