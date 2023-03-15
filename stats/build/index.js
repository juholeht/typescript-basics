"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const Summary_1 = require("./Summary");
const matchReader = MatchReader_1.MatchReader.fromCsv('football.csv');
matchReader.load();
const summaryWithStaticMethod = Summary_1.Summary.winsAnalysisWithHtmlReport('Man United');
summaryWithStaticMethod.buildAndPrintReport(matchReader.matches);
/*
const summary = new Summary (
  new WinsAnalysis('Man United'),
  new ConsoleReport() // or HtmlReport
);
summary.buildAndPrintReport(matchReader.matches);
*/ 
