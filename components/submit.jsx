const React = require("react");
const { useState, useEffect } = require("react");
const { Text, Newline, Box, useFocus } = require("ink");
const colors = require("./styles.json");

const Submit = ({ setFocused }) => {
	const { isFocused } = useFocus();

	if (isFocused) {
		setFocused("submit");
	}

	return (
		<Box borderStyle={isFocused ? "double" : "round"} borderColor={colors.blue}>
			<Text color={colors.blue}>ADD</Text>
		</Box>
	);
};

module.exports = Submit;
