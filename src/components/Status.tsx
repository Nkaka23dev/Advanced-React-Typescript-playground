import Heading from "./Heading";

type StatusProps = {
  status: "loading" | "success" | "error";
};

export default function Status(props: StatusProps) {
  let message;
  if (props.status === "loading") {
    message = "Loading...";
  } else if (props.status === "success") {
    message = "Data fetched successfully";
  } else if (props.status === "error") {
    message = "Error while fetching the data";
  }
  return (
    <div>
      <h2>Status - {message}</h2>
      <Heading>Placeholder Text</Heading>
    </div>
  );
}
