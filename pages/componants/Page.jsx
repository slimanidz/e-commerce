import Navbar from "./Navbar";

const Page = (props) => {
  const { children } = props;

  return (
    <div className="h-screen  flex flex-col ">
      <Navbar />
      <article className="grow overflow-y-auto">{children}</article>

      {/* <Footer /> */}
    </div>
  );
};
export default Page;
