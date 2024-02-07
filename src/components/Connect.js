import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import NavBar from './Navs'
import AddPatients from './AddPatients.js'
import Navs from './Navs'
import PatientVisited from './PatientVisited'
import GetPatientDetials from './GetPatientDetials'
import GetAll from './GetAll'
import Refund from './Refund'

export default function connect({instance , balance, address}) {
    return (
        <div>
            <Router>
                <Navs/>
                <Routes>
                    {/* <Route path='/' element={<Home balance={balance} address={address} aeSdk={instance} />} /> */}
                    <Route path='/' element={<AddPatients balance={balance} address={address} aeSdk={instance} />} />
                    <Route path='/patientvisited' element={<PatientVisited balance={balance} address={address} aeSdk={instance} />} />
                    <Route path='/getpatientdetail' element={<GetPatientDetials balance={balance} address={address} aeSdk={instance} />} />
                    <Route path='/getAllPatients' element={<GetAll balance={balance} address={address} aeSdk={instance} />} />
                    <Route path='/refund' element={<Refund balance={balance} address={address} aeSdk={instance} />} />


                </Routes>
            </Router>
        </div>
    )
}