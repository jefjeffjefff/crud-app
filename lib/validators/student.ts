import { z } from "zod";

export const studentFormSchema = z.object({
  studentNumber: z.string().trim().min(1, "Student number is required."),
  firstName: z.string().trim().min(1, "First name is required."),
  lastName: z.string().trim().min(1, "Last name is required."),
  middleName: z
    .string()
    .trim()
    .optional()
    .or(z.literal(""))
    .transform((value) => value || undefined),
  age: z.coerce.number().int().min(1, "Age must be at least 1.").max(120, "Age must be below 121."),
  address: z.string().trim().min(1, "Address is required."),
  gradeLevel: z.string().trim().min(1, "Grade level is required."),
});

export type StudentFormValues = z.infer<typeof studentFormSchema>;

export type StudentActionState = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
};
