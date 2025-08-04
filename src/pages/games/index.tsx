import Navbar from '@/app/components/Navbar';
import Link from 'next/link';

const games =[
  {title:'Timing Master!' , path: '/games/games1'},
  {title:'Games 2' , path: '/games/games2'},
]
const ListGames = () => {

  return (
    <main className='flex min-h-screen flex-col bg-black'>
      <Navbar />
      <div className='lg:py-3 mt-28 relative mx-auto px-12 h-full'>
        <h1 className='h-1 py-8 text-center'>List of games</h1>
        <div className='pt-3 flex justify-center items-center flex-col'>
          {
            games.map((item,index)=>{
              return(
                <Link key={index} className='p-3 mt-2 border-2 rounded-full  border-coolGray-50' href={item.path}>{item.title}</Link>
              )
            
            })
          }
        </div>
       
      </div>
    </main>
  );
};

export default ListGames;
