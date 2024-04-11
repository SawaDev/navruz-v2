const nextJs = require("next/jest");

const createJestConfig = nextJs({
	dir: "./",
});

/** @type {import('jest').Config} */
const config = {
	clearMocks: true,
	collectCoverage: true,
	coverageDirectory: "coverage",
	testEnvironment: "jsdom",
	moduleNameMapper: {
		"^@/components/(.*)$": "<rootDir>/components/$1",
	},
	moduleNameMapper: {
		"\\.(css|less|scss|sass)$": "<rootDir>/__mocks__/mockStyle.js",
	},
	setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
	transform: {
		"^.+\\.[t|j]sx?$": "babel-jest",
	},
};

module.exports = createJestConfig(config);
