import { z } from 'zod';

export const projectFormSchema = z.object({
  name: z.string().min(1, 'Full name is required.'),
  email: z.string().min(1, 'Email is required.').email('Invalid email format.'),
  phone: z.string().min(1, 'Phone number is required.'),
  company: z.string().min(1, 'Company name is required.'),
  projectType: z.array(z.string()).min(1, 'Please select at least one service.'),
  description: z.string().min(1, 'Project description is required.'),
  referral: z.string().min(1, 'Referral source is required.'),
});

export type ProjectFormData = z.infer<typeof projectFormSchema>;
