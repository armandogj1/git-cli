const React = require("react");
const { useState, useEffect } = require("react");
const { Text, Newline, Box, useFocus } = require("ink");
const colors = require("../styles.json");

const File = ({ file, idx, setFocused }) => {
	const { isFocused } = useFocus();

	// set app state to current focused index
	if (isFocused) {
		setFocused(idx);
	}

	return (
		<Box key={`${file[0]}-${idx}`}>
			{isFocused ? (
				<Text inverse color={colors.green}>
					{file[0]} *
				</Text>
			) : (
				<Text color={file[1] && colors.green}>{file[0]}</Text>
			)}
		</Box>
	);
};

module.exports = File;
