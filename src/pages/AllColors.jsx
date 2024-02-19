import ColorPalettesList from "../components/ColorPalettesList";

export const AllColors = (props) => {
  return (
    <div>
      <ColorPalettesList url={props.url}/>
    </div>
  );
};
