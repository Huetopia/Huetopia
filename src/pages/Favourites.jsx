import ColorPalettesList from "../components/ColorPalettesList";

export const Favourites = (props) => {
  return (
    <div >
      <ColorPalettesList url={props.url} />
    </div>
  );
};
