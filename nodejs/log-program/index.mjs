import { appendLogLine, readLogFile, writeLogLine } from "./logger.mjs";

writeLogLine("./nodejs/log-program/log.txt", "test line\n");
// readLogFile("log.txt");
appendLogLine("./nodejs/log-program/log.txt", "second line\n");
// readLogFile("log.txt");
