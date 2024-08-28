import { database } from '../database';

function getCommonKeywordsCount(str1: string, str2: string): number {
    const set1 = new Set(str1.toLowerCase().split(/\s+/));
    const set2 = new Set(str2.toLowerCase().split(/\s+/));
    let commonCount = 0;

    set1.forEach((word) => {
        if (set2.has(word)) {
            commonCount++;
        }
    });

    return commonCount;
}

export function Ai(input: string): string | null {
    let maxCommonKeywords = 0;
    let mostSimilarString: string | null = null;

    database.forEach((item) => {
        const commonKeywords = getCommonKeywordsCount(input, item);
        if (commonKeywords > maxCommonKeywords) {
            maxCommonKeywords = commonKeywords;
            mostSimilarString = item;
        }
    });

    return mostSimilarString;
}
