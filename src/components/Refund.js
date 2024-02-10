// import { blake2b } from 'blakejs/blake2b.js';
import React , {useState} from 'react'

function Refund({ balance, address, aeSdk}) {
	const [id, setId] = useState();

	


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
    console.log(id);

    try {
      const contract = await aeSdk.initializeContract({ aci, bytecode, address: "ct_2HtGkY1E74KKhggbihZ21S3yCKyTYbyntzfvUSZ9grHScZ1gqi" });
      const options = {
        amount: 0,
        callData: "",
        fee: null,
        gas: null,
        gasPrice: 1000000000,
      };

      const result = await contract.$call("undoVisitAndRefund", [id], options);
      console.log(result);
      alert("Refund initiated successfully");
    } catch (error) {
      console.error("Error initiating refund:", error);
			alert(error)
    }
  }

  return (
    <div className="bg-slate-800 text-white p-8 m-5 rounded-lg shadow-md">
      <h1 className="text-xl font-semibold mb-4">Fee Refund to Patient - Your Balance : {balance}</h1>
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
          Initiate Refund
        </button>
      </form>
    </div>
  );
}

export default Refund;