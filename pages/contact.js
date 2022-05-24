import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

import { createClient } from "../prismicio"
import { components } from "../slices/index.js";

import Image from "next/image";

import Layout from "../components/Layout";
import toast, { Toaster } from 'react-hot-toast';


const Contact = ({ menu, data, slices }) => {

  const form = useRef();
  const notify = () => toast('✅ Email sucessfully sent!');


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_njshb2m', 
      'template_4bqngys', 
      form.current, 
      'kMTGTxh7Bpern8uK8'
      )
      .then((result) => {
          console.log(result.text);
          notify()
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <Layout menu={menu}>
      <Toaster />

    <div className="max-w-5xl mx-auto flex flex-col w-full p-8 mt-8">
      <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Contact me!</h2>
      <p className="leading-relaxed mb-5 text-gray-600">Lets shoot! Hit me up if you are interested in working together or have any questions!</p>
      <form ref={form} onSubmit={sendEmail}>
      <div className="relative mb-4">
        <label className="leading-7 text-sm text-gray-600">Name *</label>
        <input type="text" name="user_name" required className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
      <div className="relative mb-4">
        <label className="leading-7 text-sm text-gray-600">Email Address *</label>
        <input type="email" name="user_email" required className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
      <div className="relative mb-4">
        <label className="leading-7 text-sm text-gray-600">Phone Number </label>
        <input type="tel" name="user_phone" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
      <div className="relative mb-4">
        <label className="leading-7 text-sm text-gray-600">Message *</label>
        <textarea name="message" required className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <div className='flex mx-auto'>
      <button className="w-1/3 text-white 
       border-1 border-white hover:bg-white hover:text-black transition duration-300 ease-in-out py-2 px-6 focus:outline-none bg-black text-lg">
        <input type="submit" value="Send" />
      </button>
       </div>
      </form>

    </div>
    </Layout>
  )
}

export default Contact

export async function getStaticProps({ previewData }) {

  const client = createClient({ previewData })

  const menu = await client.getSingle("menu");

  return {
    props: { 
      menu: menu,
    }, 
    revalidate: 10,
  }
}