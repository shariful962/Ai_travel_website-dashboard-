import React from "react";
import { useOutletContext } from "react-router";
import { useParams } from "react-router";

const EmailView = () => {
  const {emailId} = useParams();
  const {emails} = useOutletContext();
  const email = emails.find((email) => email.id === Number(emailId) );


  if (!email) {
    return (
      <div className="flex items-center justify-center h-full text-gray-400">
        Select an email to view
      </div>
    );
  }

  return (
    <div className="p-5">
      {/* Subject */}
      <h2 className="text-xl font-semibold mb-1">{email.subject}</h2>

      {/* Sender & Time */}
      <div className="flex items-center gap-3 mb-4">
        <div className="h-10 w-10 rounded-full bg-purple-500 text-white flex items-center justify-center font-semibold">
          {email.name.charAt(0)}
        </div>

        <div>
          <p className="font-medium">{email.name}</p>
          <p className="text-sm text-gray-500">
            to me · {email.time}
          </p>
        </div>
      </div>

      {/* Email Body */}
      <div className="text-gray-700 leading-7 whitespace-pre-line">
        {email.message}
      </div>

      {/* Footer Buttons */}
      <div className="flex gap-4 mt-6">
        <button className="px-4 py-2 border rounded-full cursor-pointer">Reply</button>
        <button className="px-4 py-2 border rounded-full">Forward</button>
      </div>
    </div>
  );
};

export default EmailView;
