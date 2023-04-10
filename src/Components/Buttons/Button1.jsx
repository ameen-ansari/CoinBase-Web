function Button1(prop) {
  let style = {
    fontWeight: 700,
    color: prop.color,
    background: prop.bgColor ,
    border: 0,
    borderRadius: 100,
    fontSize: "14px",
    width:157,
    height:54,
  };
  return <button style={style}>{prop.value}</button>;
}

export default Button1;
