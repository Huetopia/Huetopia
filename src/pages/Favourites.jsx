import ColorPalettesList from "../components/ColorPalettesList";

export const Favourites = (props) => {
  return (
    <div className="flex justify-center">
      <ColorPalettesList url={props.url} />
    </div>
  );
};
