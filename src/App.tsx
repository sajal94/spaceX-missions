import React, { useEffect, useState } from 'react';
import { CircularProgress } from '@material-ui/core';
import './App.css';
import { NavBar } from './components/NavBar';
import { SpaceXService } from './services/SpaceX.service';

export const App = () => {

  const [missions, setMissions] = useState<any>([]);
  const [inProgress, setInProgress] = useState<boolean>();

  const spaceXService = new SpaceXService();

  useEffect(() => {
    getMissionData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getMissionData = async (value?: string) => {
    setInProgress(true);
    const missionData = await spaceXService.getMissionData(value);
    setMissions(missionData);
    setInProgress(false);
  }

  const renderMissionId = (id: string) => {
    return (
      <ul key={id}>
        <li>{id}</li>
      </ul>
    )
  }

  const renderCard = (mission: any) => {
    return (
      <div key={mission.flight_number} className="Flex-Wrapper Card-Wrapper">
        <div className="Rocket-Image-Wrapper">
          <img className={"Rocket-Image"} src={mission.links.mission_patch_small} alt={mission.mission_name} />
        </div>
        <h4>{mission.mission_name} #{mission.flight_number}</h4>
        <h4>Mission Ids:</h4>
        {mission.mission_id.map((id: string) => {
          return renderMissionId(id);
        })}
        <div><span className="Card-Label">Launch Year:</span><span>{mission.launch_year}</span></div>
        <div><span className="Card-Label"> Successful Launch:</span><span>{mission.launch_success ? mission.launch_success.toString() : 'false'}</span></div>
        <div><span className="Card-Label">Successful Landing:</span><span>{mission.launch_success ? mission.launch_success.toString() : 'false'}</span></div>
      </div>
    )
  }


  return (
    <div style={{ backgroundColor: "lightgray" }}>
      <header>
        <h3 className="SpaceX-Top-Label">SpacEx Launch programs</h3>
      </header>
      <div className="Nav-Wrapper">
        <NavBar onNavButtonClick={getMissionData}></NavBar>
        <div className="Card-Parent-Wrapper">
          {!inProgress && missions.length > 0 &&
            missions.map((mission: any) => {
              return renderCard(mission);
            })
          }
          {inProgress &&
            <div className="Circular-Progress">
              <CircularProgress size={60} />
            </div>
          }
        </div>
      </div>
      <footer className="Footer">
        <span><span className="Card-Label">Developed by</span>: <span>Sajal Sharma</span></span>
      </footer>
    </div>
  );
}

export default App;
