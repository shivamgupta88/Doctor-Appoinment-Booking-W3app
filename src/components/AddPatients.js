import { AeSdk } from "@aeternity/aepp-sdk";
import React, { useState , useAlert } from "react";

function AddPatients({balance , address ,aeSdk}) {
	const [fname, setFname] = useState('');
	const [lname, setLname] = useState('');
	const [age, setAge] = useState(0);
	const [gender, setGender] = useState('');



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




async	function handleSubmit(e) {
		e.preventDefault();

		console.log(fname, lname, age, gender);
		console.log(AeSdk)

		

const  contract = await aeSdk.initializeContract({ aci, bytecode, address: "ct_2HtGkY1E74KKhggbihZ21S3yCKyTYbyntzfvUSZ9grHScZ1gqi" })
		const options1 = {
			amount: 200,
			callData: "",
			fee: null,
			gas: null,
			gasPrice: 1000000000,
		};
		const args = [fname,lname,age,gender];
		const options = Object.fromEntries(
			Object.entries(options1).filter(([, v]) => v != null),
		);
  
		contract
			?.$call("bookappointment",args, options)
			.then((result) => {
				console.log(result);
				// setSpendPromise(result.hash);
				// showAlert({ show: true, text: 'Idea has been Submitted successfullt!', type: 'success' })
				alert("patient added")
				setLname('')
				setFname('')
				setGender('')
				setAge(0)
				// setTimeout(() => {
				// 	hideAlert({ show: false, text: '', type: '' })
				// }, 3000)
				
				console.log(result);
			});
	};



	
// 	return (
// 		<div className=" bg-slate-700 m-10 p-10">
// 			<h1>Add Patients {balance} </h1>
// 			<form className="">
// 				<div className="p-2">
// 					<label>Patient first Name</label>
// 					<input
// 						type="text"
// 						className=" container border "
// 						value={fname}
// 						id="fname"
// 						onChange={(e) => {
// 							setFname(e.target.value);
// 						}}
// 					/>
// 				</div>

// 				<div className="p-2">
// 					<label>Patient last Name</label>
// 					<input
// 						type="text"
// 						className=" container border "
// 						value={lname}
// 						id="lname"
// 						onChange={(e) => {
// 							setLname(e.target.value);
// 						}}
// 					/>
// 				</div>

// 				<div className="p-2">
// 					<label>Patient age</label>
// 					<input
// 						type="number"
// 						className=" container border "
// 						value={age}
// 						id="age"
// 						onChange={(e) => {
// 							setAge(e.target.value);
// 						}}
// 					/>
// 				</div>

// 				<div className="p-2">
// 					<label>Patient Gender</label>
// 					<input
// 						type="text"
// 						className=" container border "
// 						value={gender}
// 						id="gender"
// 						onChange={(e) => {
// 							setGender(e.target.value);
// 						}}
// 					/>
// 				</div>

// 				<button
// 					onClick={(e) => {
// 						handleSubmit(e);
// 					}}
// 					className=" bg-green-600 rounded-r-sm px-3 "
// 				>
// 					Add Patient
// 				</button>
// 				{/* {spendPromise && (
//         <div className="mt-4">
//           <div className="font-bold text-lg mb-2">Spend result</div>
//           <p className="text-gray-700">{spendPromise}</p>
//         </div>
//       )} */}

// 			</form>
// 		</div>
// 	);
// }


return (
	<div className="bg-slate-800 text-white m-10 p-10 rounded-lg shadow-lg">
		<h1 className="text-2xl font-bold mb-4">Add Patients  </h1>
		<form className="space-y-4">
			<div className="flex flex-col">
				<label className="mb-2">Patient First Name</label>
				<input
					type="text"
					className="p-2 rounded border border-gray-300 bg-gray-700 text-white focus:ring-2 focus:ring-blue-500"
					value={fname}
					onChange={(e) => setFname(e.target.value)}
				/>
			</div>

			<div className="flex flex-col">
				<label className="mb-2">Patient Last Name</label>
				<input
					type="text"
					className="p-2 rounded border border-gray-300 bg-gray-700 text-white focus:ring-2 focus:ring-blue-500"
					value={lname}
					onChange={(e) => setLname(e.target.value)}
				/>
			</div>

			<div className="flex flex-col">
				<label className="mb-2">Patient Age</label>
				<input
					type="number"
					className="p-2 rounded border border-gray-300 bg-gray-700 text-white focus:ring-2 focus:ring-blue-500"
					value={age}
					onChange={(e) => setAge(e.target.value)}
				/>
			</div>

			<div className="flex flex-col">
				<label className="mb-2">Patient Gender</label>
				<input
					type="text"
					className="p-2 rounded border border-gray-300 bg-gray-700 text-white focus:ring-2 focus:ring-blue-500"
					value={gender}
					onChange={(e) => setGender(e.target.value)}
				/>
			</div>

			<button
				type="button"
				onClick={handleSubmit}
				className="py-2 px-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
			>
				Add Patient
			</button>
		</form>
	</div>
);
}

export default AddPatients;
