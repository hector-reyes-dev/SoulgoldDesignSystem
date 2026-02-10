import imgImage1 from "figma:asset/d70cda1bbd50def02e504276383a12ac8679d7b5.png";
import img202602071312541 from "figma:asset/1dac8d01e5076a3483476cd1bcc39280b20e7754.png";
import imgImage2 from "figma:asset/aec10fca6ac34e80baf3049c7b7262e5ff1d624f.png";
import imgImage3 from "figma:asset/4530671a011883b58561beeb6031e2f57ed9479e.png";
import imgImage4 from "figma:asset/118d2281096a5d2299b32c55e83fba950c1277fc.png";
import imgImage5 from "figma:asset/5892133f17b4c4aca56cab7b574832cd03e2bbec.png";
import imgImage6 from "figma:asset/cdb614dcd504056b83c839a575db772634a31e22.png";
import imgImage7 from "figma:asset/3f404778bc6138310b140fe70c947d1602c0746c.png";

export default function Moodboard() {
  return (
    <div className="relative size-full" data-name="Moodboard">
      <div className="absolute h-[1536px] left-[608px] top-0 w-[1440px]" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
      </div>
      <div className="absolute h-[1536px] left-[2081px] top-0 w-[2048px]" data-name="2026-02-07_13-12-54 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img202602071312541} />
      </div>
      <div className="absolute h-[1080px] left-[608px] top-[1584px] w-[1440px]" data-name="image 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
      </div>
      <div className="absolute h-[1536px] left-[2199px] top-[1584px] w-[2048px]" data-name="image 3">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3} />
      </div>
      <div className="absolute h-[713px] left-[4129px] top-0 w-[2048px]" data-name="image 4">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4} />
      </div>
      <div className="absolute h-[1128px] left-[4303px] top-[768px] w-[1504px]" data-name="image 5">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage5} />
      </div>
      <div className="absolute h-[768px] left-[4303px] top-[1968px] w-[918px]" data-name="image 6">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage6} />
      </div>
      <div className="absolute h-[1536px] left-0 top-[2712px] w-[2048px]" data-name="image 7">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage7} />
      </div>
    </div>
  );
}