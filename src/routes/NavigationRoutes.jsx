/**
 * NavigationRoutes js
 *
 * below written code is example
 *
 *
 * Project:
 * Copyright (c) 2022 Panorbit Services LLP
 *
 * Devlopers:
 * Lucky shukla
 */
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import FirstStepForm from "../pages/FirstStepForm.View";
import SecondStepForm from "../pages/SecondStepForm.View";
const NavigationRoutes = () => {
  return (
    <div>
      <Routes>
        <Route index element={<FirstStepForm />} />
        <Route path="/address_detail" element={<SecondStepForm />} />
        {/* <Route path="/my-agency" element={<MyAgency />} /> */}
      </Routes>
    </div>
  );
};

export default NavigationRoutes;
