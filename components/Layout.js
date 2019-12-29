import Header from './Header';

export default function Layout(props) {
  const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD',
  };

  return (
    <div style={layoutStyle}>
      <Header />
      {props.children}
    </div>
  );
}
