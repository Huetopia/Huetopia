import ColorPalettesList from "../components/ColorPalettesList";

export const AllColors = (props) => {
  return (
    <div className="flex justify-center">
      <ColorPalettesList url={props.url}/>
    </div>
  );
};
