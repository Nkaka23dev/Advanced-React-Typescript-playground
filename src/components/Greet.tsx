type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};

export default function Greet(props: GreetProps) {
  return (
    <div className="">
      {props.isLoggedIn ? (
        <h1 className="text-2xl text-center text-gray-900">
          Welcome
          <span className="text-gray-500 font-semibold"> {props.name}</span>,
          you have {props.messageCount} unread messages
        </h1>
      ) : (
        <h1 className="text-2xl text-center text-gray-900">Welcome Guest</h1>
      )}
    </div>
  );
}
