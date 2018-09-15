import lp from "left-pad";

export function leftPad(str: string, num: number): string {
    return lp(str, num);
}
