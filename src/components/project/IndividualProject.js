import { NavLink } from "react-router-dom";

function IndividualProject(props) {
  return (
    <ul>
      {props.eachProject.map(element => (
        <li className="" key={element.id}>
          <div className="">
            <h3 className="">{element.name}</h3>
            <address>{element.url}</address>
            <p>{element.description}</p>
            <p>{element.questions}</p>
          </div>
          <NavLink to={`/my-projects/${element.id}`}> Go to Project</NavLink>
        </li>
      ))}
    </ul>
  );
}

export default IndividualProject;
