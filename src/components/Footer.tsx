import React from 'react'

function Footer() {
  return (
   <>
    <footer className="w-full bg-blue-500 px-4 pb-8 text-white pt-8  flex-col  md:flex-row md:items-center justify-between text-center md:px-10">
        <div className="">
            <img className="flex justify-center mx-auto"src="https://cosylab.iiitd.edu.in/recipedb/static/iiitd.png" alt=""/>
            
            <p className="m-2">Copyright © 2024 All rights reserved.</p>
            <p>This work is licensed under a <a className="hover:text-green-300" href="https://creativecommons.org/licenses/by-nc-sa/3.0/"  target="_blank">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License.</a></p>
            <p className="p-2">
                All material on this website is a product of research and is provided for your information only and may not be construed as medical advice or instruction.
            </p>
            <p>
                No action or inaction should be taken based solely on the contents of this information; instead, readers should consult appropriate health professionals on any matter relating to their health and well-being.
            </p>
           
            <div className="m-2">
                <a className="p-2 hover:text-green-300 hover:underline" href="https://iiitd.ac.in/" target="_blank">Indraprastha Institute of Information Technology Delhi (IIIT-Delhi)</a>&nbsp; | &nbsp;
                <a className=" hover:text-green-300 hover:underline" href="https://cosylab.iiitd.edu.in/" target="blank">Prof. Ganesh Bagler</a>
            </div>
          
             
        </div>
    </footer>
   </>
  )
}

export default Footer