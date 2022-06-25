import "./themetoggle.scss"

export function ThemeToggle(): JSX.Element {

    function toggleTheme(theme: string){
        localStorage.setItem("mitchlui-dev-theme", theme);
        console.log(theme);
    }

    return (
        <div className={"theme-toggle-container"}>
            <form className={"theme-toggle-form"}>
                <label className={"option"}>
                    <input 
                        type={"radio"} 
                        value={"light"} 
                        name={"theme"}
                        className={"radio"} 
                        onChange={(e) => {
                            toggleTheme(e.target.value);
                        }}
                    />
                    <span className={'label'}>Light</span>
                </label>
                <label className={"option"}>
                    <input 
                        type={"radio"} 
                        value={"dark"} 
                        name={"theme"}
                        className={"radio"} 
                        onChange={(e) => toggleTheme(e.target.value)}
                    />
                    <span className={'label'}>Dark</span>
                </label>
                <label className={"option"}>
                    <input 
                        type={"radio"} 
                        value={"auto"} 
                        name={"theme"}
                        className={"radio"} 
                        onChange={(e) => toggleTheme(e.target.value)}
                    />
                    <span className={'label'}>Auto</span>
                </label>
            </form>
        </div>
    )
}


