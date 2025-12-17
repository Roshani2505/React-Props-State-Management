import MessageCard from "./MessageCard";

function App() {
  return (
    <div>
      <MessageCard
        title="Welcome"
        message="Welcome to React Props concept"
      />

      <MessageCard
        title="Reminder"
        message="Practice React daily to improve"
      />

      <MessageCard
        title="Success"
        message="You are doing great, keep learning!"
      />

      <MessageCard
        title="Assignment"
        message="Submit the assignment before deadline"
      />
    </div>
  );
}

export default App;
