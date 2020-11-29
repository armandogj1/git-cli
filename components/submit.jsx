const React = require("react");
const { useState, useEffect } = require("react");
const { Text, Newline, Box, useFocus } = require("ink");

const Submit = ({ setFocused }) => {
	const { isFocused } = useFocus();

	if (isFocused) {
		setFocused("submit");
	}

	return (
		<Box borderStyle={isFocused ? "double" : "round"} borderColor="blue">
			<Text>ADD</Text>
		</Box>
	);
};

module.exports = Submit;
