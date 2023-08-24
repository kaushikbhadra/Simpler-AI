import * as z from 'zod'

export const formSchema = z.object({
  prompt: z.string().min(1, {
    message: 'Image Prompt is required',
  }),
  amount: z.string().min(1),
  resolution: z.string().min(1),
})

export const amountOptions = Array.from({ length: 5 }, (_, index) => ({
  value: (index + 1).toString(),
  label: `${index + 1} Photo${index === 0 ? '' : 's'}`,
}))

const sizes = [256, 512, 1024]
export const resolutionOptions = sizes.map((size) => ({
  value: `${size}x${size}`,
  label: `${size}x${size}`,
}))
