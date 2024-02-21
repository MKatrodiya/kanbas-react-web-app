import ModuleList from "../Modules/List";
import CourseStatus from "./Status";


function Home() {
    return (
        <div className="d-flex">
            <ModuleList />
            <CourseStatus />
        </div>
    );
}
export default Home;

