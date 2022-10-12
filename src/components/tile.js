const styles = {
  backgroundColor: 'lightblue',
  height: 300,
  width: 300,
  display: 'flex',
  flexDirection: 'column',
};

const Tile = (title, description, date) => {
  return (
    <div style={styles}>
      <h2>I'm a tile</h2>
      <form>
        <input type="text" />
        <input type="texarea" />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default Tile;
