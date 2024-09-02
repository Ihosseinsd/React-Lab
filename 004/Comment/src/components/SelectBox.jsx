import { useRef } from "react";
import { useEffect, useState } from "react";

function SelectBox() {
  const closeStyle = {
    padding: 0,
    height: 0,
    overflow: "hidden",
  };
  const ref = useRef();
  const [search, setSearch] = useState([]);
  const [topic, setTopic] = useState('');
  
  
  
  
  const handleChange = () => {
    const value = ref.current.value;
    setTopic(value)
    fetch(`${"http://127.0.0.1:8000/?search="}${value}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setSearch(data.data.matchedTechs);
      });
  };
  const handleTopic = (topicName) => {
    setTopic(topicName)
    setSearch([])
  }




  return (
    <div className="c-box">
      <input
        ref={ref}
        onChange={handleChange}
        className="tpc"
        placeholder="topic"
        type="text"
        value={topic}
      />
      <div className="c-selectbox" style={search.length ? {} : closeStyle}>
        {search.map((item) => {
          const { id, name } = item;
          return (
            <div className="item" key={id} onClick={() => handleTopic(name)}>
              <label htmlFor={id}>{name}</label>
              <input type="radio" name="" id={id} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SelectBox;
