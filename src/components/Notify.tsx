interface ErrorMessage {
  errorMessage: string;
}

const Notify = ({ errorMessage }: ErrorMessage) => {
  if (!errorMessage || errorMessage === "") {
    return null;
  }
  return <div style={{ color: "red" }}>{errorMessage}</div>;
};

export default Notify;
