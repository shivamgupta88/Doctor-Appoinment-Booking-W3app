import React, { useState } from "react";

function AddPatients({balance , address ,instance}) {
	const [fname, setFname] = useState();
	const [lname, setLname] = useState();
	const [age, setAge] = useState();
	const [gender, setGender] = useState();

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

	function handleSubmit(e) {
		// setFname(document.getElementById.fname.value)
		e.preventDefault();
		console.log(fname, lname, age, gender);
	}
	return (
		<div className=" bg-slate-700 m-10 p-10">
			<h1>Add Patients {balance} </h1>
			<form className="">
				<div className="p-2">
					<label>Patient first Name</label>
					<input
						type="text"
						className=" container border "
						value={fname}
						id="fname"
						onChange={(e) => {
							setFname(e.target.value);
						}}
					/>
				</div>

				<div className="p-2">
					<label>Patient last Name</label>
					<input
						type="text"
						className=" container border "
						value={lname}
						id="lname"
						onChange={(e) => {
							setLname(e.target.value);
						}}
					/>
				</div>

				<div className="p-2">
					<label>Patient age</label>
					<input
						type="number"
						className=" container border "
						value={age}
						id="age"
						onChange={(e) => {
							setAge(e.target.value);
						}}
					/>
				</div>

				<div className="p-2">
					<label>Patient Gender</label>
					<input
						type="text"
						className=" container border "
						value={gender}
						id="gender"
						onChange={(e) => {
							setGender(e.target.value);
						}}
					/>
				</div>

				<button
					onClick={(e) => {
						handleSubmit(e);
					}}
					className=" bg-green-600 rounded-r-sm px-3 "
				>
					Add Patient
				</button>
			</form>
		</div>
	);
}

export default AddPatients;
