import React , {useState} from 'react'
// import { Button } from 'react-bootstrap'

function GetAll({balance , address ,aeSdk})  {

	const [patients, setPatients] = useState([]);

	let aci = [
		{
			"namespace": {
				"name": "ListInternal",
				"typedefs": []
			}
		},
		{
			"namespace": {
				"name": "List",
				"typedefs": []
			}
		},
		{
			"namespace": {
				"name": "String",
				"typedefs": []
			}
		},
		{
			"contract": {
				"functions": [
					{
						"arguments": [
							{
								"name": "registrationFee",
								"type": "int"
							}
						],
						"name": "init",
						"payable": false,
						"returns": "DoctorAppointment.state",
						"stateful": false
					},
					{
						"arguments": [
							{
								"name": "firstName",
								"type": "string"
							},
							{
								"name": "lastName",
								"type": "string"
							},
							{
								"name": "age",
								"type": "int"
							},
							{
								"name": "gender",
								"type": "string"
							}
						],
						"name": "bookappointment",
						"payable": true,
						"returns": "int",
						"stateful": true
					},
					{
						"arguments": [
							{
								"name": "patient_id",
								"type": "int"
							}
						],
						"name": "patientvisited",
						"payable": false,
						"returns": {
							"tuple": []
						},
						"stateful": true
					},
					{
						"arguments": [
							{
								"name": "patient_id",
								"type": "int"
							}
						],
						"name": "getpatientdetail",
						"payable": false,
						"returns": "DoctorAppointment.patient",
						"stateful": false
					},
					{
						"arguments": [
							{
								"name": "patient_id",
								"type": "int"
							}
						],
						"name": "undoVisitAndRefund",
						"payable": true,
						"returns": {
							"tuple": []
						},
						"stateful": true
					},
					{
						"arguments": [],
						"name": "getAllPatients",
						"payable": false,
						"returns": {
							"map": [
								"int",
								"DoctorAppointment.patient"
							]
						},
						"stateful": false
					}
				],
				"kind": "contract_main",
				"name": "DoctorAppointment",
				"payable": false,
				"state": {
					"record": [
						{
							"name": "doctor",
							"type": "address"
						},
						{
							"name": "patients",
							"type": {
								"map": [
									"int",
									"DoctorAppointment.patient"
								]
							}
						},
						{
							"name": "registrationFee",
							"type": "int"
						}
					]
				},
				"typedefs": [
					{
						"name": "patient",
						"typedef": {
							"record": [
								{
									"name": "firstName",
									"type": "string"
								},
								{
									"name": "lastName",
									"type": "string"
								},
								{
									"name": "age",
									"type": "int"
								},
								{
									"name": "gender",
									"type": "string"
								},
								{
									"name": "isPaid",
									"type": "bool"
								},
								{
									"name": "isVisited",
									"type": "bool"
								},
								{
									"name": "patientAddress",
									"type": "address"
								}
							]
						},
						"vars": []
					}
				]
			}
		}
	] ; 

	let bytecode = "cb_+QJ8RgOgzumgebkfKJu/gSqzOHAP1hNuEOpeNr3U/yAqqzXTtIzAuQJOuQGr/hyRo38ANwEHNwACAxFGQw4kDwJvgibPLxiEAAcMBvsDRVBhdGllbnQgbm90IGZvdW5kKxoOhAAp7AoO/y0ahIQAAQM//jkybaIANwBnBzcHd3cHdxcXRwABAoT+RNZEHwA3AQc3AFUCghoOhC8AGgaGAAEDP/5GQw4kAjcANwBVACAgggcMBPsDmU9ubHkgdGhlIGRvY3RvciBjYW4gY2FsbCB0aGlzIGZ1bmN0aW9uAQM//mEh/6gENwEHNwACAxFGQw4kDwJvgibPLxiEAAcMBvsDRVBhdGllbnQgbm90IGZvdW5kGgoIhCsaCggAKCwKCiAwfwcMCvsDbVBhdGllbnQgaGFzIGFscmVhZHkgdmlzaXRlZBoKEIYoLAwKZQgQKxoYhAAp7AoYfy0ahIQAAQM//nIdDtYENwR3dwd3BxoKAIQxCAAUMgICDAEADAECDAEEDAEGDAN/DAN/VQAnDA4PAgYaCgiCZQoIhi2qhIQCBgECAv6actIWADcBBzcHd3cHdxcXRwAvGIQABwwE+wNFUGF0aWVudCBub3QgZm91bmQrGIQAALibLwcRHJGjfzlwYXRpZW50dmlzaXRlZBE5Mm2iOWdldEFsbFBhdGllbnRzEUTWRB8RaW5pdBFGQw4keS5Eb2N0b3JBcHBvaW50bWVudC5vbmx5X2RvY3RvchFhIf+oSXVuZG9WaXNpdEFuZFJlZnVuZBFyHQ7WPWJvb2thcHBvaW50bWVudBGactIWQWdldHBhdGllbnRkZXRhaWyCLwCFNy40LjAA+wHyAA=="




	async function handleClick(e) {
    e.preventDefault();
    console.log("handled clicked");

    const contract = await aeSdk.initializeContract({ aci, bytecode, address: "ct_2HtGkY1E74KKhggbihZ21S3yCKyTYbyntzfvUSZ9grHScZ1gqi" });

    const options = {
      amount: 0,
      callData: "",
      fee: null,
      gas: null,
      gasPrice: 1000000000,
    };

    contract
      ?.$call("getAllPatients", [], options)
      .then((result) => {
        console.log(result);
        alert("Fetched all patients");

        const patientsDetails = [];
        result.decodedResult.forEach((value, key) => {
          patientsDetails.push({
            id: key,
            ...value
          });
        });
        setPatients(patientsDetails);
      });
  }

  return (
    <div className='bg-gray-700 text-white p-6'>
      <h1 className="text-xl mb-4">Balance: {balance}</h1>
      <button
        onClick={(e) => handleClick(e)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Get All Patients
      </button>
      <div className="overflow-x-auto mt-6">
        <table className="table-auto w-full">
          <thead>
            <tr className="bg-gray-600">
              <th className="px-4 py-2">Patient ID</th>
              <th className="px-4 py-2">First Name</th>
              <th className="px-4 py-2">Last Name</th>
              <th className="px-4 py-2">Age</th>
              <th className="px-4 py-2">Gender</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient, index) => (
              <tr key={index} className="bg-gray-800 border-b border-gray-600">
                <td className="px-4 py-2">{patient.id.toString()}</td>
                <td className="px-4 py-2">{patient.firstName}</td>
                <td className="px-4 py-2">{patient.lastName}</td>
                <td className="px-4 py-2">{patient.age.toString()}</td>
                <td className="px-4 py-2">{patient.gender}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default GetAll;