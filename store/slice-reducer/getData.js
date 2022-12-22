export const getCurrentCompany =()=>async( dispatch )=> {

  try{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts').then(
    (data) => data.json())
    if(res?.length>0){
      dispatch(setPosts(res))
    }

  }catch{err=>{console.log("err",err)}}
  
};

 const setPosts=(data)=>(
  {
    type:"SET_POSTS",
    payload:data
 }
)


const initialState = {
  Posts:[],
  loading: false
};

//   console.log('newCart==========',newCart)

export default function(state = initialState, action) {
  switch (action.type) {
    
    case "SET_POSTS":
      console.log("action",action.type)
      return {
        ...state,
        Posts: action.payload,
        loading: false
      };
  

    default:
      return state;
  }
}
