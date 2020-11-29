const React = require("react");
const { useState, useEffect } = require("react");
const { Text, Newline, Box, useFocus } = require("ink");

const File = ({ file, idx, setFocused }) => {
	const { isFocused } = useFocus();

	if (isFocused) {
		setFocused(idx);
	}

	return (
		<Box key={`${file[0]}-${idx}`}>
			{isFocused ? (
				<Text inverse color="green">
					{file[0]} "*"
				</Text>
			) : (
				<Text color={file[1] && "green"}>{file[0]}</Text>
			)}
		</Box>
	);
};

module.exports = File;
