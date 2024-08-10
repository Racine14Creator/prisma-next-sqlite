import createPost from "@/actions/actions";
import prisma from "@/lib/db";
import Link from "next/link";

type Props = {};

export default async function PostPage({}: Props) {
  const data = await prisma.post.findMany();
  return (
    <div className='max-w-7xl w-[40%] mx-auto py-3'>
      <h3 className='text-center text-4xl font-bold'>Posts ({data.length})</h3>
      <div className='flex flex-col'>
        {data.map((item) => (
          <Link
            href={`/posts/${item.id}`}
            className='p-3 sm:py-5 hover:shadow-lg hover:bg-slate-300 sm:px-3 border my-2 rounded-md shadow-md cursor-pointer'
            key={item.id}
          >
            {item.title}
          </Link>
        ))}
      </div>

      <div className=' rounded-lg mt-3 bg-white text-black px-3 py-5'>
        <form
          action={createPost}
          method='post'
          className='flex flex-col gap-y-2'
        >
          <input
            type='text'
            value={"clznk1x850000c0srvzatpdab"}
            className='input'
          />
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            name='title'
            placeholder='Title'
            id='title'
            className='input'
          />
          <label htmlFor='content'>Message</label>
          <textarea
            className='input'
            name='content'
            placeholder='Message'
            id='content'
          ></textarea>
          <button
            type='submit'
            className='bg-red-500 w-fit text-white rounded-md px-5 py-3'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
