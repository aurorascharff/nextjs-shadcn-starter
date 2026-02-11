'use server';

// Example server action - replace with your own
// import { prisma } from '@/db';
// import { revalidatePath } from 'next/cache';

export async function createExample(formData: FormData) {
  const name = formData.get('name') as string;

  if (!name) {
    return { error: 'Name is required' };
  }

  // Example: Create a new record
  // const example = await prisma.example.create({
  //   data: { name },
  // });

  // Revalidate the path to show the new data
  // revalidatePath('/');

  return { success: true };
}

export async function deleteExample() {
  // Example: Delete a record
  // await prisma.example.delete({
  //   where: { id },
  // });

  // revalidatePath('/');

  return { success: true };
}
