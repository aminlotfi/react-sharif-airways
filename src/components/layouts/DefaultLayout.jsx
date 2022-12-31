import MainHeader from "./MainHeader";
import MainFooter from "./MainFooter";

const DefaultLayout = ({ children }) => (
    <>
        <MainHeader />
        <main className="w-full max-w-[1200px] mx-auto">{children}</main>
        <MainFooter />
    </>
);

export default DefaultLayout;

//424