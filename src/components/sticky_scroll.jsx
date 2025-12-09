"use client";
import { StickyScroll } from "../ui/sticky-scroll-reveal";


const content = [
  {
    title: "Collabor<b>a</b>tive <br /> Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div
        className="flex size-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Real <b>T</b>ime <br /> Changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="flex size-full items-center justify-center text-white">
        <img
          src="/linear.webp"
          width={300}
          height={300}
          loading="lazy"
          decoding="async"
          className="size-full object-cover"
          alt="linear board demo" />
      </div>
    ),
  },
  {
    title: "Versi<b>o</b>n <br /> Control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div
        className="flex size-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Running <b>O</b>ut <br /> of Content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div
        className="flex size-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Running out of content
      </div>
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    <div className="w-full py-16 animate-fade-in-up cyber-grid relative">
      <div className="section-divider absolute top-0" />
      <div className="container mx-auto px-5 md:px-10 mb-16">
        <div className="text-center animate-fade-in-up">
          <p className="font-general text-sm uppercase tracking-wider text-blue-300 mb-6 text-glow">
            Interactive Experience
          </p>
          <div className="overflow-hidden">
            <h2 className="font-zentry text-4xl md:text-6xl font-black text-blue-50 text-glow mb-8 animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
              <span className="inline-block animate-bounce-subtle" style={{ animationDelay: '0.5s' }}>Coll</span>
              <b className="text-purple-400 inline-block animate-bounce-subtle" style={{ animationDelay: '0.6s' }}>a</b>
              <span className="inline-block animate-bounce-subtle" style={{ animationDelay: '0.7s' }}>bor</span>
              <b className="text-pink-400 inline-block animate-bounce-subtle" style={{ animationDelay: '0.8s' }}>a</b>
              <span className="inline-block animate-bounce-subtle" style={{ animationDelay: '0.9s' }}>tive</span>
              <br className="md:hidden" />
              <span className="inline-block animate-bounce-subtle" style={{ animationDelay: '1.0s' }}>Platf</span>
              <b className="text-blue-400 inline-block animate-bounce-subtle" style={{ animationDelay: '1.1s' }}>o</b>
              <span className="inline-block animate-bounce-subtle" style={{ animationDelay: '1.2s' }}>rm</span>
            </h2>
          </div>
        </div>
      </div>
      <StickyScroll 
        content={content} 
        contentClassName="rounded-xl shadow-lg bg-gradient-to-br from-blue-900 via-purple-900 to-black glow-effect" 
      />
      <div className="section-divider absolute bottom-0" />
    </div>
  );
}
