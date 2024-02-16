function Color({colorProp}) {
  return (
    <div
      style={{ backgroundColor: colorProp.hex }}
      className="colorbox"
    ></div>
  );
}

export default Color;
