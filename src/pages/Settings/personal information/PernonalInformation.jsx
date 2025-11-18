// import React, { useState } from 'react';

// function PernonalInformation() {
//   const [isEditing, setIsEditing] = useState(false);
//   const [name, setName] = useState('Tamim');
//   const [email, setEmail] = useState('gddvc@gmail.com');
//   const [phone, setPhone] = useState('+1242 5735353');
  
//   const handleEdit = () => {
//     setIsEditing(!isEditing);
//   };
  
//   return (
//     <div className="p-6">
//       <div className="flex justify-between items-center mb-6">
//         <h3 className="text-xl font-semibold">Personal Information</h3>
//         <button 
//           onClick={handleEdit} 
//           className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
//         >
//           Edit Profile
//         </button>
//       </div>
      
//       <div className="flex items-center">
//         <div className="mr-6">
//           <img 
//             src="https://upload.wikimedia.org/wikipedia/commons/6/69/Luffy2.png" 
//             alt="Profile" 
//             className="w-24 h-24 rounded-full"
//           />
//           <p className="text-center mt-2">Profile</p>
//         </div>

//         <div className="space-y-4">
//           <div className="flex items-center">
//             <label className="w-24 font-semibold">Name:</label>
//             {isEditing ? (
//               <input
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="p-2 border border-gray-300 rounded"
//               />
//             ) : (
//               <p>{name}</p>
//             )}
//           </div>

//           <div className="flex items-center">
//             <label className="w-24 font-semibold">Email:</label>
//             {isEditing ? (
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="p-2 border border-gray-300 rounded"
//               />
//             ) : (
//               <p>{email}</p>
//             )}
//           </div>

//           <div className="flex items-center">
//             <label className="w-24 font-semibold">Phone Number:</label>
//             {isEditing ? (
//               <input
//                 type="text"
//                 value={phone}
//                 onChange={(e) => setPhone(e.target.value)}
//                 className="p-2 border border-gray-300 rounded"
//               />
//             ) : (
//               <p>{phone}</p>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PernonalInformation;





// second 


// import React, { useState } from 'react';

// function PernonalInformation() {
//   const [isEditing, setIsEditing] = useState(false);
//   const [name, setName] = useState('Tamim');
//   const [email, setEmail] = useState('gddvc@gmail.com');
//   const [phone, setPhone] = useState('+1242 5735353');
  
//   const handleEdit = () => {
//     setIsEditing(!isEditing);
//   };
  
//   return (
//     <div className="p-6">
//       <div className="flex justify-between items-center mb-6">
//         <h3 className="text-xl font-semibold">Personal Information</h3>
//         <button 
//           onClick={handleEdit} 
//           className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
//         >
//           Edit Profile
//         </button>
//       </div>
      
//       <div className="flex items-center">
//         <div className="mr-6">
//           <img 
//             src="https://upload.wikimedia.org/wikipedia/commons/6/69/Luffy2.png" 
//             alt="Profile" 
//             className="w-24 h-24 rounded-full"
//           />
//           <p className="text-center mt-2">Profile</p>
//         </div>

//         <div className="space-y-4">
//           <div className="flex items-center">
//             <label className="w-24 font-semibold">Name:</label>
//             {isEditing ? (
//               <input
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="p-2 border border-gray-300 rounded"
//               />
//             ) : (
//               <p>{name}</p>
//             )}
//           </div>

//           <div className="flex items-center">
//             <label className="w-24 font-semibold">Email:</label>
//             {isEditing ? (
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="p-2 border border-gray-300 rounded"
//               />
//             ) : (
//               <p>{email}</p>
//             )}
//           </div>

//           <div className="flex items-center">
//             <label className="w-24 font-semibold">Phone Number:</label>
//             {isEditing ? (
//               <input
//                 type="text"
//                 value={phone}
//                 onChange={(e) => setPhone(e.target.value)}
//                 className="p-2 border border-gray-300 rounded"
//               />
//             ) : (
//               <p>{phone}</p>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PernonalInformation;


import { useState } from 'react'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

export default function PernonalInformation() {
  const [value, setValue] = useState()

  return (
    <div className="flex space-x-2 items-center">
      <PhoneInput
        international
        defaultCountry="US"
        value={value}
        onChange={setValue}
        className="p-2 border border-gray-300 rounded w-32"
        placeholder="Enter phone number"
      />
    </div>
  )
}
