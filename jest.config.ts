export default {
    preset: "ts-jest",
    testEnvironment: "jest-environment-jsdom",
    transform: {
        "^.+\\.tsx?$": "ts-jest",
        '^.+\\.jsx?$': 'babel-jest',
        "^.+\.css$": "<rootDir>/config/jest/cssTransform.js",
        "^(?!.*\.(js|jsx|mjs|cjs|ts|tsx|css|json)$)": "<rootDir>/config/jest/fileTransform.js",
    },

    transformIgnorePatterns: [
        ['/\\\\]node_modules[/\\\\](?!${esModules}).+\\.(js|jsx|mjs|cjs|ts|tsx)$',
            "^.+\.module\.(css|sass|scss)$",
        ],
    ],
    moduleNameMapper: {

        "\\.(gif|ttf|eot|svg|png)$": "./test/__ mocks __/fileMock.js",  
         "^react-native$": "react-native-web",
        "^.+\.module\.(css|sass|scss)$": "identity-obj-proxy",
    },
   
    bail: 1,
    verbose: true,
};

module.exports = {
    transformIgnorePatterns: [
        '/node_modules/(?!your-module)',
    ],
};
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
};
