import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer';
import Navbar from '../shared/Navbar';

const MainLayout = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
    <section className="">
    <Navbar></Navbar>
    </section>
      <Outlet></Outlet>
      <section className="">
      <Footer></Footer>
      </section>
    </div>
  );
};

export default MainLayout;