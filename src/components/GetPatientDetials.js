import React, { useState } from "react";

function GetPatientDetials({ balance, address, aeSdk}) {
	const [id, setId] = useState();

	const [patientDetails, setPatientDetails] = useState(null);

	
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



	async function handleGet(e) {
    e.preventDefault();

    try {
      const contract = await aeSdk.initializeContract({ aci, bytecode, address: "ct_2HtGkY1E74KKhggbihZ21S3yCKyTYbyntzfvUSZ9grHScZ1gqi" });
      const options = {
        amount: 0,
        callData: "",
        fee: null,
        gas: null,
        gasPrice: 1000000000,
      };
  
      const result = await contract.$call("getpatientdetail", [id], options);
      
      if (result && result.decodedResult) {
        const { firstName, lastName, age, gender } = result.decodedResult;
        setPatientDetails({ firstName, lastName, age: age.toString(), gender });
      }
    } catch (error) {
      console.error("Error fetching patient details:", error);
      // Handle error (e.g., show an error message)
    }
  }

  return (
    <div className="bg-slate-800 text-white m-10 p-10 rounded-lg shadow-xl">
      <h1 className="text-2xl font-bold mb-6">Get Patient Details</h1>
      <form onSubmit={handleGet} className="space-y-4">
        <div>
          <label htmlFor="patientId" className="block text-sm font-medium mb-1">
            Patient ID:
          </label>
          <input
            type="number"
            id="patientId"
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="p-2 rounded border border-gray-300 bg-gray-700 text-white focus:ring-2 focus:ring-indigo-500 w-full"
            placeholder="Enter Patient ID"
          />
        </div>
        <button
          type="submit"
          className="py-2 px-4 bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
        >
          Get Details
        </button>
      </form>
      {patientDetails && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-2">Patient Information:</h2>
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="py-3 px-6">
                  First Name
                </th>
                <th scope="col" className="py-3 px-6">
                  Last Name
                </th>
                <th scope="col" className="py-3 px-6">
                  Age
                </th>
                <th scope="col" className="py-3 px-6">
                  Gender
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b">
                <td className="py-4 px-6">
                  {patientDetails.firstName}
                </td>
                <td className="py-4 px-6">
                  {patientDetails.lastName}
                </td>
                <td className="py-4 px-6">
                  {patientDetails.age}
                </td>
                <td className="py-4 px-6">
                  {patientDetails.gender}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default GetPatientDetials;