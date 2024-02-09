import BeforeSign from "./Components/BeforeSign";
import { Routes, Route } from 'react-router-dom';
import UserProfilePage from "./Components/UserProfilePage";
import Createorg from "./Components/Createorg";
import OrgList from "./Components/OrgList";
import Orgprofile from "./Components/Orgprofile";
 
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" Component={BeforeSign} />
        <Route path="/profile" Component={UserProfilePage} />
        <Route path="/org" Component={Createorg} />
        <Route path="/orglist" Component={OrgList} />
        <Route path="/organization/org_2c9B6noA6mdZHjxfwvUMTV3L4MR" Component={Orgprofile} />
      </Routes>
    </>
  )
}

export default App