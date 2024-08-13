import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";

export default function Home() {
  return (
    <div className='max-w-7xl mx-auto py-10 flex flex-col md:flex-row'>
      <div className='flex flex-col flex-1'>
        <h3 className=''>Welcome to learning Prisma and more.</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nam
          eos, autem error assumenda eveniet ad maiores, cumque harum doloremque
          ullam dolorum, id recusandae architecto voluptas ipsum obcaecati
          ratione. Corporis.
        </p>
        <div className='btn-group'>
          <LoginLink>Log In</LoginLink>
        </div>
      </div>
    </div>
  );
}
