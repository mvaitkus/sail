export const sailSizeForWindKts = (weight: number, windStrengthKnots: number) =>
    (1.34 * weight) / windStrengthKnots;

export const sailSizeForWindMps = (weight: number, windStrengthMps: number) =>
    (0.6893 * weight) / windStrengthMps;


export interface TypicalWindRange {
    ideal: number,
    min: number,
    max: number
}

export const windForSailMps = (weight: number, sailSize: number): TypicalWindRange => {
    const ideal = (0.6893 * weight) / sailSize
    const min = ideal * 0.8
    const max = ideal * 1.2
    return { ideal, min, max }
}

export const windForSailKts = (weight: number, sailSize: number): TypicalWindRange => {
    const ideal = (1.34 * weight) / sailSize
    const min = ideal * 0.8
    const max = ideal * 1.2
    return { ideal, min, max }
}
