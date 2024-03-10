import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../pages/Home';
import ContactUs from '../pages/ContactUs';
import OurGoal from '../pages/OurGoal';
import ServicesUs from '../pages/ServicesUs';
import WhyUs from '../pages/WhyUs';

const AllRoutes = () => {
  return (
    <div>
                <Routes>
                    <Route path={'/home'} element={<Home/>}></Route>
                    <Route path={'/servicesUs'} element={<ServicesUs/>}></Route>
                    <Route path={'/whyUs'} element={<WhyUs/>}></Route>
                    <Route path={'/ourGoal'} element={<OurGoal/>}></Route>
                    <Route path={'/contactUs'} element={<ContactUs/>}></Route>
                </Routes>
    </div>
  )
}

export default AllRoutes;

