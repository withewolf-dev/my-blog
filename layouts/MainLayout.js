const MainLayout = ({ children }) => {
  return (
    <div className="site-section">
      <div className="container">
        <div className="row">{children}</div>
      </div>
    </div>
  );
};
export default MainLayout;
