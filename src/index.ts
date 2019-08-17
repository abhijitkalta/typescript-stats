import { MatchReader } from "./MatchReader";
import { ConsoleReport } from './ReportTargets/ConsoleReport';
import { WinsAnalysis } from './Analysers/WinsAnalysis';
import { Summary } from './Summary';
import { HtmlReport } from './ReportTargets/HtmlReport';

const matchReader = new MatchReader("football.csv");
matchReader.read();
const matches = matchReader.data;

// const summary = new Summary(new WinsAnalysis('West Ham'), new ConsoleReport());
const summary = new Summary(new WinsAnalysis('West Ham'), new HtmlReport());
summary.buildAndPrintReport(matches);