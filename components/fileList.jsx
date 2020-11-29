const React = require("react");
const { Text, Newline, Box } = require("ink");
const importJsx = require("import-jsx");
const File = importJsx("./file.jsx");

const FileList = ({ files, setFocused }) => {
	return (
		<Box flexDirection="column">
			{files.map((file, idx) => (
				<File
					key={`${file[0]}-${idx}`}
					file={file}
					idx={idx}
					setFocused={setFocused}
				/>
			))}
		</Box>
	);
};

module.exports = FileList;
