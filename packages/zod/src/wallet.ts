import { z } from "zod";
export * from "zod"

export const amountSchema = z.object({
  amount: z
    .string()
    .refine(
      (val) => /^\d+(\.\d{1,3})?$/.test(val),
      "Amount must be a valid number with up to 3 decimals"
    )
    .transform((val) => parseFloat(val))
    .refine((val) => val > 0, "Amount must be greater than 0"),
    asset: z.string()
});
