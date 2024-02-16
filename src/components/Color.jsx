function Color({colorProp}) {
  return (
    <div
      style={{ backgroundColor: colorProp.hex }}
    //   className="w-50 h-50 colorbox"
      className="flex-none w-14 h-14"
    ></div>
  );
}

export default Color;
