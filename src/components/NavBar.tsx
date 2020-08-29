import * as React from 'react';

interface INavBarProps {
    onNavButtonClick: (value: string) => void;
}

export const NavBar = (props: INavBarProps) => {

    const getYearArray = () => {
        let yearArray: number[] = [];
        for (let year: number = 2006; year < 2021; year++) {
            yearArray.push(year++);
        };
        return yearArray;
    }

    const yearArray = getYearArray();

    const handleLaunchEvent = (event: React.ChangeEvent<any>) => {
        event.persist();
        props.onNavButtonClick(`launch_success=${event.target.value}`);
    }

    const handleLandingEvent = (event: React.ChangeEvent<any>) => {
        event.persist();
        props.onNavButtonClick(`land_success=${event.target.value}`);
    }

    const handleLaunchYearEvent = (event: React.ChangeEvent<any>) => {
        event.persist();
        props.onNavButtonClick(`launch_year=${event.target.value}`);
    }

    const renderButton = (year: number) => {
        return (
            <div className={"Launch-Year-Button-Wrapper"} key={year}>
                <button className={"Launch-Year-Button"} id="launchButton" value={year} onClick={handleLaunchYearEvent}>{year}</button>
                {(year !== 2020) &&
                    <button className={"Launch-Year-Button"} id="launchButton" value={year + 1} onClick={handleLaunchYearEvent}>{year + 1}</button>
                }
                {(year === 2020) &&
                    <button style={{ visibility: "hidden" }} className={"Launch-Year-Button"}></button>
                }
            </div>
        );
    }

    return (
        <nav className="Flex-Wrapper NavBar" id="spaceXNavBar">
            <p>Filters</p>
            <p className="Nav-Bar-Headings">Launch Year</p>
            <div>
                {
                    yearArray.map((year) => {
                        return renderButton(year);
                    })
                }
            </div>
            <div>
                <p className="Nav-Bar-Headings">Successful launch</p>
                <div className={"Launch-Year-Button-Wrapper"}>
                    <button className={"Launch-Year-Button"} id="launchButtonTrue" value={'true'} onClick={handleLaunchEvent}>True</button>
                    <button className={"Launch-Year-Button"} id="launchButtonFalse" value={'false'} onClick={handleLaunchEvent}>False</button>
                </div>
            </div>
            <div>
                <p className="Nav-Bar-Headings">Successful landing</p>
                <div className={"Launch-Year-Button-Wrapper"}>
                    <button className={"Launch-Year-Button"} value={'true'} onClick={handleLandingEvent}>True</button>
                    <button className={"Launch-Year-Button"} value={'false'} onClick={handleLandingEvent}>False</button>
                </div>
            </div>
        </nav>
    )
}