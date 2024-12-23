"use client"
import Image from "next/image";
import Header from "./Common/Header";

import Bigimg from "./Common/Bigimg";
import Featured from "./featured/Featured";
import Justin from "./justin/Justin";
import GiftCard from "./giftcard/Giftcard";
import Celebrity from "./celebrity/Celebrity";
import What_others_are_saying from "./other_saying/What_other";
import Made_for_Good_living from "./madeforgoodliving/Made_for_good_living";
import Footer from "./footer/Footer";
export default function Home() {
  return (
 <div className="overflow-hidden">
 <Header/>
 <Bigimg/>
 <Featured/>
 <Justin/>
 <GiftCard/>
 <Celebrity/>
 <What_others_are_saying/>
 <Made_for_Good_living/>
 <Footer/>
 </div>
  );
}
