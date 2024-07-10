import React from 'react';

const Service = () => {
  return (
    <div className="Accordion w-[640px] h-[386px] flex-col justify-start items-start gap-4 inline-flex">
      <div className="AccordionItem self-stretch h-[106px] p-4 bg-white rounded-lg border border-zinc-300 flex-col justify-start items-start gap-2 flex">
        <div className="AccordionTitle self-stretch justify-start items-center gap-2 inline-flex">
          <div className="Title grow shrink basis-0 text-stone-900 text-base font-semibold font-['Inter'] leading-snug">Title</div>
          <div className="ChevronUp w-5 h-5 px-[5px] justify-center items-center flex" />
        </div>
        <div className="AccordionContent self-stretch justify-center items-center inline-flex">
          <div className="Body grow shrink basis-0 text-stone-900 text-base font-normal font-['Inter'] leading-snug">Answer the frequently asked question in a simple sentence, a longish paragraph, or even in a list.</div>
        </div>
      </div>
      <div className="AccordionItem self-stretch p-4 bg-neutral-100 rounded-lg border border-zinc-300 justify-start items-center inline-flex">
        <div className="AccordionTitle grow shrink basis-0 h-[22px] justify-start items-center gap-2 flex">
          <div className="Title grow shrink basis-0 text-stone-900 text-base font-semibold font-['Inter'] leading-snug">Title</div>
          <div className="ChevronDown w-5 h-5 px-[5px] justify-center items-center flex" />
        </div>
      </div>
      <div className="AccordionItem self-stretch p-4 bg-neutral-100 rounded-lg border border-zinc-300 justify-start items-center inline-flex">
        <div className="AccordionTitle grow shrink basis-0 h-[22px] justify-start items-center gap-2 flex">
          <div className="Title grow shrink basis-0 text-stone-900 text-base font-semibold font-['Inter'] leading-snug">Title</div>
          <div className="ChevronDown w-5 h-5 px-[5px] justify-center items-center flex" />
        </div>
      </div>
      <div className="AccordionItem self-stretch p-4 bg-neutral-100 rounded-lg border border-zinc-300 justify-start items-center inline-flex">
        <div className="AccordionTitle grow shrink basis-0 h-[22px] justify-start items-center gap-2 flex">
          <div className="Title grow shrink basis-0 text-stone-900 text-base font-semibold font-['Inter'] leading-snug">Title</div>
          <div className="ChevronDown w-5 h-5 px-[5px] justify-center items-center flex" />
        </div>
      </div>
      <div className="AccordionItem self-stretch p-4 bg-neutral-100 rounded-lg border border-zinc-300 justify-start items-center inline-flex">
        <div className="AccordionTitle grow shrink basis-0 h-[22px] justify-start items-center gap-2 flex">
          <div className="Title grow shrink basis-0 text-stone-900 text-base font-semibold font-['Inter'] leading-snug">Title</div>
          <div className="ChevronDown w-5 h-5 px-[5px] justify-center items-center flex" />
        </div>
      </div>
    </div>
  );
};

export default Home;
