function Button1(prop) {
  let style = {
    fontWeight: 700,
    padding: " 1rem 2.5rem",
    color: prop.color,
    background: prop.bgColor ,
    border: 0,
    borderRadius: 100,
    fontSize: "14px",
  };
  return <button style={style}>{prop.value}</button>;
}

export default Button1;
