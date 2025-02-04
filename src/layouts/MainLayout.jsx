import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../shared/Footer';
import Navbar from '../shared/Navbar';

const MainLayout = () => {
const location = useLocation()
console.log(location)
const noHeaderFooter = ["/login","/register"].includes(location.pathname)
  return (
    <div className="max-w-screen-xl mx-auto">
    <section className="">
    {noHeaderFooter || <Navbar></Navbar>}
    </section>
      <Outlet></Outlet>
      <section className="">
      {noHeaderFooter || <Footer></Footer>}
      </section>
    </div>
  );
};

export default MainLayout;