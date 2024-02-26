import Head from "next/head";
import {BsFillMoonStarsFill} from 'react-icons/bs';
import { AiFillLinkedin, AiFillTwitterCircle, AiFillYoutube } from "react-icons/ai";  
import { DiGithubBadge } from "react-icons/di";  
import { IoLogoLinkedin } from "react-icons/io"; 
import Image from "next/image";
import deved from '../public/deved.jpg' 
import datavis from "../public/datavis.jpg"
import ai from "../public/ai.jpg"
import computervision from "../public/computervision.png"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kunal Shenoy Portfolio Website</title>
        <meta name="description" content="Generated by cre"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-40">
        <section className="min-h-screen">
          
<nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="https://www.instagram.com/iamkunaaaaal/" target="_blank" class="flex items-center space-x-3 rtl:space-x-reverse">
      <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">KunalShenoy</span>
  </a>
  <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <button type="button" class="text-white bg-teal-600 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-teal-600 dark:hover:text-teal-700 dark:focus:ring-teal-800"><a href="https://drive.google.com/file/d/1lu4fk5lrOPnjlT_TityTx_mJnnm4qe26/view?usp=sharing"  target="_blank" rel="noopener noreferrer">Resume</a></button>
      <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <a href="#" class="block py-2 px-3 text-white bg-teal-700 rounded md:bg-transparent md:text-teal-700 md:p-0 md:dark:text-teal-500" aria-current="page">Home</a>
      </li>
      <li>  
        <a href="#Service" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-teal-700 md:p-0 md:dark:hover:text-teal-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
      </li>
      <li>
        <a href="#Experience" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-teal-700 md:p-0 md:dark:hover:text-teal-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Experience</a>
      </li>
      <li>
        <a href="#Projects" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-teal-700 md:p-0 md:dark:hover:text-teal-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Projects</a>
      </li>
      <li>
        <a href="#Skills" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-teal-700 md:p-0 md:dark:hover:text-teal-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Skills</a>
      </li>
      <li>
        <a href="#Contact" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-teal-700 md:p-0 md:dark:hover:text-teal-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
      </li>
    </ul>
  </div>
  </div>
</nav>

<div className="text-center p-10 pb-5">
            <h2 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-1 text-5xl font-bold text-teal-600 mx-auto py-9 pb-6 mt-8">Kunal Shenoy</h2>
            <h3 className="text-2xl py-2 md:text-3xl">Data Scientist</h3>
            <p className="text-md py-5 leading-6 text-gray-800 md:text-xl">
              Passionate about data and it's applications, I am proficient in  & Machine Learning, Deep Learning and Artificial Intelligence. Additionally, my efficient leadership skills enable me to drive teams towards success. I am always looking for opportunities to learn and grow in these areas and I am excited to connect with like-minded professionals in the industry.
            </p>

          </div>
          <div className="text-5xl flex justify-center gap-16 text-gray-600"> 
          <div>
            <a href="https://x.com/KunalS4545?t=QotvFJ2XM3neSdnuHdXyNA&s=09"  target="_blank" rel="noopener noreferrer">
            <AiFillTwitterCircle className="cursor-pointer" />
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/kunal-shenoy/"  target="_blank" rel="noopener noreferrer">  
            <IoLogoLinkedin className="cursor-pointer" />
            </a>
          </div>
          <div>
            <a href="https://github.com/kunalshenoy1604"  target="_blank" rel="noopener noreferrer">  
            <DiGithubBadge className="cursor-pointer" />
            </a>
          </div>
          <div>
            <a href="https://www.youtube.com/channel/UCg7uW80ZT8rCQuFEboWtS6Q"  target="_blank" rel="noopener noreferrer">  
            <AiFillYoutube className="cursor-pointer" />
            </a>
          </div>
            
            
          </div>
          <div className="relative mx-auto w-80 h-80 md:h-96 md:w-96">
            <Image src={deved}  layout="fill" objectFit="cover"/>
          </div>
        </section>

        <section>
          <div className="text-center mx-auto">
          <h2 id="Service" class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">My Services</h2>
            <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
              Providing practical knowledge in Data Science Technologies through hands-on projects, coursework and delivering data-driven solutions.
            </p>
          </div>

    <div className="lg:flex gap-10 shadow-lg p-15 rounded-xl">
      <div className="lg:flex gap-10 text-center mx-auto">
        <div className="shadow-lg p-10 rounded-xl">
          <Image src={ai} width={150} height={150} className="mx-auto"></Image>
          <h3 className="text-l font-bold tracking-tight text-gray-900 dark:text-white pt-8 pb-2">AI & ML Solutions</h3>
          <p className="py-2">I provide robust solutions for Prompt Engineering and Generative AI problems.</p>
          <h4 className="py-4 text-teal-600">Frameworks I use</h4>
          <p className="text-gray-800 py-1">Scikit-learn</p>
          <p className="text-gray-800 py-1">Pandas</p>
          <p className="text-gray-800 py-1">TensorFlow</p>
          <p className="text-gray-800 py-1">Keras</p>
        </div>
      </div>

            <div className="text-center mx-auto shadow-lg p-10 rounded-xl">
              <Image src={datavis} width={175} height={175} className="mx-auto"></Image>
              <h3 className="text-l font-bold tracking-tight text-gray-900 dark:text-white pt-2 pb-2">Data Visualizations</h3>
              <p className="py-2">Crafting insightful data visualizations to communicate complex information effectively</p>
              <h4 className="py-10 pb-4 text-teal-600">Tools I use</h4>
              <p className="text-gray-800 py-1">Matplotlib</p>
              <p className="text-gray-800 py-1">Seaborn</p>
              <p className="text-gray-800 py-1">Tableau</p>
              <p className="text-gray-800 py-1">PowerBI</p>
            </div>

            <div className="text-center mx-auto">
        <div className="shadow-xl p-10 rounded-xl">
          <Image src={computervision} width={150} height={150} className="mx-auto"></Image>
          <h3 className="text-l font-bold tracking-tight text-gray-900 dark:text-white pt-10 pb-2">Computer Vision Solutions</h3>
          <p className="py-2">I provide cutting-edge solutions for image and video analysis, object detection and recognition</p>
          <h4 className="py-10 pb-4  text-teal-600">Frameworks I use</h4>
          <p className="text-gray-800 py-1">OpenCV</p>
          <p className="text-gray-800 py-1">TensorFlow OCR API</p>
          <p className="text-gray-800 py-1">PyTorch</p>
          <p className="text-gray-800 py-1">Scikit-Image</p>
        </div>
      </div>
          </div>
        </section>
        <section class="bg-white dark:bg-gray-900">
  <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
      <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2  id="Experience" class=" mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">My Experience</h2>
          <p class="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
Bringing extensive team management and campaign expertise, complemented by hands-on internships to enhance knowledge.




</p>
      </div> 
      <div class="grid gap-8 mb-6 md:grid-cols-2">
          <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <a href="https://www.linkedin.com/company/stme-nmims-navi-mumbai/mycompany/" target="_blank">
                  <Image className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="/stuco.png" alt="Head of Marketing" width={300} height={45} />
              </a>
              <div class="p-5">
                  <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <a href="https://www.linkedin.com/company/stme-nmims-navi-mumbai/mycompany/" target="_blank">Head of Marketing</a>
                  </h3>
                  <span class="text-gray-500 dark:text-gray-400">Public Relations, STME</span>
                  <h4 class="text-l font-bold tracking-tight text-gray-900 dark:text-white py-3">July '23 - Present</h4>
                  <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Adept at fostering event growth through strategic engagements.</p>
                  
              </div>
          </div> 
          <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
              <Image className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="/e-cell.png" alt="Head of Marketing" width={300} height={45} />
              </a>
              <div class="p-5">
                  <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white pt-5">
                      <a href="#">Head of Administration</a>
                  </h3>
                  <span class="text-gray-500 dark:text-gray-400 pb-4">Entrepreneurship Cell, STME</span>
                  <h4 class="text-l font-bold tracking-tight text-gray-900 dark:text-white py-3">October '23 - Present</h4>
                  <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Proficiency in crafting strategic reports and meticulous administrative affairs for E-Cell organized events.</p>

              </div>
          </div> 
          <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
              <Image className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="/unstop.png" alt="Regional Student Director" width={300} height={45} />
              </a>
              <div class="p-5">
                  <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white pt-5">
                      <a href="#">Regional Student Director</a>
                  </h3>
                  <span class="text-gray-500 dark:text-gray-400 pb-4">Unstop</span>
                  <h4 class="text-l font-bold tracking-tight text-gray-900 dark:text-white py-3">September '23 - Present</h4>
                  <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Collaborating closely with Team Unstop to ensure heightened engagement within the student community.</p>

              </div>
          </div> 
          <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
              <Image className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="/netra.png" alt="Head of Marketing" width={300} height={45} />
              </a>
              <div class="p-5">
                  <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white pt-5">
                      <a href="#">Campaign Manager</a>
                  </h3>
                  <span class="text-gray-500 dark:text-gray-400 pb-4">Netra Campaign</span>
                  <h4 class="text-l font-bold tracking-tight text-gray-900 dark:text-white py-3">January '24 - Present</h4>
                  <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Orchestrating targeted initiatives, manage outreach, and drive engagement for Glaucoma Awareness</p>

              </div>
          </div> 
          <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
              <Image className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="/CodeClause.png" alt="DataScience Intern" width={300} height={45} />
              </a>
              <div class="p-5">
                  <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white pt-5">
                      <a href="#">Data Science Intern</a>
                  </h3>
                  <span class="text-gray-500 dark:text-gray-400 pb-4">CodeClause</span>
                  <h4 class="text-l font-bold tracking-tight text-gray-900 dark:text-white py-3">January '24 - February '24</h4>
                  <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Worked on Customer Segmentation, Age & Gender Detection Systems using Facial Analysis</p>

              </div>
          </div> 
          <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <Image className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="/codsoft.png" alt="Machine Learning Intern" width={300} height={45} />
              </a>
              <div class="p-5">
                  <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white pt-5">
                      <a href="#">Machine Learning Intern</a>
                  </h3>
                  <span class="text-gray-500 dark:text-gray-400 pb-4">CodSoft</span>
                  <h4 class="text-l font-bold tracking-tight text-gray-900 dark:text-white py-3">September '23 - October '23</h4>
                  <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Worked on several Machine Learning projects. Performed deep Exploratory Data Analysis and Visualizations</p>

              </div>
          </div> 
      </div>  
  </div>
  </section>
  <div class="container my-24 mx-auto md:px-6">
  
  <section class="mb-32 text-center lg:text-left" id="Projects">
    <h2 class=" text-center mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white mx-auto justify-center">
      My Projects
    </h2>
    <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
              Providing practical knowledge in Data Science Technologies through hands-on projects, coursework and delivering data-driven solutions.
      </p>
    <div class="grid gap-x-6 lg:grid-cols-3 lg:gap-x-12">
      <div class="mb-6 block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 lg:mb-0" data-te-ripple-init data-te-ripple-color="light">
        <div class="relative overflow-hidden bg-cover bg-no-repeat">
          <Image className="w-full rounded-t-lg" src="/weatherapp1.jpg" alt="Weather App" width={425} height={45}/>
          <a href="#!">
            <div
              class="absolute top-0 right-0 bottom-0 left-0 h-full w-full bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,0.2)]"></div>
          </a>
          <svg class="absolute left-0 bottom-0 text-white dark:text-neutral-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="currentColor"
              d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
            </path>
          </svg>
        </div>
        <div class="p-6">
          <h5 class="mb-4 text-lg font-bold">Weather App</h5>
          <p class="mb-6">
          I have created a dynamic Weather App using HTML, CSS, and JavaScript, which retrieves real-time weather data from WeatherAPI, providing visitors to my website with up-to-date and accurate weather information.
          </p>
          <a href="https://kunalshenoy1604.github.io/WeatherApp/" target="_blank" data-te-ripple-init data-te-ripple-color="light"
            class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-teal-500 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-teal-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-teal-500 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">Learn
            more</a>
        </div>
      </div>

      <div class="mb-6 block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 lg:mb-0">
        <div class="relative overflow-hidden bg-cover bg-no-repeat" data-te-ripple-init data-te-ripple-color="light">
        <Image className="w-full rounded-t-lg" src="/smartinventory.jpg" alt="Smart Inventory" width={425} height={45}/>
          <a href="#!">
            <div
              class="absolute top-0 right-0 bottom-0 left-0 h-full w-full bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,0.2)]"></div>
          </a>
          <svg class="absolute left-0 bottom-0 text-white dark:text-neutral-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="currentColor"
              d="M0,96L48,128C96,160,192,224,288,240C384,256,480,224,576,213.3C672,203,768,213,864,202.7C960,192,1056,160,1152,128C1248,96,1344,64,1392,48L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
            </path>
          </svg>
        </div>
        <div class="p-6">
          <h5 class="mb-4 text-lg font-bold">Smart Inventory Optimization using ML</h5>
          <p class="mb-6">
          I've created an inventory optimization ML model to categorize items into priority groups. Currently working on the frontend and APIs with real-time DB integration.
          </p>
          <a href="https://github.com/kunalshenoy1604/Smart_Inventory_Optimization" target="_blank" data-te-ripple-init data-te-ripple-color="light"
            class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-teal-500 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">Learn
            more</a>
        </div>
      </div>

      <div class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <div class="relative overflow-hidden bg-cover bg-no-repeat" data-te-ripple-init data-te-ripple-color="light">
        <Image className="w-full rounded-t-lg" src="/croppred.jpg" alt="Crop Pred" width={425} height={45}/>
          <a href="#!">
            <div
              class="absolute top-0 right-0 bottom-0 left-0 h-full w-full bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,0.2)]"></div>
          </a>
          <svg class="absolute left-0 bottom-0 text-white dark:text-neutral-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="currentColor"
              d="M0,288L48,256C96,224,192,160,288,160C384,160,480,224,576,213.3C672,203,768,117,864,85.3C960,53,1056,75,1152,69.3C1248,64,1344,32,1392,16L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
            </path>
          </svg>
        </div>
        <div class="p-6">
          <h5 class="mb-4 text-lg font-bold">KrishiSankalp</h5>
          <p class="mb-6">
            Developed a dynamic plant disease application in a group of 4 which is powered by TensorFlow-Keras in Backend, Flutter in Frontend and deployed on Firebase for Google Solutions Challenge in solving UN (SDGs). 
          </p>
          <a href="#!" data-te-ripple-init data-te-ripple-color="light"
            class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-teal-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-teal-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-teal-600 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">Learn
            more</a>
        </div>
      </div>
    </div>
  </section>

</div>

<section className="mb-8 pb-9" id="#Skills" >
<h2 class=" text-center mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white mx-auto justify-center " id="Skills">
      Technical Skills
    </h2>
<div class="flex flex-wrap gap-9 justify-center min-h-screen py-5">
    <div class="transform  rounded-xl h-40 w-40 sm:h-64 sm:w-64 bg-white shadow-xl transition duration-300 hover:scale-105">
        <div class="flex h-full justify-center items-center">
        <Image src="/pythonPP.png" alt="Python" width={200} height={45}/>
        </div>
    </div>
    <div class="transform  rounded-xl h-40 w-40 sm:h-64 sm:w-64 bg-white shadow-xl transition duration-300 hover:scale-105">
        <div class="flex h-full justify-center items-center">
        <Image src="/html-css.jpg" alt="Python" width={200} height={45}/>
        </div>
    </div>
    <div class="transform  rounded-xl h-40 w-40 sm:h-64 sm:w-64 bg-white shadow-xl transition duration-300 hover:scale-105">
        <div class="flex h-full justify-center items-center">
        <Image src="/my-sql.png" alt="My-Sql" width={200} height={45}/>
        </div>
    </div>
    <div class="transform  rounded-xl h-40 w-40 sm:h-64 sm:w-64 bg-white shadow-xl transition duration-300 hover:scale-105">
        <div class="flex h-full justify-center items-center">
        <Image src="/react.png" alt="React" width={200} height={45}/>
        </div>
    </div>
    <div class="transform  rounded-xl h-40 w-40 sm:h-64 sm:w-64 bg-white shadow-xl transition duration-300 hover:scale-105">
        <div class="flex h-full justify-center items-center">
        <Image src="/nextjs.png" alt="Nextjs" width={200} height={45}/>
        </div>
    </div>
    <div class="transform  rounded-xl h-40 w-40 sm:h-64 sm:w-64 bg-white shadow-xl transition duration-300 hover:scale-105">
        <div class="flex h-full justify-center items-center">
        <Image src="/github.png" alt="GitHub" width={200} height={45}/>
        </div>
    </div>
    <div class="transform  rounded-xl h-40 w-40 sm:h-64 sm:w-64 bg-white shadow-xl transition duration-300 hover:scale-105">
        <div class="flex h-full justify-center items-center">
        <Image src="/vs-code.png" alt="VSCode" width={200} height={45}/>
        </div>
    </div>
    <div class="transform  rounded-xl h-40 w-40 sm:h-64 sm:w-64 bg-white shadow-xl transition duration-300 hover:scale-105">
        <div class="flex h-full justify-center items-center">
        <Image src="/figma.png" alt="figma" width={200} height={45}/>
        </div>
    </div>
    <div class="transform  rounded-xl h-40 w-40 sm:h-64 sm:w-64 bg-white shadow-xl transition duration-300 hover:scale-105">
        <div class="flex h-full justify-center items-center">
        <Image src="/ms-office.png" alt="MSOffice" width={200} height={45}/>
        </div>
    </div>
</div>
</section>

<section class="bg-white dark:bg-gray-900">
<h2 class=" text-center mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white mx-auto justify-center" id="Contact">
      Contact me
    </h2>
    <p class="font-light text-gray-500 text-center sm:text-xl dark:text-gray-400">
    For inquiries or collaborations, feel free to reach out.</p>
  <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
      <form method='POST' action="https://getform.io/f/vbmAZEbY">
          <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div class="sm:col-span-2">
                  <label for="name" class="block mb-2 font-semibold text-gray-900 dark:text-white text-xl">Name</label>
                  <input type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-l rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="John Doe" required=""/>
              </div>
              <div class="w-full">
                  <label for="email" class="block mb-2 font-semibold text-xl  text-gray-900 dark:text-white">Email</label>
                  <input type="email" name="email" id="price" class="bg-gray-50 border border-gray-300 text-gray-900 text-l rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="xyzw@gmail.com" required=""/>
              </div>
              <div>
                  <label for="category" class="block mb-2 text-xl font-semibold text-gray-900 dark:text-white">Category</label>
                  <select id="category" name="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-l rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                      <option selected="">Select category</option>
                      <option value="Event Form">Event Form</option>
                      <option value="Schedule a Meeting">Schedule a meeting</option>
                      <option value="Project Proposal">Project Proposal</option>
                      <option value="General Inquiry">General Inquiry</option>
                  </select>
              </div>
              <div class="sm:col-span-2">
                  <label for="description" class="block mb-2 text-xl font-semibold text-gray-900 dark:text-white">Description</label>
                  <textarea id="description" rows="8" name="message" class="block p-2.5 w-full text-l text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your description here"></textarea>
              </div>
          </div>
          <button type="submit" class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-l font-medium text-center text-white bg-teal-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-teal-900 hover:bg-teal-800">
              Submit
          </button>
      </form>
  </div>
</section>
      </main>

      <footer class="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://www.linkedin.com/in/kunal-shenoy/" class="hover:underline">By Kunal Shenoy</a>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="#" class="hover:underline me-4 md:me-6">About</a>
        </li>
        <li>
            <a href="#Contact" class="hover:underline">Contact</a>
        </li>
    </ul>
    </div>
</footer>
    </div>
  
  );
}
