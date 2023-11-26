import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonLists from "./components/PersonLists";

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
  return (
    <div className="h-screen py-20 m-auto max-w-6xl text-center">
      <div className=" bg-gray-100  py-6">
        <Greet name="Eric Nkaka" messageCount={7} isLoggedIn={true} />
      </div>
      <div>
        <Person name={personName} />
      </div>
      <div>
        <PersonLists names={nameList} />
      </div>
    </div>
  );
}
