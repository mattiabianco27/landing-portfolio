import React from "react";
import Banner from "../atoms/Banner";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { sendMail } from "../sdconfig";

export default function TextInput(props) {
	const schema = yup.object().shape({
		email: yup
			.string()
			.email("Formato email non valido")
			.required("Campo richiesto"),
		name: yup.string().required("Campo richiesto"),
		object: yup.string().required("Campo richiesto"),
		text: yup.string().required("Campo richiesto"),
	});

	const initialValues = {
		name: "",
		email: "",
		object: "",
		text: "",
	};

	const onSubmitHandler = (data, { resetForm }) => {
		sendMail(props.mail, data.email, data.name, data.object, data.text);

		const banner = document.getElementById("form-banner");
		banner.className = "block mt-[100px]";
		resetForm();
		setTimeout(() => {
			banner.className = "hidden mt-[100px]";
		}, 3000);
	};

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={schema}
			onSubmit={onSubmitHandler}
		>
			<Form>
				<div className="pl-10">
					<div className="grid w-full grid-cols-2 gap-8 mb-7">
						<div>
							<Field
								className="p-2 w-full h-[50px] block pr-10 text-white bg-transparent border-2 rounded-lg placeholder-gray border-green font-fira focus:outline-none focus:ring-green focus:border-green"
								id="name"
								name="name"
								placeholder="Nome"
							/>
							<ErrorMessage
								name="name"
								render={(msg) => <div className="text-red-600">{msg}</div>}
							/>
						</div>
						<div>
							<Field
								className="p-2 block w-full h-[50px] pr-10 text-white bg-transparent border-2 rounded-lg placeholder-gray border-green font-fira focus:outline-none focus:ring-green focus:border-green"
								id="email"
								name="email"
								placeholder="Email"
							/>
							<ErrorMessage
								name="email"
								render={(msg) => <div className="text-red-600">{msg}</div>}
							/>
						</div>
					</div>
					<Field
						className="p-2 block w-full h-[50px] pr-10 text-white bg-transparent border-2 rounded-lg placeholder-gray border-green font-fira focus:outline-none focus:ring-green focus:border-green"
						id="object"
						name="object"
						placeholder="Oggetto"
					/>
					<ErrorMessage
						name="object"
						render={(msg) => <div className="text-red-600">{msg}</div>}
					/>
					<Field
						className="p-2 w-full h-[200px] placeholder-gray text-white border-2 rounded-lg mt-7 bg-transparent border-green font-fira focus:outline-none focus:ring-green focus:border-green"
						id="text"
						name="text"
						placeholder="Testo"
						as="textarea"
					/>
					<ErrorMessage
						name="text"
						render={(msg) => <div className="text-red-600">{msg}</div>}
					/>
					<div className="mt-8 absolute">
						<button
							type="submit"
							className="border border-green rounded-lg px-[12px] py-[4px] font-fira font-medium text-[16px] text-white transition duration-300 ease-in bg-black hover:bg-transparent hover:cursor-pointer"
						>
							Invio -&gt;
						</button>
						<div className="border border-green rounded-lg px-[12px] py-[4px] font-fira font-medium text-[16px] text-white bg-gradient-to-r from-green to-gray inline-block -z-10 absolute left-0">
							Invio -&gt;{" "}
						</div>
					</div>
					<Banner id="form-banner" />
				</div>
			</Form>
		</Formik>
	);
}
