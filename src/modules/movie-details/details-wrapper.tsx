const DetailsWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="xl:mx-20 min-h-[92vh] flex-col flex py-5 lg:py-10">
      {children}
    </div>
  );
};
export default DetailsWrapper;
