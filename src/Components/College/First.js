const First = () => {
  return (
    <>
      <div className="wrapper">
        {tenthData.map((item) => {
          return <Card {...item} key={item.id} />;
        })}
      </div>
    </>
  );
};

export default First;
