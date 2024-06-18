import { useRef } from "react";
import Card from "./Card"

function Foreground() {
  const ref = useRef(null); // it is used to ensure that the card cannot go out of box during motion so for that reason we can give it as reference that it can work only this reference.....
  const data = [
    {
      desc: "heloo everoy j d uajd ajhdd ai c aii  sdah vsi dhs cj jschdj jdch hdc", filesize: ".9mb", close: false,
      tag:
      {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
    {
      desc: "Hello!! My name is Ayush Agarwal", filesize: ".1mb", close: true,
      tag:
      {
        isOpen: true,
        tagTitle: "Upload Now",
        tagColor: "blue",
      },
    },
    {
      desc: "Hello buddy! Hope you are doing great work", filesize: ".10mb", close: false,
      tag:
      {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    }
  ];
  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
      {data.map((item, index) => (
        <Card key={index} data={item} reference={ref} />
      ))}
    </div>
  )
}

export default Foreground