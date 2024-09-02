import Avatar from "../assets/avatar.png";
function Comment({ name, message, children, refElement, setName, setState }) {
  const handleClick = () => {
    refElement.current.scrollIntoView({ behavior: "smooth" });
    setName(name);
    setState(true);
  };
  return (
    <div className="box">
      <div className="content">
        <div className="avatar">
          <img src={Avatar} alt="avatar" />
        </div>
        <div className="texts">
          <div className="header">
            <h3 className="name">{name}</h3>
            <button onClick={handleClick}>replay</button>
          </div>
          <p className="message">{message}</p>
        </div>
      </div>
      <div className="children">
        {children.map(({ id, name, message, children }) => (
          <Comment
            setState={setState}
            key={id}
            id={id}
            name={name}
            message={message}
            children={children}
            refElement={refElement}
            setName={setName}
            onsetState={setState}
          />
        ))}
      </div>
    </div>
  );
}

export default Comment;
