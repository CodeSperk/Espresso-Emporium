/* eslint-disable react/prop-types */
const SecHeader = ({subTitle, title}) => {
  return (
    <div>
      <header className="space-y-2">
        <p>---{subTitle}---</p>
        <h2 className="text-[#35190f]">{title}</h2>
      </header>
      
    </div>
  );
};

export default SecHeader;