import { Analyser } from "../Summary";
import { MatchData } from "../MatchData";
import { MatchResult } from "../MatchResult";

export class WinsAnalysis implements Analyser {
  constructor(public teamName: string) {}

  run(matches: MatchData[]): string {
    let wins = 0;
    for (const match of matches) {
      if (match[1] === this.teamName && match[5] === MatchResult.homeWin) {
        wins++;
      } else if (
        match[2] === this.teamName &&
        match[5] === MatchResult.awayWin
      ) {
        wins++;
      }
    }

    return `Team ${this.teamName} won : ${wins} matches.`
  }
}
