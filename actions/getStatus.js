const { execSync } = require("child_process");

const getStatus = () => {
	let status;

	try {
		status = execSync("git status").toString();

		if (status.indexOf("nothing to commit") > -1) {
			return null;
		}

		const files = status
			.split("\n")
			.filter((string) => {
				string = string.trim();
				if (string.indexOf(" ") === -1 && string.length > 0) {
					return true;
				}

				// console.log();
				if (string.indexOf("modified:") === 0) {
					return true;
				}
			})
			.map((string) => {
				const stringArr = string.split(" ");

				return stringArr[stringArr.length - 1].trim();
			});

		// console.log(files);
		return files;
	} catch (e) {
		// return null if error
		return null;
	}
};

module.exports = getStatus;
