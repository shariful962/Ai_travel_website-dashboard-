import React from "react";
import { IoMdClose } from "react-icons/io";
import jsPDF from "jspdf";

const TransactionModal = ({ isOpen, onClose, transaction }) => {
  if (!isOpen || !transaction) return null;

   const handleDownload = () => {
    const doc = new jsPDF();

    doc.setFontSize(16);
    doc.text("Transaction Details", 70, 20);

    doc.setFontSize(12);
    doc.text(`Transaction ID: #${transaction.trId}`, 20, 40);
    doc.text(`Date: ${transaction.date}`, 20, 50);
    doc.text(`Username: ${transaction.username}`, 20, 60);
    doc.text(
      `A/C Number: **** **** **** ${transaction.accont_number.slice(-4)}`,
      20,
      70
    );
    doc.text(`A/C Holder Name: ${transaction.holder_name}`, 20, 80);
    doc.text(`Transaction Amount: ${transaction.amount}`, 20, 90);
    doc.text(`Provider Name: ${transaction.provider_name}`, 20, 100);

    doc.save(`Transaction_${transaction.trId}.pdf`);
  };

  //  Function to print 
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 bg-black/50 bg-opacity-30 flexCenter md:ml-[256px] z-50">
      <div className="bg-white rounded-lg  w-[90%] md:w-[444px] border border-Primary">
        {/* Header */}
        <div className="border-b px-5 py-3 border-Primary relative">
          <h2 className="text-lg font-medium text-[#1F1D1D] text-center">
            Transaction Details
          </h2>
          <div className="bg-red-500 w-10 h-10 no-print absolute top-0 right-0 rounded-tr-[8px] rounded-bl-[20px] border border-red-500 cursor-pointer flexCenter">
            <button
            onClick={onClose}
            className=" text-xl text-white cursor-pointer"
          >
            <IoMdClose size={24} />
          </button>
          </div>
        </div>

        {/* Body */}
        <div className="text-sm text-[#1F1D1D]">
          <div className="border-b border-Primary">
            <div className="px-4 py-3 flexBetween">
              <div>
                <strong>Transaction ID:</strong>
              </div>{" "}
              <div>#{transaction.trId}</div>
            </div>
          </div>
          <div className="border-b border-Primary">
            <div className="px-4 py-3 flexBetween">
              <div>
                <strong>Date:</strong>
              </div>{" "}
              <div>{transaction.date}</div>
            </div>
          </div>
          <div className="border-b border-Primary">
            <div className="px-4 py-3 flexBetween">
              <div>
                <strong>User name:</strong>
              </div>{" "}
              <div>{transaction.username}</div>
            </div>
          </div>
          <div className="border-b border-Primary">
            <div className="px-4 py-3 flexBetween">
              <div>
                <strong>A/C number:</strong>
              </div>{" "}
              <div>**** **** **** {transaction.accont_number.slice(-4)}</div>
            </div>
          </div>
           <div className="border-b border-Primary">
            <div className="px-4 py-3 flexBetween">
                <div><strong>A/C holder name:</strong></div> <div>{transaction.holder_name}</div>
            </div>
          </div>
           <div className="border-b border-Primary">
            <div className="px-4 py-3 flexBetween">
                <div><strong>Transaction amount:</strong></div> <div>${transaction.amount}</div>
            </div>
          </div>
           <div className="border-b border-Primary">
            <div className="px-4 py-3 flexBetween">
                <div><strong>Provider name:</strong></div> <div>{transaction.provider_name}</div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-center gap-4 px-5 py-4 no-print">
          <button className="w-[180px] px-5 py-2 rounded-full border border-Primary text-Primary transition-colors duration-500 cursor-pointer hover:bg-Primary hover:text-white no-print" onClick={handleDownload}>
            Download
          </button>
          <button className="w-[180px] px-5 py-2 rounded-full bg-Primary text-white cursor-pointer no-print" onClick={handlePrint}>
            Print
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransactionModal;

