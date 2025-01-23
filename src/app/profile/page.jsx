import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";

const page = async () => {
  

const {getUser} = getKindeServerSession();
const user = await getUser();

  return (
    <div className="container mx-auto p-4 text-center">
    
    <h1 className="font-bold">Welcome to your profile!  <span className="text-green-500 ">{user.given_name} </span></h1>
  </div>
  )
}

export default page