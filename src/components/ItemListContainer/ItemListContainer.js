function ItemListContainer({ greeting }) {
  return (
    <p style={{
        margin: 0,
        paddingTop: 30,
        paddingLeft: 30,
        fontSize: 50,
        fontWeight: 900
    }}>{greeting}</p>
  );
}

export default ItemListContainer;