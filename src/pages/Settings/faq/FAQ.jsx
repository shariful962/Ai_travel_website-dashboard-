import React, { useState } from "react";
import { IoArrowBack } from "react-icons/io5";

const FAQ = () => {
  const [faqs, setFaqs] = useState([
    {
      id: 1,
      question: "Where can I find ongoing offers and deals?",
      answer: "Can I use the app offline inside a store?",
    },
    {
      id: 2,
      question: "What should I do if a QR code doesn’t scan properly?",
      answer: "",
    },
    {
      id: 3,
      question: "How do I contact support if I face a problem?",
      answer: "",
    },
    {
      id: 4,
      question: "Is my personal information safe?",
      answer: "",
    },
  ]);

  const [openId, setOpenId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editItem, setEditItem] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const handleDelete = (id) => {
    setFaqs(faqs.filter((f) => f.id !== id));
  };

  const handleEdit = (faq) => {
    setIsEditing(true);
    setEditItem(faq);
  };

  const handleSave = () => {
    setFaqs(
      faqs.map((f) => (f.id === editItem.id ? editItem : f))
    );
    setIsEditing(false);
    setEditItem(null);
  };

  const handleAdd = () => {
    const newFAQ = {
      id: Date.now(),
      question: "New FAQ Question",
      answer: "New FAQ Answer",
    };
    setFaqs([...faqs, newFAQ]);
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-4 bg-white rounded-lg shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <IoArrowBack className="text-xl cursor-pointer" />
          <h1 className="text-lg font-semibold">FAQ</h1>
        </div>
        <button
          onClick={handleAdd}
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
        >
          Add New FAQ
        </button>
      </div>

      {/* FAQ List */}
      <div className="space-y-3">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className="border rounded-lg p-4 shadow-sm"
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(faq.id)}
            >
              <h3 className="font-medium">{faq.question}</h3>
              <span className="text-gray-500">
                {openId === faq.id ? "−" : "+"}
              </span>
            </div>

            {openId === faq.id && (
              <p className="mt-2 text-gray-600 text-sm">
                {faq.answer || "No answer available."}
              </p>
            )}

            {openId === faq.id && (
              <div className="flex gap-2 mt-3">
                <button
                  onClick={() => handleEdit(faq)}
                  className="px-3 py-1 border rounded text-green-600 hover:bg-green-50"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(faq.id)}
                  className="px-3 py-1 border rounded text-red-600 hover:bg-red-50"
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Edit Modal */}
      {isEditing && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-lg font-semibold mb-4">Edit FAQ</h2>
            <input
              type="text"
              value={editItem.question}
              onChange={(e) =>
                setEditItem({ ...editItem, question: e.target.value })
              }
              className="w-full border p-2 rounded mb-3"
              placeholder="Question"
            />
            <textarea
              value={editItem.answer}
              onChange={(e) =>
                setEditItem({ ...editItem, answer: e.target.value })
              }
              className="w-full border p-2 rounded mb-4"
              placeholder="Answer"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 rounded border"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 rounded bg-green-600 text-white"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FAQ;
