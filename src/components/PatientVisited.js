import React , {useState} from 'react'

function PatientVisited({balance , address ,aeSdk})  {

	const [id, setId] = useState();

	let x = true ; 

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


	async function handleSubmit(e) {
		e.preventDefault() ; 
		console.log(id) ; 

		// const contract = await aeSdk.initializeContract({ aci, bytecode, address: "ct_mzdNPHxsu9cRhwMLqebBWQasZ6ctsH6wUPaif9MauKCydFeMk" })
const  contract = await aeSdk.initializeContract({ aci, bytecode, address: "ct_2HtGkY1E74KKhggbihZ21S3yCKyTYbyntzfvUSZ9grHScZ1gqi" })

		const options1 = {
			amount: 0,
			callData: "",
			fee: null,
			gas: null,
			gasPrice: 1000000000,
		};
		const args = [id];
		const options = Object.fromEntries(
			Object.entries(options1).filter(([, v]) => v != null),
		);
  
		contract
			?.$call("patientvisited",args, options)
			.then((result) => {
				console.log(result);
				// setSpendPromise(result.hash)
				alert("Patient Visited Updated")
				x = false ; 
				console.log(result);
			if(x === true )alert("Only Doctor can Mark visited.")
			});

	};

		
	// return (
	// 	<div className=' bg-red-400 p-4 rounded m-3'>
	// 		<h1>Mark Patient Visited {balance}</h1>
	// 		<form onSubmit={(e) => handleSubmit(e)}>
	// 			<label>Patient Visited</label>
	// 			<input type='number' placeholder='Enter Patient id' value={id} onChange={(e) => setId(e.target.value)}></input>
	// 			<button type='submit  ' className='bg-green-400 rounded px-2'>Mark</button>
				
				
	// 		</form>
	// 	</div>
	// )

	return (
    <div className="bg-slate-800 text-white m-10 p-10 rounded-lg shadow-xl">
      <h1 className="text-2xl font-bold mb-6">Mark Patient Visited </h1>
      <p className="text-2xl font-bold mb-6">Only Doctor Mark Patient Visited </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label className="mb-2 font-medium">Patient ID</label>
          <input
            type="number"
            placeholder="Enter Patient ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="p-2 rounded border border-gray-300 bg-gray-700 text-white focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="py-2 px-4 bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
        >
          Mark as Visited
        </button>
      </form>
    </div>
  );
}

export default PatientVisited
