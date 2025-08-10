function Container({ children, background }) {
  return (
    <div
      style={{ maxWidth: "1200px", backgroundColor: background ? "red" : "" }}
    >
      {children}
    </div>
  );
}

export default Container;
