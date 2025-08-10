function Greeting({ username, age }) {
  const validAge = age > 18;

  function copyHandler(message) {
    navigator.clipboard.writeText = "You got nothing";

    alert(message);
  }

  return (
    <div className="test">
      <p onClick={() => copyHandler("Pay then copy ")}>
        Welcome {username}, {validAge ? `your age is ${age}` : `NOt allowed`}
      </p>
    </div>
  );
}

export default Greeting;
