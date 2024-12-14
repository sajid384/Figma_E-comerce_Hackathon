import React from 'react';

const Pages: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
     

      {/* FAQ Section */}
      <main className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold text-center mb-6">Questions Looks Here</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqData.map((item, index) => (
            <div key={index} className="bg-gray-300 shadow-sm p-4 rounded-md">
              <h3 className="text-lg font-semibold text-gray-800 flex justify-between items-center">
                {item.question}
                <button className="text-blue-500 font-bold">+</button>
              </h3>
              <p className="text-gray-600 mt-2">{item.answer}</p>
            </div>
          ))}
        </div>
      </main>

      
    </div>
  );
};

const faqData = [
  {
    question: "What type of chairs do you offer?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quia modi ullam."  
  },
  {
    question: "How can we get in touch with you?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis labore modi quidem."
  },
  {
    question: "Do your chairs come with a warranty?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident tempore aliquam."
  },
  {
    question: "What will be delivered? And When?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est corporis dicta autem."
  },
  {
    question: "Can I try a chair before purchasing?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, minus porro!"
  },
  {
    question: "How do I clean and maintain my Comforty chair?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente reprehenderit voluptas."
  },
];

export default Pages;
