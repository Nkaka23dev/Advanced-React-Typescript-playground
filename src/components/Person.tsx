/**
 * This component show us how to use objects as type for props
 * **/

type PersonProps = {
  name: {
    last: string;
    first: string;
  };
};

export default function Person(props: PersonProps) {
  return (
    <div className="font-bold text-gray-800">
      {props.name.last} {props.name.first}
    </div>
  );
}
