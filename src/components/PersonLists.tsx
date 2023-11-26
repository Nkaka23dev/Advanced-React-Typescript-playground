/**
import PersonLists from './PersonLists';
 * This component show us how to use array as type for props
 * **/

type PersonListsProps = {
  names: {
    last: string;
    first: string;
  }[];
};

export default function PersonLists(props: PersonListsProps) {
  return (
    <div className="mt-4 space-y-1">
      {props.names.map((name, index) => {
        return (
          <h2 key={index} className="font-bold text-blue-500">
            {name.last} {name.first}
          </h2>
        );
      })}
    </div>
  );
}
