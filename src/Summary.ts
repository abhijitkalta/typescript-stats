import { MatchData } from "./MatchData";

export interface Analyser {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  constructor(public analyser: Analyser, public outPutTraget: OutputTarget) {}
  buildAndPrintReport(matchData: MatchData[]) {
    const output = this.analyser.run(matchData);
    this.outPutTraget.print(output);
  }
}
