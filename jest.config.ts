import type { Config } from "jest"
import nextJest from "next/jest"

const createJestConfig = nextJest({
    dir: "./"
})

const customJestConfig: Config = {
    testEnvironment: "jsdom",
    testPathIgnorePatterns: ["/node_modules/", "/.next/"],
    collectCoverage: false,
    collectCoverageFrom: ["src/**/*.ts(x)"],
    moduleDirectories: ["node_modules", "src"],
    setupFilesAfterEnv: ["<rootDir>/.jest/setup.ts"]
}

export default createJestConfig(customJestConfig)
