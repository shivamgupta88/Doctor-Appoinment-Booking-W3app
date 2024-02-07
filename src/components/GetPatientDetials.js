import React  , {useState} from 'react'

function GetPatientDetials({balance , address ,instance})  {
	const [id, setId] = useState();

	function handleGet(e) {
		e.preventDefault() ; 
		console.log(id)
	}


	let aci = [
		{
			namespace: {
				name: "ListInternal",
				typedefs: [],
			},
		},
		{
			namespace: {
				name: "List",
				typedefs: [],
			},
		},
		{
			namespace: {
				name: "String",
				typedefs: [],
			},
		},
		{
			contract: {
				functions: [
					{
						arguments: [
							{
								name: "registrationFee",
								type: "int",
							},
						],
						name: "init",
						payable: false,
						returns: "DoctorAppointment.state",
						stateful: false,
					},
					{
						arguments: [
							{
								name: "firstName",
								type: "string",
							},
							{
								name: "lastName",
								type: "string",
							},
							{
								name: "age",
								type: "int",
							},
							{
								name: "gender",
								type: "string",
							},
						],
						name: "bookappointment",
						payable: true,
						returns: "int",
						stateful: true,
					},
					{
						arguments: [
							{
								name: "patient_id",
								type: "int",
							},
						],
						name: "patientvisited",
						payable: false,
						returns: {
							tuple: [],
						},
						stateful: true,
					},
					{
						arguments: [
							{
								name: "patient_id",
								type: "int",
							},
						],
						name: "getpatientdetail",
						payable: false,
						returns: "DoctorAppointment.patient",
						stateful: false,
					},
					{
						arguments: [
							{
								name: "patient_id",
								type: "int",
							},
						],
						name: "undoVisitAndRefund",
						payable: true,
						returns: {
							tuple: [],
						},
						stateful: true,
					},
					{
						arguments: [],
						name: "getAllPatients",
						payable: false,
						returns: {
							map: ["int", "DoctorAppointment.patient"],
						},
						stateful: false,
					},
				],
				kind: "contract_main",
				name: "DoctorAppointment",
				payable: false,
				state: {
					record: [
						{
							name: "doctor",
							type: "address",
						},
						{
							name: "patients",
							type: {
								map: ["int", "DoctorAppointment.patient"],
							},
						},
						{
							name: "registrationFee",
							type: "int",
						},
					],
				},
				typedefs: [
					{
						name: "patient",
						typedef: {
							record: [
								{
									name: "firstName",
									type: "string",
								},
								{
									name: "lastName",
									type: "string",
								},
								{
									name: "age",
									type: "int",
								},
								{
									name: "gender",
									type: "string",
								},
								{
									name: "isPaid",
									type: "bool",
								},
								{
									name: "isVisited",
									type: "bool",
								},
								{
									name: "patientAddress",
									type: "address",
								},
							],
						},
						vars: [],
					},
				],
			},
		},
	];

	let bytecode =
		"cb_+QJ8RgOgzumgebkfKJu/gSqzOHAP1hNuEOpeNr3U/yAqqzXTtIzAuQJOuQGr/hyRo38ANwEHNwACAxFGQw4kDwJvgibPLxiEAAcMBvsDRVBhdGllbnQgbm90IGZvdW5kKxoOhAAp7AoO/y0ahIQAAQM//jkybaIANwBnBzcHd3cHdxcXRwABAoT+RNZEHwA3AQc3AFUCghoOhC8AGgaGAAEDP/5GQw4kAjcANwBVACAgggcMBPsDmU9ubHkgdGhlIGRvY3RvciBjYW4gY2FsbCB0aGlzIGZ1bmN0aW9uAQM//mEh/6gENwEHNwACAxFGQw4kDwJvgibPLxiEAAcMBvsDRVBhdGllbnQgbm90IGZvdW5kGgoIhCsaCggAKCwKCiAwfwcMCvsDbVBhdGllbnQgaGFzIGFscmVhZHkgdmlzaXRlZBoKEIYoLAwKZQgQKxoYhAAp7AoYfy0ahIQAAQM//nIdDtYENwR3dwd3BxoKAIQxCAAUMgICDAEADAECDAEEDAEGDAN/DAN/VQAnDA4PAgYaCgiCZQoIhi2qhIQCBgECAv6actIWADcBBzcHd3cHdxcXRwAvGIQABwwE+wNFUGF0aWVudCBub3QgZm91bmQrGIQAALibLwcRHJGjfzlwYXRpZW50dmlzaXRlZBE5Mm2iOWdldEFsbFBhdGllbnRzEUTWRB8RaW5pdBFGQw4keS5Eb2N0b3JBcHBvaW50bWVudC5vbmx5X2RvY3RvchFhIf+oSXVuZG9WaXNpdEFuZFJlZnVuZBFyHQ7WPWJvb2thcHBvaW50bWVudBGactIWQWdldHBhdGllbnRkZXRhaWyCLwCFNy40LjAA+wHyAA==";


	return (
		<div className=' bg-red-300 p-4 m-5 '>

			<form>

		<h1>Balance is : {balance}</h1>
			<label>Get Patient Detail</label>
			<input type='number' value={id} onChange={(e) => setId(e.target.value)} / >

				<button type='submit' className=' bg-green-700 rounded px-2' onClick={ (e) => handleGet(e)}>Get Detials</button>
			</form >
			
		</div>
	)
}

export default GetPatientDetials
