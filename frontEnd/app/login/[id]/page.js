"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";



export default function Home({params}) {

  const name=params.id;
  return (
    <div>

        <div>
          <Navbar logged={params.id} id={params}/>
          <div className="mb-7 md:h-[61vh] flex items-center justify-center">
            <div className="flex md:flex-row flex-col justify-around items-center">
              <div>
                <Image
                  src="https://www.pngplay.com/wp-content/uploads/13/BLACKPINK-Free-PNG.png"
                  width={730}
                  height={1500}
                  alt="blackpink-logo"
                />
              </div>
              <div>
                <div className="flex flex-col items-center">
                  <Image
                    src="https://i.pinimg.com/originals/5e/03/b2/5e03b2b551369c90da3247b22e490768.png"
                    width={610}
                    height={600}
                    alt="blackpink-logo"
                  />
                  <Image
                    src="https://cdn.pixabay.com/photo/2017/02/17/15/25/quiz-2074324_1280.png"
                    width={300}
                    height={600}
                    alt="blackpink-logo"
                  />
                  <Link
                    href="/quiz" state={{data: {name}}}
                    className="m-3 hover:bg-pink-400 px-9 py-1 border-[3px] border-pink-700 rounded-lg bg-black"
                  >
                    <Image
                      src="https://media0.giphy.com/media/MWs2LslS7uPbZlqiaQ/giphy.gif?cid=6c09b9522fuve5lnd9c7d5mpcolj9vmeuo0gz13vffj4ynpn&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s"
                      width={200}
                      height={600}
                      alt="blackpink-logo"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
    </div>
  );
}
