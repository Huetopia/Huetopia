function Color({colorProp}) {
  return (
    <div
      style={{ backgroundColor: colorProp.hex }}
    //   className="w-50 h-50 colorbox"
      className="flex flex-col justify-center items-end w-full h-24 pr-5 mb-5 rounded-lg md:h-96 md:mr-5 last:mr-0 md:justify-end md:items-center md:pb-5"
    >
     
        
        <div className="badge badge-lg mb-2">{colorProp.hex}</div>
        <div className="badge badge-lg">{colorProp.rgb}</div>
    </div>
  );
}

export default Color;
