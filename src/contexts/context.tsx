import useLocalStorage from "../hooks/useLocalStorage";
import { createContext, FC } from "react";
import fmt from "../util/fmt";

const defaultHtml = "<h1>Hello, World!</h1>";
const defaultCss = "body {\n\tcolor: red;\n}";
const defaultJs = 'console.log("Hello, World!");';

const EditorContext = createContext({
    html: defaultHtml,
    css: defaultCss,
    js: defaultJs,
    setHtml() {},
    setCss() {},
    setJs() {},
    format() {},
});

interface EditorContextProviderProps {
    children: JSX.Element[];
}

const EditorContextProvider: FC<EditorContextProviderProps> = ({
    children,
}) => {
    const [html, setHtml] = useLocalStorage("html", defaultHtml);
    const [css, setCss] = useLocalStorage("css", defaultCss);
    const [js, setJs] = useLocalStorage("js", defaultJs);

    const format = () => {
        fmt(html, "html").then((html) => setHtml(html));
        fmt(css, "css").then((css) => setCss(css));
        fmt(js, "js").then((js) => setJs(js));
    };

    return (
        <EditorContext.Provider
            value={{ html, css, js, format, setHtml, setCss, setJs }}
        >
            {children}
        </EditorContext.Provider>
    );
};

export { EditorContextProvider, EditorContext };
