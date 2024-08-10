import prisma from "@/lib/db";
import Link from "next/link";

export default async function page({ params }) {
  const item = await prisma.post.findUnique({
    where: { id: params.id },
  });
  return (
    <div className='my-5 w-[40%] mx-auto'>
      <div className='flex justify-between items-center'>
        <h3>One post</h3>
        <Link
          href={`/posts`}
          className='bg-red-500 text-white px-5 py-2 rounded-md'
        >
          Back
        </Link>
      </div>
      <div className='shadow-md px-3 py-5 rounded-md flex flex-col my-3'>
        <h3 className='text-left font-semibold text-3xl'>{item?.title}</h3>
        <p className='text-left font-normal'>{item?.content}</p>
        <form action='' method='post'>
          <input
            type='text'
            name='id'
            placeholder={item?.id}
            value={item?.id}
            className='input'
          />
          <button
            type='submit'
            className='bg-red-500 text-white px-5 py-2 cursor-pointer w-fit rounded-md mt-3 hover:shadow-md'
          >
            Delete
          </button>
        </form>
      </div>
    </div>
  );
}
