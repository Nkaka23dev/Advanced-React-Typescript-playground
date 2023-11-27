import Button from "./components/Button";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";
import Person from "./components/Person";
import PersonLists from "./components/PersonLists";
import Status from "./components/Status";

export default function App() {
  const personName = {
    last: "Bruce",
    first: "Kwizera",
  };
  const nameList = [
    {
      last: "Clever",
      first: "Umuhuza",
    },
    {
      last: "Yvette",
      first: "Batamuriza",
    },
    {
      last: "Evelyne",
      first: "Umurerwa",
    },
  ];
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number
  ): void => {
    console.log("button Clicked", event, id);
  };
  return (
    <div className="h-screen py-20 m-auto max-w-6xl text-center">
      <div className=" bg-gray-100  py-6">
        <Greet name="Eric Nkaka" isLoggedIn={true} />
      </div>
      {/* 
      <div>
        <Person name={personName} />
      </div>
      <div>
        <PersonLists names={nameList} />
      </div> */}
      {/* <Status status="success" /> */}
      {/* <Oscar>
        <Heading>Oscar goes to Eric Nkaka</Heading>
      </Oscar> */}
      <Button handleClick={handleClick} />
    </div>
  );
}
