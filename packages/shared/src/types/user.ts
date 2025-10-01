import z from "zod";

export const $user = z.object({
  id: z.uuidv4(),
  version: z.number().default(1),
  name:z.string(),
  email: z.email(),
  createdAt: z.string(), // Valida string ISO 8601
  updatedAt: z.string(), // Valida string ISO 8601
})

export const $newUser = $user.omit({
  id: true,
  version:true,
  createdAt: true,
  updatedAt: true,
});

export const $patchUser = $user.omit({
  id: true,
  version:true,
  createdAt: true,
  updatedAt: true,
}).partial();

export type User = z.infer<typeof $user>;
export type NewUser = z.infer<typeof $newUser>
export type PatchUser = z.infer<typeof $patchUser>


