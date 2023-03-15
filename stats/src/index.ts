import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";

const matchReader = MatchReader.fromCsv('football.csv');
matchReader.load();

const summaryWithStaticMethod = Summary.winsAnalysisWithHtmlReport('Man United');
summaryWithStaticMethod.buildAndPrintReport(matchReader.matches);

/*
const summary = new Summary (
  new WinsAnalysis('Man United'), 
  new ConsoleReport() // or HtmlReport
);
summary.buildAndPrintReport(matchReader.matches);
*/