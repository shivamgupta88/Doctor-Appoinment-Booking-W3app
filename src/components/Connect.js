import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AddPatients from './AddPatients.js';
import Navs from './Navs';
import PatientVisited from './PatientVisited';
import GetPatientDetials from './GetPatientDetials';
import GetAll from './GetAll';
import Refund from './Refund';
import IntroComponent from './IntroComponent.js'; // Ensure this import matches your filename

export default function Connect({ instance, balance, address }) {
    return (
        <div>
            <Router>
                <Navs balance={balance} />
                <IntroComponent />
                <div className="mt-8"> {/* This div wraps the Routes and can have a margin-top class for spacing */}
                  <Routes>
                      <Route path='/' element={<AddPatients balance={balance} address={address} aeSdk={instance} />} />
                      <Route path='/patientvisited' element={<PatientVisited balance={balance} address={address} aeSdk={instance} />} />
                      <Route path='/getpatientdetail' element={<GetPatientDetials balance={balance} address={address} aeSdk={instance} />} />
                      <Route path='/getAllPatients' element={<GetAll balance={balance} address={address} aeSdk={instance} />} />
                      <Route path='/refund' element={<Refund balance={balance} address={address} aeSdk={instance} />} />
                  </Routes>
                </div>
            </Router>
        </div>
    );
}
