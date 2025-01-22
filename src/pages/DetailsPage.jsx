import React,{useState,useEffect} from 'react'
import { useParams,useNavigate } from 'react-router-dom';
import { fetchAccountantDetails } from '../api/FetchAccounts';
import Footer from '../components/Footer';

const DetailsPage = () => {

   // get the id from route  
    const {id} = useParams();
    const [accoount,setAccounts]=useState(null);
    const [loadingg,setLoading] = useState(true);
    const [error,setError] = useState(null)
    const navigate = useNavigate();
  
    useEffect(()=>{
      const AccountsDetails = async () =>{
        try {
          const data = await fetchAccountantDetails(id);
          setAccounts(data);
          setError(null)
          console.log(id)
        } catch (error) {
          setError("faild to load account details")
        }finally{
          setLoading(false);
        }
      }
  
      AccountsDetails();
    },[id])
  
    if(loadingg){
      return <div>Loading...</div>
    }
    if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <>
    <h1 className='text-4xl text-green-900 text-center mb-6 mt-12 font-bold'>Accountant Details</h1>
    <div className="container mx-auto p-6 my-12 w-[50%] border-2 shadow-xl bg-white ">
     
      {
        <div className="container mx-auto p-6 ">
        
        <img
          src={accoount.image}
          alt={accoount.name}
          className="w-40 h-40 rounded-lg mx-auto m-4"
        />
        <h1 className="text-4xl font-bold text-center m-4">{accoount.name}</h1>
        <div className='mx-auto '>
          <p className='font-bold text-lg'>About  </p>
        <p className="text-lg text-gray-700"><span >from</span> : {accoount.about.from}</p>
        <p className="text-lg text-gray-700"><span >partnerSince</span> : {accoount.about.partnerSince}</p>
        <p className="text-lg text-gray-700"><span >description</span> : {accoount.about.description}</p><br />

        <p className="text-lg text-gray-700"><span className='font-bold'>Id</span> : {accoount.id}</p>
        <p className="text-lg text-gray-700"><span className='font-bold'>rating</span> : {accoount.rating}</p>
        <p className="text-lg text-gray-700"><span className='font-bold'>reviewCount</span> : {accoount.reviewCount}</p>
        <p className="text-lg text-gray-700"><span className='font-bold'>price</span> : {accoount.price}</p>
        <p className="text-lg text-gray-700"><span className='font-bold'>taskComplexity</span> : {accoount.taskComplexity}</p>
        <p className="text-lg text-gray-700"><span className='font-bold'>deliveryTime</span> : {accoount.deliveryTime}</p>
        <p className="text-lg text-gray-700"><span className='font-bold'>intro</span> : {accoount.intro}</p> <br />

        <p className='font-bold text-lg'>testimonial  </p>
        <p className="text-lg text-gray-700"><span className='font-bold'>text</span> : {accoount.testimonial.text}</p>
        <p className="text-lg text-gray-700"><span className='font-bold'>author</span> : {accoount.testimonial.author}</p>
       

        </div>
      </div>
       
      }
       <div className='text-center'>
       <button
        onClick={() => navigate(-1)}
        className="px-4 py-2 mb-4 text-white bg-green-500 rounded hover:bg-green-700 "
      >
        Back
      </button>
       </div>
       
  </div>
  <Footer/>
  </>
  )
}

export default DetailsPage