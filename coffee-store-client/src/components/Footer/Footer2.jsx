import navBg from "/nav-bg.jpg";

const Footer2 = () => {
  return (
    <footer className="w-full bg-cover bg-no-repeat bg-center py-4 text-center" style={{background: `url(${navBg})`}}>
      <h4 className="text-white text-lg md:text-xl">Copyright Espresso Emporium ! All Rights Reserved</h4>
    </footer>
  );
};

export default Footer2;