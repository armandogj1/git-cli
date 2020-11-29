const { execSync } = require("child_process");

const addFiles = (files, all = false) => {
	if (all) {
		execSync(`git add .`);
		return;
	}

	const filesString = files.join(" ");

	try {
		status = execSync(`git add ${filesString}`).toString();

		console.log(status);
	} catch (e) {
		return null;
	}
};

module.exports = addFiles;
