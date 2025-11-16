import { z } from "zod";

export const zBigIntToString = z.bigint().transform((val: bigint) => val.toString());
export const zStringToBigInt = z.string().transform((val: string) => BigInt(val));
