"use strict";
const React = require("react");
const importJsx = require("import-jsx");
const { useEffect, useState } = require("react");
const { Text, Box, useApp, useInput } = require("ink");
const FileList = importJsx("./components/fileList.jsx");
const Submit = importJsx("./components/submit.jsx");
const colors = require("./components/styles.json");

const getStatus = require("./actions/getStatus");
const addFiles = require("./actions/addFiles");

const App = ({ name = "Stranger", all = false }) => {
	const [files, setFiles] = useState([]);
	const [focused, setFocused] = useState(null);
	const [isSubmitted, setSubmitted] = useState(false);
	const { exit } = useApp();

	// handle --all flag
	if (all) {
		addFiles(null, true);
		exit();
	}

	// get files on first render
	useEffect(() => {
		let fileList = getStatus();

		if (fileList === null) {
			exit();
		}

		fileList = fileList.map((file) => [file, false]);

		setFiles(fileList);
	}, []);

	// listen to user input
	useInput((input, key) => {
		if (input === "q") {
			exit();
		}

		if (key.return && focused === "submit") {
			const submittedFiles = [];
			files.forEach((file) => {
				if (file[1] === true) {
					submittedFiles.push(file[0]);
				}
			});

			addFiles(submittedFiles);
			setSubmitted(true);

			exit();
		}

		if (key.return && focused !== "submit") {
			handleChoice(focused);
		}
	});

	// new state generator
	const handleChoice = (idx) => {
		const toggledFile = files[idx].slice();
		toggledFile[1] = !toggledFile[1];

		const newFiles = [...files];
		newFiles[idx] = toggledFile;

		setFiles(newFiles);
	};

	return (
		<Box flexDirection="column">
			<Box
				justifyContent="center"
				borderStyle="double"
				borderColor={colors.orange}
			>
				<Text color={colors.orange}>Select Files to Add</Text>
			</Box>
			<FileList files={files} setFocused={setFocused} />
			<Submit setFocused={setFocused} />
			{isSubmitted && (
				<Text backgroundColor={colors.blue} bold>
					Files Added
				</Text>
			)}
		</Box>
	);
};

module.exports = App;
