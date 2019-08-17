import { MatchReader } from "./MatchReader";
import { ConsoleReport } from './ReportTargets/ConsoleReport';
import { WinsAnalysis } from './Analysers/WinsAnalysis';
import { Summary } from './Summary';

const matchReader = new MatchReader("football.csv");
matchReader.read();
const matches = matchReader.data;

const summary = new Summary(new WinsAnalysis('West Ham'), new ConsoleReport());
summary.buildAndPrintReport(matches);